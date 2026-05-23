import Link from "next/link";
import { CheckCircle2, Heart, ShieldCheck, Sparkles, SmilePlus } from "lucide-react";
import { AboutGalleryCarousel } from "@/components/AboutGalleryCarousel";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { contact, heroImages } from "@/data/site";

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
    src: "/images/quienes-somos-foto-nosotros.jpg",
    alt: "Familia BKids compartiendo en el espacio de juegos",
  },
  {
    src: "/images/quienes-somos-equipo-secundaria.jpg",
    alt: "Equipo BKids compartiendo con niños en la piscina de pelotas",
  },
  {
    src: "/images/about-juego-grupal.jpg",
    alt: "Niños y familias disfrutando los juegos de BKids",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Quiénes somos"
        subtitle="Un proyecto familiar pensado para crear momentos felices, seguros y llenos de juego."
        image={heroImages.about}
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

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-4xl rounded-[36px] bg-[#e9f9ff] p-8 shadow-xl shadow-sky-100 ring-1 ring-sky-100 sm:p-10">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#ffcc33] px-4 py-2 text-sm font-black uppercase text-[#063f83]">
              <Sparkles className="h-4 w-4" />
              Nuestra historia
            </p>
            <h2 className="mt-5 font-display text-5xl font-black leading-none text-[#0a72ce] sm:text-6xl">
              Nuestra historia
            </h2>
            <div className="mt-6 space-y-5 text-lg font-semibold leading-8 text-slate-600">
              <p>
                BKids nace desde una necesidad real: crear un lugar entretenido, seguro y cercano
                donde los niños puedan jugar, explorar y compartir, mientras sus familias disfrutan
                con tranquilidad.
              </p>
              <p>
                Diseñamos un espacio pensado para acompañar la infancia con experiencias alegres,
                creativas y llenas de momentos memorables.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bubble-pattern bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#ffcc33] px-4 py-2 text-sm font-black uppercase text-[#063f83]">
              <Heart className="h-4 w-4" />
              Somos BKids
            </p>
            <h1 className="mt-5 font-display text-5xl font-black leading-none text-[#0a72ce] sm:text-6xl">
              Creamos momentos mágicos para niños y familias
            </h1>
            <p className="mt-6 text-lg font-semibold leading-8 text-slate-600">
              En BKids creemos que la infancia está llena de descubrimientos, juego y recuerdos
              felices. Por eso creamos un espacio donde cada visita invita a disfrutar, compartir y
              crecer con alegría.
            </p>
            <div className="mt-6 space-y-4">
              {highlights.map((item) => (
                <p
                  key={item}
                  className="flex gap-3 rounded-[24px] bg-[#e9f9ff] px-5 py-4 text-base font-bold leading-7 text-slate-700 shadow-sm ring-1 ring-sky-100"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00a9c7]" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/formulario"
                className="inline-flex rounded-full bg-[#0a72ce] px-7 py-4 text-sm font-black uppercase text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5 hover:bg-[#045ca9]"
              >
                Consultar por correo
              </Link>
              <Link
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border-2 border-[#0a72ce] px-7 py-4 text-sm font-black uppercase text-[#0a72ce] transition hover:-translate-y-0.5 hover:bg-[#0a72ce] hover:text-white"
              >
                Consultar por WhatsApp
              </Link>
            </div>
          </div>
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
              Personas reales detrás de cada experiencia
            </h2>
          </div>
          <AboutGalleryCarousel slides={gallery} />
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
    </>
  );
}
