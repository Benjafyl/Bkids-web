import Link from "next/link";
import { Cake, Clock, GraduationCap, Sparkles } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { PriceCard } from "@/components/PriceCard";
import { entryPrices, heroImages } from "@/data/site";

export default function PricesPage() {
  return (
    <>
      <Hero
        title="Precios"
        subtitle="Revisa todos nuestros precios"
        image={heroImages.prices}
        ctaLabel="Consultar disponibilidad"
        ctaHref="/formulario"
      />

      <section className="bubble-pattern bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#ffcc33] px-4 py-2 text-sm font-black uppercase text-[#063f83]">
              <Clock className="h-4 w-4" />
              Entradas
            </p>
            <h1 className="mt-5 font-display text-5xl font-black leading-none text-[#0a72ce] sm:text-6xl">
              Valores simples para venir a jugar
            </h1>
            <p className="mt-5 text-lg font-semibold leading-8 text-slate-600">
              Queremos que sea fácil entender cuánto cuesta venir a BKids. Aquí puedes revisar las
              entradas actuales y, si necesitas orientación, escribirnos directamente.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {entryPrices.map((price) => (
              <PriceCard key={price.title} {...price} />
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article className="rounded-[28px] bg-[#e9f9ff] p-6 shadow-lg shadow-sky-100 ring-1 ring-sky-100">
              <Clock className="h-8 w-8 text-[#0a72ce]" />
              <h2 className="mt-4 font-display text-3xl font-black text-[#0a72ce]">
                Horarios claros
              </h2>
              <p className="mt-3 text-base font-semibold leading-7 text-slate-600">
                Si quieres confirmar disponibilidad antes de venir, te recomendamos escribirnos por
                formulario o WhatsApp.
              </p>
            </article>
            <article className="rounded-[28px] bg-[#fff7da] p-6 shadow-lg shadow-yellow-100 ring-1 ring-yellow-100">
              <Sparkles className="h-8 w-8 text-[#ef3854]" />
              <h2 className="mt-4 font-display text-3xl font-black text-[#0a72ce]">
                Consulta rápida
              </h2>
              <p className="mt-3 text-base font-semibold leading-7 text-slate-600">
                Si vienes en grupo, quieres celebrar o necesitas orientación, te ayudamos a revisar
                la alternativa más conveniente.
              </p>
            </article>
            <article className="rounded-[28px] bg-[#eefcf5] p-6 shadow-lg shadow-emerald-100 ring-1 ring-emerald-100">
              <GraduationCap className="h-8 w-8 text-[#00a9c7]" />
              <h2 className="mt-4 font-display text-3xl font-black text-[#0a72ce]">
                Próximas novedades
              </h2>
              <p className="mt-3 text-base font-semibold leading-7 text-slate-600">
                Talleres, cumpleaños y nuevas experiencias pueden sumar valores y formatos
                especiales más adelante.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#e9f9ff] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 lg:px-8">
          <article className="rounded-[28px] bg-white p-7 shadow-xl shadow-sky-100 ring-1 ring-sky-100">
            <Cake className="h-10 w-10 text-[#ef3854]" />
            <h2 className="mt-4 font-display text-4xl font-black text-[#0a72ce]">
              Cumpleaños
            </h2>
            <p className="mt-3 text-base font-semibold leading-7 text-slate-600">
              Los packs de cumpleaños pueden variar según disponibilidad y formato. Si quieres
              celebrar en BKids, te ayudamos a revisar las mejores alternativas.
            </p>
            <Link
              href="/formulario"
              className="mt-6 inline-flex rounded-full bg-[#0a72ce] px-6 py-3 text-sm font-black uppercase text-white"
            >
              Consultar
            </Link>
          </article>

          <article className="rounded-[28px] bg-white p-7 shadow-xl shadow-sky-100 ring-1 ring-sky-100">
            <GraduationCap className="h-10 w-10 text-[#00a9c7]" />
            <h2 className="mt-4 font-display text-4xl font-black text-[#0a72ce]">
              Talleres / Afterschool
            </h2>
            <p className="mt-3 text-base font-semibold leading-7 text-slate-600">
              Los talleres y actividades se irán actualizando con sus horarios, edades y valores.
              Si te interesa, podemos avisarte cuando estén disponibles.
            </p>
            <Link
              href="/formulario"
              className="mt-6 inline-flex rounded-full bg-[#ef3854] px-6 py-3 text-sm font-black uppercase text-white"
            >
              Consultar
            </Link>
          </article>
        </div>
      </section>

      <CTASection
        title="Consulta disponibilidad"
        text="Confirma horarios, entradas, cumpleaños o talleres antes de tu visita."
        buttonLabel="Ir al formulario"
        href="/formulario"
        variant="coral"
      />
    </>
  );
}
