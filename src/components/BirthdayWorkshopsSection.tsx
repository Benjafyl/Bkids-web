import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const homeCards = [
  {
    title: "Celebra su cumpleaños en BKids",
    text: "Un espacio entretenido, seguro y lleno de juegos para vivir una celebración inolvidable.",
    buttonLabel: "Consultar cumpleaños",
    href: "/cumpleanos",
    image: "/images/cumpleanos-header.jpg",
    alt: "Cumpleaños infantiles en BKids",
    accent: "bg-[#ffcc33] text-[#063f83]",
  },
  {
    title: "Talleres y actividades",
    text: "Actividades pensadas para aprender, jugar y desarrollar nuevas habilidades en un entorno entretenido.",
    buttonLabel: "Consultar talleres",
    href: "/talleres",
    image: "/images/taller-legos.jpg",
    alt: "Talleres infantiles en BKids",
    accent: "bg-white text-[#0a72ce]",
  },
];

export function BirthdayWorkshopsSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="inline-flex rounded-full bg-[#e9f9ff] px-4 py-2 text-xs font-black uppercase text-[#ef3854] shadow-sm">
            Experiencias BKids
          </p>
          <h2 className="mt-4 font-display text-4xl font-black leading-none text-[#0a72ce] sm:text-5xl">
            Celebra, aprende y juega con nosotros
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {homeCards.map((card) => (
            <article
              key={card.title}
              className="group relative min-h-[340px] overflow-hidden rounded-[8px] bg-[#0a72ce] shadow-[0_24px_70px_rgba(10,114,206,0.16)] sm:min-h-[390px]"
            >
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#063f83]/90 via-[#0a72ce]/45 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <h3 className="font-display text-4xl font-black leading-none sm:text-5xl">
                  {card.title}
                </h3>
                <p className="mt-4 max-w-xl text-base font-bold leading-7 text-white/90 sm:text-lg">
                  {card.text}
                </p>
                <Link
                  href={card.href}
                  className={`mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-black uppercase shadow-lg transition hover:-translate-y-0.5 ${card.accent}`}
                >
                  {card.buttonLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
