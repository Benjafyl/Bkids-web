import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { workshopFinalCta, workshopWhatsappUrl } from "@/data/workshops";

export function WorkshopCTA() {
  return (
    <section className="bg-[#0a72ce] py-14 text-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-4 md:flex-row md:items-center lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl font-black leading-none sm:text-5xl">
            {workshopFinalCta.title}
          </h2>
          <p className="mt-4 text-lg font-semibold leading-8 text-white/90">
            {workshopFinalCta.text}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={workshopWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-4 text-sm font-black uppercase text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-emerald-600"
          >
            Consultar por WhatsApp
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/formulario"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-black uppercase text-[#0a72ce] shadow-xl transition hover:-translate-y-0.5"
          >
            Consultar por correo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
