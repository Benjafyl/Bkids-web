import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Sparkles, Users, WandSparkles } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { contact, heroImages, workshopCopy, workshopRecap } from "@/data/site";

const workshopPoints = [
  "Actividades pensadas para aprender jugando.",
  "Espacios seguros, cercanos y estimulantes.",
  "Posibilidad de sumar horarios, edades y cupos cuando estén listos.",
];

export default function WorkshopsPage() {
  return (
    <>
      <Hero
        title="Talleres"
        subtitle="Diversión sin fin"
        image={heroImages.workshops}
        ctaLabel="Consultar talleres"
        ctaHref={contact.whatsappUrl}
        variant="split"
        eyebrow="Aprender jugando"
        badge="Creatividad y juego"
      />

      <section className="bg-[#e9f9ff] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black uppercase text-[#ef3854] shadow-sm">
              Recap BKids
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none text-[#0a72ce] sm:text-5xl">
              Recopilación de talleres pasados
            </h2>
            <p className="mt-4 text-base font-semibold leading-7 text-slate-600 sm:text-lg">
              Un vistazo a las actividades, celebraciones y experiencias que hemos vivido junto a
              los niños y sus familias.
            </p>
          </div>

          <div className="mt-9 grid auto-rows-[180px] gap-4 min-[520px]:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[170px]">
            {workshopRecap.map((item, index) => (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-[28px] bg-white shadow-xl shadow-sky-100 ring-4 ring-white ${
                  index === 0 ? "min-[520px]:col-span-2 lg:row-span-2" : ""
                } ${index === 4 ? "lg:col-span-2" : ""}`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 520px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#063f83]/75 via-[#063f83]/12 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/92 px-4 py-3 font-display text-2xl font-black leading-none text-[#0a72ce] shadow-lg shadow-slate-900/10">
                  {item.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bubble-pattern bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] bg-white shadow-2xl shadow-sky-100 ring-1 ring-sky-100">
            <Image
              src="/images/taller-legos.jpg"
              alt="Niños y familias compartiendo en BKids"
              width={850}
              height={760}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#e9f9ff] px-4 py-2 text-sm font-black uppercase text-[#0a72ce]">
              <GraduationCap className="h-4 w-4" />
              Talleres y actividades
            </p>
            <h1 className="mt-5 font-display text-5xl font-black leading-none text-[#0a72ce] sm:text-6xl">
              Aprender jugando en un entorno seguro
            </h1>
            <p className="mt-5 text-lg font-semibold leading-8 text-slate-600">{workshopCopy}</p>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              <article className="rounded-[24px] bg-[#fff7da] p-5 ring-1 ring-yellow-100">
                <Users className="h-8 w-8 text-[#ef3854]" />
                <p className="mt-3 text-sm font-bold leading-6 text-slate-700">
                  Actividades para compartir, explorar y participar en grupo.
                </p>
              </article>
              <article className="rounded-[24px] bg-[#e9f9ff] p-5 ring-1 ring-sky-100">
                <Sparkles className="h-8 w-8 text-[#0a72ce]" />
                <p className="mt-3 text-sm font-bold leading-6 text-slate-700">
                  Un formato flexible para presentar temas, edades y horarios.
                </p>
              </article>
              <article className="rounded-[24px] bg-[#eefcf5] p-5 ring-1 ring-emerald-100">
                <WandSparkles className="h-8 w-8 text-[#00a9c7]" />
                <p className="mt-3 text-sm font-bold leading-6 text-slate-700">
                  Experiencias creativas y entretenidas para seguir creciendo.
                </p>
              </article>
            </div>

            <div className="mt-7 rounded-[28px] bg-[#ffcc33] p-6 text-[#063f83]">
              <p className="text-sm font-black uppercase tracking-[0.16em]">Base preparada</p>
              <p className="mt-3 text-base font-black leading-7">
                Esta sección queda lista para sumar talleres definitivos, horarios, edades, cupos y
                valores cuando se definan.
              </p>
              <ul className="mt-4 space-y-2 text-sm font-bold leading-6 text-[#31557c]">
                {workshopPoints.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <Link
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-emerald-500 px-7 py-4 text-sm font-black uppercase text-white shadow-lg shadow-emerald-100 transition hover:bg-emerald-600"
            >
              Consultar talleres
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="¿Quieres saber cuándo parten?"
        text="Déjanos tus datos y te contactamos cuando estén disponibles los talleres y actividades."
        buttonLabel="Ir al formulario"
        href="/formulario"
      />
    </>
  );
}
