import nodemailer from "nodemailer";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  type?: unknown;
  message?: unknown;
  sourcePage?: unknown;
};

type ContactData = {
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
  sourcePage: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const runtime = "nodejs";

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validatePayload(payload: ContactPayload) {
  const data: ContactData = {
    name: asString(payload.name),
    email: asString(payload.email),
    phone: asString(payload.phone),
    type: asString(payload.type) || "Otro",
    message: asString(payload.message),
    sourcePage: asString(payload.sourcePage) || "No informado",
  };

  const errors: Partial<Record<keyof ContactData, string>> = {};

  if (!data.name) errors.name = "El nombre es requerido.";
  if (!emailRegex.test(data.email)) errors.email = "Ingresa un correo válido.";
  if (!data.message) errors.message = "El mensaje es requerido.";

  return { data, errors };
}

function getSmtpConfig() {
  const port = Number(process.env.SMTP_PORT ?? 465);

  return {
    host: process.env.SMTP_HOST,
    port,
    secure: process.env.SMTP_SECURE !== "false",
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    toEmail: process.env.CONTACT_FORM_TO_EMAIL,
    fromEmail: process.env.CONTACT_FORM_FROM_EMAIL,
  };
}

function getMissingConfig(config: ReturnType<typeof getSmtpConfig>) {
  return Object.entries(config)
    .filter(([key, value]) => key !== "port" && !value)
    .map(([key]) => key);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildEmailContent(data: ContactData, sentAt: string) {
  const rows = [
    ["Nombre", data.name],
    ["Correo", data.email],
    ["Teléfono", data.phone || "No informado"],
    ["Tipo de consulta", data.type],
    ["Página / origen", data.sourcePage],
    ["Fecha / hora", sentAt],
    ["Mensaje", data.message],
  ];

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 12px;font-weight:700;color:#0a72ce;border-bottom:1px solid #e6f6ff;">${escapeHtml(label)}</td>
          <td style="padding:10px 12px;color:#12314d;border-bottom:1px solid #e6f6ff;">${escapeHtml(value)}</td>
        </tr>
      `,
    )
    .join("");

  return {
    text,
    html: `
      <div style="font-family:Arial,sans-serif;background:#f3fbff;padding:24px;">
        <div style="max-width:680px;margin:0 auto;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #d7f5ff;">
          <div style="background:#0a72ce;color:#ffffff;padding:22px 24px;">
            <h1 style="margin:0;font-size:24px;">Nueva consulta desde la web BKids</h1>
          </div>
          <table style="width:100%;border-collapse:collapse;">
            ${htmlRows}
          </table>
        </div>
      </div>
    `,
  };
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const { data, errors } = validatePayload(payload);

    if (Object.keys(errors).length > 0) {
      return Response.json({ ok: false, errors }, { status: 400 });
    }

    const config = getSmtpConfig();
    const missingConfig = getMissingConfig(config);

    if (missingConfig.length > 0) {
      console.error("Missing SMTP contact form config:", missingConfig.join(", "));
      return Response.json(
        { ok: false, message: "El formulario no está configurado para enviar correos." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        user: config.user,
        pass: config.pass,
      },
    });

    const sentAt = new Intl.DateTimeFormat("es-CL", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "America/Santiago",
    }).format(new Date());
    const { html, text } = buildEmailContent(data, sentAt);

    await transporter.sendMail({
      from: `"BKids Web" <${config.fromEmail}>`,
      to: config.toEmail,
      replyTo: data.email,
      subject: "Nueva consulta desde la web BKids",
      text,
      html,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { ok: false, message: "No pudimos enviar tu mensaje. Inténtalo nuevamente." },
      { status: 500 },
    );
  }
}
