import Link from "next/link";
import { CheckCircle2, Heart, ShieldCheck, Sparkles, SmilePlus } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { TeamGalleryLightbox } from "@/components/TeamGalleryLightbox";
import { contact, heroImages } from "@/data/site";
import { buildMetadata } from "@/data/seo";

export const metadata = buildMetadata("/quienes-somos");

const values = [
  {
    title: "Juego con sentido",
    text: "Creamos experiencias donde los niños se divierten, exploran y aprenden jugando.",
    icon: Sparkles,
  },
  {
    title: "Espacio seguro",
    text: "Cuidamos cada detalle para que las familias se sientan tranquilas mientras los niños disfrutan.",
    icon: ShieldCheck,
  },
  {
    title: "Atención cercana",
    text: "Acompañamos cada visita con un trato amable, familiar y preocupado.",
    icon: SmilePlus,
  },
];

const highlights = [
  "Nacimos desde una necesidad real de entretención infantil segura y creativa.",
  "Diseñamos un lugar donde jugar, celebrar y compartir en familia.",
  "Nos enfocamos en calidad, calidez y experiencias que se recuerdan con cariño.",
];

const gallery = [
  {
    src: "/images/about/equipo-bkids-01.jpg",
    alt: "Equipo BKids saludando junto a niños en el espacio de juegos",
  },
  {
    src: "/images/about/equipo-bkids-02.jpg",
    alt: "Equipo BKids compartiendo en la piscina de pelotas",
  },
  {
    src: "/images/about/equipo-bkids-03.jpg",
    alt: "Integrantes del equipo BKids en el espacio de juegos",
  },
  {
    src: "/images/about/equipo-bkids-04.jpg",
    alt: "Equipo BKids sonriendo en el centro de juegos",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Quiénes somos"
        subtitle="Un proyecto familiar creado para que niños y familias vivan momentos seguros, felices y llenos de juego."
        image={heroImages.about}
        imageAlt="Equipo BKids en Las Condes"
        variant="collage"
        secondaryImage="/images/quienes-somos-familia-secundaria.jpg"
        badge="Be happy on the sea"
      />

      <section className="bg-[#e9f9ff] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black uppercase text-[#ef3854] shadow-sm">
              <Heart className="h-4 w-4" />
              Pilares BKids
            </p>
            <h2 className="mt-5 font-display text-5xl font-black leading-none text-[#0a72ce] sm:text-6xl">
              Lo que nos mueve
            </h2>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="h-full rounded-[30px] bg-white p-7 shadow-xl shadow-sky-100 ring-1 ring-sky-100"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffcc33] text-[#063f83]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-display text-4xl font-black leading-none text-[#0a72ce]">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-base font-semibold leading-7 text-slate-600">
                    {value.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bubble-pattern bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
              <article className="rounded-[30px] bg-[#e9f9ff] p-6 shadow-xl shadow-sky-100 ring-1 ring-sky-100 sm:p-8 lg:p-9">
                <p className="inline-flex items-center gap-2 rounded-full bg-[#ffcc33] px-4 py-2 text-sm font-black uppercase text-[#063f83]">
                  <Sparkles className="h-4 w-4" />
                  Somos BKids
                </p>
                <h2 className="mt-5 font-display text-4xl font-black leading-none text-[#0a72ce] sm:text-5xl">
                  Nuestra historia
                </h2>
                <div className="mt-5 space-y-4 text-base font-semibold leading-8 text-slate-600 sm:text-lg">
                  <p>
                    BKids nace desde una necesidad real: crear un lugar entretenido, seguro y
                    cercano donde los niños puedan jugar, explorar y compartir, mientras sus
                    familias disfrutan con tranquilidad.
                  </p>
                  <p>
                    Diseñamos un espacio pensado para acompañar la infancia con experiencias
                    alegres, creativas y llenas de momentos memorables.
                  </p>
                </div>
              </article>

              <article className="rounded-[28px] bg-white p-6 shadow-xl shadow-sky-100 ring-1 ring-sky-100 sm:p-8 lg:p-9">
                <p className="inline-flex items-center gap-2 rounded-full bg-[#fff7da] px-4 py-2 text-sm font-black uppercase text-[#ef3854] shadow-sm">
                  <Heart className="h-4 w-4" />
                  Momentos BKids
                </p>
                <h2 className="mt-5 max-w-2xl font-display text-4xl font-black leading-none text-[#0a72ce] sm:text-5xl">
                  Creamos momentos mágicos para niños y familias
                </h2>
                <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-slate-600 sm:text-lg">
                  En BKids creemos que la infancia está llena de descubrimientos, juego y recuerdos
                  felices. Por eso creamos un espacio donde cada visita invita a disfrutar,
                  compartir y crecer con alegría.
                </p>
                <div className="mt-6 grid gap-3">
                  {highlights.map((item) => (
                    <p
                      key={item}
                      className="flex gap-3 rounded-[22px] bg-[#e9f9ff] px-4 py-3 text-sm font-bold leading-6 text-slate-700 shadow-sm ring-1 ring-sky-100 sm:text-base"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00a9c7]" />
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/formulario"
                    className="inline-flex justify-center rounded-full bg-[#0a72ce] px-7 py-4 text-sm font-black uppercase text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5 hover:bg-[#045ca9]"
                  >
                    Consultar por correo
                  </Link>
                  <Link
                    href={contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center rounded-full border-2 border-[#0a72ce] px-7 py-4 text-sm font-black uppercase text-[#0a72ce] transition hover:-translate-y-0.5 hover:bg-[#0a72ce] hover:text-white"
                  >
                    Consultar por WhatsApp
                  </Link>
                </div>
              </article>
        </div>
      </section>

      <section className="bg-[#f6fcff] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black uppercase text-[#ef3854] shadow-sm">
              <Sparkles className="h-4 w-4" />
              Equipo BKids
            </p>
            <h2 className="mt-5 font-display text-5xl font-black leading-none text-[#0a72ce] sm:text-6xl">
              El equipo detrás de BKids
            </h2>
          </div>

          <TeamGalleryLightbox images={gallery} />
        </div>
      </section>

      <CTASection
        title="Ven a conocernos"
        text="Te esperamos en Las Condes para vivir una experiencia infantil segura, alegre y llena de momentos especiales."
        buttonLabel="Consultar por WhatsApp"
        href={contact.whatsappUrl}
        secondaryButtonLabel="Consultar por correo"
        secondaryHref="/formulario"
      />
      <BreadcrumbJsonLd route="/quienes-somos" />
    </>
  );
}
