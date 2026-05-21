import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { workshopHighlights, workshopInfo, workshopWhatsappUrl } from "@/data/workshops";

export function WorkshopInfoSection() {
  return (
    <section className="bubble-pattern bg-[#e9f9ff] py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <div className="relative overflow-hidden rounded-[34px] bg-white shadow-2xl shadow-sky-100 ring-8 ring-white">
          <Image
            src={workshopInfo.image}
            alt="Niños participando en talleres y actividades BKids"
            width={950}
            height={980}
            className="h-[420px] w-full object-cover sm:h-[560px]"
          />
        </div>

        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black uppercase text-[#0a72ce] shadow-sm">
            <Sparkles className="h-4 w-4" />
            {workshopInfo.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-5xl font-black leading-none text-[#0a72ce] sm:text-6xl">
            {workshopInfo.title}
          </h2>
          <p className="mt-5 text-lg font-semibold leading-8 text-slate-700">
            {workshopInfo.text}
          </p>

          <div className="mt-7 grid gap-3">
            {workshopHighlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-[22px] bg-white p-4 font-bold leading-6 text-slate-700 shadow-sm ring-1 ring-sky-100"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00a9c7]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={workshopWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-4 text-sm font-black uppercase text-white shadow-lg shadow-emerald-100 transition hover:-translate-y-0.5 hover:bg-emerald-600"
            >
              Consultar talleres por WhatsApp
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/formulario"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-black uppercase text-[#0a72ce] shadow-lg shadow-sky-100 ring-1 ring-sky-100 transition hover:-translate-y-0.5"
            >
              Ir al formulario
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
