import Image from "next/image";
import { CheckCircle2, Heart, Sparkles } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { heroImages } from "@/data/site";

const values = ["Experiencias mágicas", "Diversión para celebrar", "Momentos únicos"];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Quiénes somos"
        subtitle="Be happy on the sea"
        image={heroImages.about}
      />

      <section className="bubble-pattern bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#ffcc33] px-4 py-2 text-sm font-black uppercase text-[#063f83]">
              <Heart className="h-4 w-4" />
              Nuestra esencia
            </p>
            <h1 className="mt-5 font-display text-5xl font-black leading-none text-[#0a72ce] sm:text-6xl">
              Infancia, juego y familia en un solo lugar
            </h1>
            <div className="mt-6 space-y-5 text-lg font-semibold leading-8 text-slate-600">
              <p>
                En BKids creemos que la infancia está llena de momentos mágicos y que el juego es
                una de las mejores formas de aprender, crecer y compartir.
              </p>
              <p>
                Nacimos con la misión de crear espacios seguros, entretenidos y llenos de
                imaginación, donde niños y niñas puedan disfrutar experiencias únicas junto a sus
                familias.
              </p>
              <p>
                Nos enfocamos en ofrecer entretención infantil de calidad, con actividades pensadas
                para estimular la creatividad, el movimiento, la exploración y la diversión.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-[#ffcc33]" />
            <div className="absolute -bottom-4 -right-4 h-28 w-28 rounded-full bg-[#ff6078]" />
            <Image
              src="/images/piscina-pelotas.jpg"
              alt="Juego infantil colorido en BKids"
              width={800}
              height={700}
              className="relative rounded-[8px] object-cover shadow-2xl shadow-sky-100"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#e9f9ff] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article key={value} className="rounded-[8px] bg-white p-7 shadow-xl shadow-sky-100">
                <Sparkles className="h-9 w-9 text-[#ef3854]" />
                <h2 className="mt-4 font-display text-4xl font-black text-[#0a72ce]">
                  {value}
                </h2>
                <p className="mt-3 flex gap-2 text-sm font-semibold leading-6 text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00a9c7]" />
                  Espacios pensados para jugar con tranquilidad, alegría y sentido familiar.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ven a conocernos"
        text="Te esperamos en Las Condes para vivir una experiencia infantil segura, colorida y entretenida."
        buttonLabel="Contactar"
        href="/formulario"
      />
    </>
  );
}
