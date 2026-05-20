import Link from "next/link";
import { CheckCircle2, Heart, Sparkles } from "lucide-react";
import { AboutGalleryCarousel } from "@/components/AboutGalleryCarousel";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { contact, heroImages } from "@/data/site";

const values = [
  {
    title: "Juego con sentido",
    text: "Creamos experiencias donde la diversión también ayuda a explorar, compartir y aprender.",
  },
  {
    title: "Espacio seguro",
    text: "Cuidamos cada detalle para que niños, niñas y familias disfruten con tranquilidad.",
  },
  {
    title: "Atención cercana",
    text: "Queremos que cada visita se sienta amable, ordenada y pensada para pasarlo bien.",
  },
];

const highlights = [
  "Nacimos desde una necesidad real de entretención infantil segura y creativa.",
  "Diseñamos un lugar donde jugar, celebrar y compartir en familia.",
  "Nos enfocamos en calidad, calidez y experiencias que se recuerdan con cariño.",
];

const gallery = [
  {
    src: "/images/equipo-bkids-conocenos.jpg",
    alt: "Equipo de BKids compartiendo en la piscina de pelotas",
  },
  {
    src: "/images/quienes-somos-familia-secundaria.jpg",
    alt: "Mamá junto a sus niños disfrutando BKids",
  },
  {
    src: "/images/about-juego-grupal.jpg",
    alt: "Niña disfrutando la piscina de pelotas en BKids",
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

      <section className="bubble-pattern bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#ffcc33] px-4 py-2 text-sm font-black uppercase text-[#063f83]">
              <Heart className="h-4 w-4" />
              Somos BKids
            </p>
            <h1 className="mt-5 font-display text-5xl font-black leading-none text-[#0a72ce] sm:text-6xl">
              Creemos momentos mágicos para niños y familias
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
                Contactar
              </Link>
              <Link
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border-2 border-[#0a72ce] px-7 py-4 text-sm font-black uppercase text-[#0a72ce] transition hover:-translate-y-0.5 hover:bg-[#0a72ce] hover:text-white"
              >
                Consultar cumpleaños
              </Link>
            </div>
          </div>

          <AboutGalleryCarousel slides={gallery} />
        </div>
      </section>

      <section className="bg-[#e9f9ff] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:px-8">
          <div className="rounded-[36px] bg-white p-8 shadow-xl shadow-sky-100 ring-1 ring-sky-100 sm:p-10">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#ffcc33] px-4 py-2 text-sm font-black uppercase text-[#063f83]">
              <Sparkles className="h-4 w-4" />
              Nuestra historia
            </p>
            <div className="mt-6 space-y-5 text-lg font-semibold leading-8 text-slate-600">
              <p>
                BKids nace desde una motivación muy simple y muy importante: ofrecer a los más
                pequeños un lugar entretenido, seguro y bien pensado para jugar de verdad.
              </p>
              <p>
                Queríamos un espacio donde la diversión estuviera acompañada de orden, calidez y una
                experiencia agradable también para los adultos que acompañan.
              </p>
              <p>
                Hoy seguimos construyendo ese lugar con cariño, energía y atención al detalle, para
                que cada familia se lleve una buena experiencia y quiera volver.
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-[30px] bg-white p-7 shadow-xl shadow-sky-100 ring-1 ring-sky-100"
              >
                <h2 className="font-display text-4xl font-black leading-none text-[#0a72ce]">
                  {value.title}
                </h2>
                <p className="mt-4 text-base font-semibold leading-7 text-slate-600">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ven a conocernos"
        text="Te esperamos en Las Condes para vivir una experiencia infantil segura, alegre y llena de momentos especiales."
        buttonLabel="Contactar"
        href="/formulario"
      />
    </>
  );
}
