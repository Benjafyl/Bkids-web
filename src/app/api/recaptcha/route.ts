export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json(
    {
      siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "",
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
