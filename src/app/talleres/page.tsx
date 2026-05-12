import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Sparkles } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { heroImages, workshopCopy } from "@/data/site";

export default function WorkshopsPage() {
  return (
    <>
      <Hero
        title="Talleres"
        subtitle="Diversión sin fin"
        image={heroImages.workshops}
        ctaLabel="Consultar talleres"
        ctaHref="/formulario"
      />

      <section className="bubble-pattern bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full bg-[#ffcc33]" />
            <Image
              src="/images/talleres-generico.jpg"
              alt="Talleres y afterschool BKids"
              width={850}
              height={700}
              className="relative rounded-[8px] object-cover shadow-2xl shadow-sky-100"
            />
          </div>

          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#e9f9ff] px-4 py-2 text-sm font-black uppercase text-[#0a72ce]">
              <GraduationCap className="h-4 w-4" />
              Talleres / Afterschool
            </p>
            <h1 className="mt-5 font-display text-5xl font-black leading-none text-[#0a72ce] sm:text-6xl">
              Aprender jugando en un entorno seguro
            </h1>
            <p className="mt-5 text-lg font-semibold leading-8 text-slate-600">{workshopCopy}</p>
            <div className="mt-7 rounded-[8px] bg-[#ffcc33] p-6 text-[#063f83]">
              <Sparkles className="h-8 w-8" />
              <p className="mt-3 text-base font-black">
                Esta sección queda preparada para sumar talleres definitivos, horarios, edades,
                cupos y valores.
              </p>
            </div>
            <Link
              href="/formulario"
              className="mt-7 inline-flex rounded-full bg-[#0a72ce] px-7 py-4 text-sm font-black uppercase text-white shadow-lg shadow-sky-200 transition hover:bg-[#045ca9]"
            >
              Consultar talleres
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Quieres saber cuándo parten?"
        text="Déjanos tus datos y te contactamos cuando estén disponibles los talleres y actividades afterschool."
        buttonLabel="Ir al formulario"
        href="/formulario"
      />
    </>
  );
}
