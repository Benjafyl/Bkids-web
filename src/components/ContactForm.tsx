"use client";

import { Send } from "lucide-react";
import Script from "next/script";
import { FormEvent, useEffect, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  type: "Entrada",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaSiteKey, setRecaptchaSiteKey] = useState("");
  const [isRecaptchaConfigLoading, setIsRecaptchaConfigLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadRecaptchaConfig() {
      try {
        const response = await fetch("/api/recaptcha", { cache: "no-store" });
        const data = (await response.json().catch(() => null)) as { siteKey?: string } | null;

        if (isMounted) {
          setRecaptchaSiteKey(data?.siteKey ?? "");
        }
      } finally {
        if (isMounted) {
          setIsRecaptchaConfigLoading(false);
        }
      }
    }

    loadRecaptchaConfig();

    return () => {
      isMounted = false;
    };
  }, []);

  function validate() {
    const nextErrors: FormErrors = {};
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

    if (!form.name.trim()) nextErrors.name = "El nombre es requerido.";
    if (!emailIsValid) nextErrors.email = "Ingresa un correo válido.";
    if (!form.message.trim()) nextErrors.message = "El mensaje es requerido.";

    return nextErrors;
  }

  async function getRecaptchaToken() {
    if (isRecaptchaConfigLoading) {
      throw new Error("reCAPTCHA se está cargando. Inténtalo nuevamente en unos segundos.");
    }

    if (!recaptchaSiteKey) return "";

    const grecaptcha = window.grecaptcha;

    if (!grecaptcha) {
      throw new Error("reCAPTCHA no está listo. Inténtalo nuevamente en unos segundos.");
    }

    return new Promise<string>((resolve, reject) => {
      grecaptcha.ready(() => {
        grecaptcha
          .execute(recaptchaSiteKey, { action: "contact_form" })
          .then(resolve)
          .catch(reject);
      });
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    setSubmitted(false);
    setSubmitError("");

    if (Object.keys(nextErrors).length === 0) {
      setIsSubmitting(true);

      try {
        const recaptchaToken = await getRecaptchaToken();
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...form,
            sourcePage: window.location.href,
            recaptchaToken,
          }),
        });

        const result = (await response.json().catch(() => null)) as
          | { ok?: boolean; errors?: FormErrors; message?: string }
          | null;

        if (!response.ok || !result?.ok) {
          if (result?.errors) setErrors(result.errors);
          setSubmitError(
            result?.message ?? "No pudimos enviar tu mensaje. Inténtalo nuevamente.",
          );
          return;
        }

        setSubmitted(true);
        setForm(initialState);
      } catch (error) {
        setSubmitError(
          error instanceof Error
            ? error.message
            : "No pudimos enviar tu mensaje. Inténtalo nuevamente.",
        );
      } finally {
        setIsSubmitting(false);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[8px] bg-white p-6 shadow-xl shadow-sky-100 ring-1 ring-sky-100 sm:p-8">
      {recaptchaSiteKey ? (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
          strategy="afterInteractive"
        />
      ) : null}
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-extrabold text-slate-700">
          Nombre
          <input
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="h-12 rounded-2xl border border-sky-100 bg-sky-50 px-4 font-semibold text-slate-900 outline-none transition focus:border-[#0a72ce] focus:bg-white"
            placeholder="Tu nombre"
          />
          {errors.name ? <span className="text-xs text-[#ef3854]">{errors.name}</span> : null}
        </label>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-extrabold text-slate-700">
            Correo
            <input
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              className="h-12 rounded-2xl border border-sky-100 bg-sky-50 px-4 font-semibold text-slate-900 outline-none transition focus:border-[#0a72ce] focus:bg-white"
              placeholder="correo@ejemplo.cl"
              type="email"
            />
            {errors.email ? <span className="text-xs text-[#ef3854]">{errors.email}</span> : null}
          </label>

          <label className="grid gap-2 text-sm font-extrabold text-slate-700">
            Teléfono
            <input
              value={form.phone}
              onChange={(event) => setForm({ ...form, phone: event.target.value })}
              className="h-12 rounded-2xl border border-sky-100 bg-sky-50 px-4 font-semibold text-slate-900 outline-none transition focus:border-[#0a72ce] focus:bg-white"
              placeholder="+56 9..."
              type="tel"
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm font-extrabold text-slate-700">
          Tipo de consulta
          <select
            value={form.type}
            onChange={(event) => setForm({ ...form, type: event.target.value })}
            className="h-12 rounded-2xl border border-sky-100 bg-sky-50 px-4 font-semibold text-slate-900 outline-none transition focus:border-[#0a72ce] focus:bg-white"
          >
            <option>Entrada</option>
            <option>Cumpleaños</option>
            <option>Talleres</option>
            <option>Otro</option>
          </select>
        </label>

        <label className="grid gap-2 text-sm font-extrabold text-slate-700">
          Mensaje
          <textarea
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
            className="min-h-36 rounded-2xl border border-sky-100 bg-sky-50 px-4 py-3 font-semibold text-slate-900 outline-none transition focus:border-[#0a72ce] focus:bg-white"
            placeholder="Cuéntanos cómo podemos ayudarte"
          />
          {errors.message ? <span className="text-xs text-[#ef3854]">{errors.message}</span> : null}
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-[#0a72ce] px-7 py-4 text-sm font-black uppercase text-white shadow-lg shadow-sky-200 transition hover:bg-[#045ca9]"
        >
          <Send className="h-4 w-4" />
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>

        {submitted ? (
          <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-extrabold text-emerald-700">
            Gracias por contactarnos. Te responderemos pronto.
          </p>
        ) : null}

        {submitError ? (
          <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-extrabold text-[#ef3854]">
            {submitError}
          </p>
        ) : null}
      </div>
    </form>
  );
}
