import Image from "next/image";
import Link from "next/link";
import { CalendarHeart, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { birthdayConditions, birthdayPacks, heroImages } from "@/data/site";

export default function BirthdaysPage() {
  return (
    <>
      <Hero
        title="Cumpleaños"
        subtitle="Ven a jugar y a reír!"
        image={heroImages.birthdays}
        ctaLabel="Consultar por cumpleaños"
        ctaHref="/formulario"
      />

      <section className="bubble-pattern bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#ffcc33] px-4 py-2 text-sm font-black uppercase text-[#063f83]">
              <CalendarHeart className="h-4 w-4" />
              Packs de cumpleaños
            </p>
            <h1 className="mt-5 font-display text-5xl font-black leading-none text-[#0a72ce] sm:text-6xl">
              Celebraciones temáticas listas para crecer
            </h1>
            <p className="mt-5 text-lg font-semibold leading-8 text-slate-600">
              Dejamos una estructura clara para agregar nuevos packs, servicios incluidos, horarios
              y valores cuando estén definidos.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {birthdayPacks.map((pack) => (
              <article
                key={pack.title}
                className="overflow-hidden rounded-[8px] bg-white shadow-xl shadow-sky-100 ring-1 ring-sky-100"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={pack.image}
                    alt={pack.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <h2 className="font-display text-4xl font-black text-[#ef3854]">
                    {pack.title}
                  </h2>
                  <p className="mt-3 font-semibold leading-7 text-slate-600">{pack.description}</p>
                  <Link
                    href="/formulario"
                    className="mt-6 inline-flex rounded-full bg-[#0a72ce] px-6 py-3 text-sm font-black uppercase text-white"
                  >
                    Consultar por cumpleaños
                  </Link>
                </div>
              </article>
            ))}

            <article className="rounded-[8px] bg-[#e9f9ff] p-7 shadow-xl shadow-sky-100">
              <h2 className="font-display text-4xl font-black text-[#0a72ce]">
                Condiciones de cumpleaños
              </h2>
              <ul className="mt-6 space-y-4">
                {birthdayConditions.map((condition) => (
                  <li key={condition} className="flex gap-3 text-base font-bold text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00a9c7]" />
                    {condition}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <CTASection
        title="Agenda una celebracion"
        text="Escríbenos y revisamos disponibilidad, horarios y alternativas para celebrar en BKids."
        buttonLabel="Ir al formulario"
        href="/formulario"
        variant="coral"
      />
    </>
  );
}
