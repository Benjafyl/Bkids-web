import Link from "next/link";
import { ArrowRight, Cake, Clock, GraduationCap, Sparkles } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { LocalCatalogSection } from "@/components/LocalCatalogSection";
import { PriceCard } from "@/components/PriceCard";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { contact, entryPrices, heroImages, socialLinks } from "@/data/site";
import { buildMetadata } from "@/data/seo";

export const metadata = buildMetadata("/precios");

export default function PricesPage() {
  return (
    <>
      <Hero
        title="Precios BKids"
        subtitle="Valores claros para venir a jugar"
        image={heroImages.prices}
        imageAlt="Juegos infantiles en BKids Las Condes"
        ctaLabel="Consultar por WhatsApp"
        ctaHref={contact.whatsappUrl}
        secondaryCtaLabel="Consultar por correo"
        secondaryCtaHref="/formulario"
        variant="compact"
        eyebrow="Entradas y consultas"
      />

      <section className="bubble-pattern bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#ffcc33] px-4 py-2 text-sm font-black uppercase text-[#063f83]">
              <Clock className="h-4 w-4" />
              Entradas
            </p>
            <h2 className="mt-5 font-display text-5xl font-black leading-none text-[#0a72ce] sm:text-6xl">
              Valores simples para venir a jugar
            </h2>
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

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-[28px] bg-[#e9f9ff] p-6 shadow-lg shadow-sky-100 ring-1 ring-sky-100">
              <Clock className="h-8 w-8 text-[#0a72ce]" />
              <h3 className="mt-4 font-display text-3xl font-black text-[#0a72ce]">
                Horarios claros
              </h3>
              <p className="mt-3 text-base font-semibold leading-7 text-slate-600">
                Para confirmar horarios, disponibilidad o cambios especiales, revisa las historias de{" "}
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="font-black text-[#0a72ce] underline decoration-[#ffcc33] decoration-2 underline-offset-4 transition hover:text-[#ef3854]"
                >
                  @bkids_chile
                </a>{" "}
                en Instagram antes de venir.
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
          </div>
        </div>
      </section>

      <LocalCatalogSection />

      <section className="bg-[#e9f9ff] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-display text-4xl font-black leading-none text-[#0a72ce] sm:text-5xl">
            Cumpleaños y talleres
          </h2>
          <div className="mt-8 grid items-stretch gap-6 md:grid-cols-2">
          <Link
            href="/cumpleanos"
            className="group flex h-full flex-col rounded-[28px] bg-white p-7 shadow-xl shadow-sky-100 ring-1 ring-sky-100 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-200"
          >
            <Cake className="h-10 w-10 text-[#ef3854]" />
            <h3 className="mt-4 font-display text-4xl font-black text-[#0a72ce]">
              Cumpleaños
            </h3>
            <p className="mt-3 text-base font-semibold leading-7 text-slate-600">
              Los packs de cumpleaños pueden variar según disponibilidad y formato. Si quieres
              celebrar en BKids, te ayudamos a revisar las mejores alternativas.
            </p>
            <span className="mt-auto inline-flex items-center pt-6 text-sm font-black uppercase text-[#0a72ce]">
              Consultar cumpleaños infantiles
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href="/talleres"
            className="group flex h-full flex-col rounded-[28px] bg-white p-7 shadow-xl shadow-sky-100 ring-1 ring-sky-100 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-200"
          >
            <GraduationCap className="h-10 w-10 text-[#00a9c7]" />
            <h3 className="mt-4 font-display text-4xl font-black text-[#0a72ce]">
              Talleres y actividades
            </h3>
            <p className="mt-3 text-base font-semibold leading-7 text-slate-600">
              Los talleres y actividades se irán actualizando con sus horarios, edades y valores.
              Si te interesa, podemos avisarte cuando estén disponibles.
            </p>
            <span className="mt-auto inline-flex items-center pt-6 text-sm font-black uppercase text-[#0a72ce]">
              Ver talleres infantiles
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Consulta disponibilidad"
        text="Confirma horarios, entradas, cumpleaños o talleres antes de tu visita."
        buttonLabel="Consultar por WhatsApp"
        href={contact.whatsappUrl}
        secondaryButtonLabel="Consultar por correo"
        secondaryHref="/formulario"
        variant="coral"
      />
      <BreadcrumbJsonLd route="/precios" />
    </>
  );
}
