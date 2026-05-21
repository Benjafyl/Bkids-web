import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { workshopsHero, workshopWhatsappUrl } from "@/data/workshops";

export function WorkshopsHero() {
  return (
    <section className="relative overflow-hidden bg-[#e9f9ff] py-16 sm:py-24">
      <div className="absolute -left-10 top-24 h-28 w-28 rounded-full bg-[#ffcc33]/45" />
      <div className="absolute right-8 top-16 h-20 w-20 rounded-full bg-[#ff6078]/30" />
      <div className="absolute bottom-10 right-1/4 h-24 w-24 rounded-full bg-[#00a9c7]/20" />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div className="relative z-10">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black uppercase text-[#ef3854] shadow-sm">
            <Sparkles className="h-4 w-4" />
            {workshopsHero.eyebrow}
          </p>
          <h1 className="mt-5 font-display text-6xl font-black leading-none text-[#0a72ce] sm:text-7xl">
            {workshopsHero.title}
          </h1>
          <p className="mt-4 font-display text-3xl font-black text-[#00a9c7]">
            {workshopsHero.subtitle}
          </p>
          <p className="mt-5 max-w-xl text-lg font-semibold leading-8 text-slate-700">
            {workshopsHero.text}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={workshopWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-sm font-black uppercase text-white shadow-xl shadow-emerald-100 transition hover:-translate-y-0.5 hover:bg-emerald-600"
            >
              Consultar por WhatsApp
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/formulario"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black uppercase text-[#0a72ce] shadow-xl shadow-sky-100 ring-1 ring-sky-100 transition hover:-translate-y-0.5"
            >
              Consultar por correo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="relative min-h-[430px] sm:min-h-[540px]">
          <div className="absolute left-0 top-8 h-[78%] w-[68%] overflow-hidden rounded-[34px] bg-white shadow-2xl shadow-sky-200 ring-8 ring-white">
            <Image
              src={workshopsHero.primaryImage}
              alt="Taller creativo en BKids"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 80vw"
              className="object-cover"
            />
          </div>
          <div className="absolute right-0 top-0 h-[38%] w-[43%] overflow-hidden rounded-[28px] bg-white shadow-xl shadow-sky-100 ring-8 ring-white">
            <Image
              src={workshopsHero.secondaryImage}
              alt="Mesa preparada para taller en BKids"
              fill
              sizes="(min-width: 1024px) 24vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-8 h-[34%] w-[42%] overflow-hidden rounded-[28px] bg-white shadow-xl shadow-sky-100 ring-8 ring-white">
            <Image
              src={workshopsHero.tertiaryImage}
              alt="Niño participando en taller BKids"
              fill
              sizes="(min-width: 1024px) 24vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
