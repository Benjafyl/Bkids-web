import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { AttractionCard } from "@/components/AttractionCard";
import { CTASection } from "@/components/CTASection";
import { GoogleReviews } from "@/components/GoogleReviews";
import { Hero } from "@/components/Hero";
import { ImageCarousel } from "@/components/ImageCarousel";
import { attractions, carouselImages, heroImages } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Diversión sin fin"
        title="Sumérgete en nuestra aventura"
        subtitle="Un espacio alegre, seguro y lleno de juegos para niños y familias."
        image={heroImages.home}
        ctaLabel="Ver precios entradas"
        ctaHref="/precios"
      />

      <section className="bubble-pattern bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <p className="inline-flex rounded-full bg-[#ffcc33] px-4 py-2 text-sm font-black uppercase text-[#063f83]">
              Fotos en movimiento
            </p>
            <h2 className="mt-5 font-display text-5xl font-black leading-none text-[#0a72ce] sm:text-6xl">
              Ven a jugar con nosotros
            </h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-slate-600">
              En BKids cada visita mezcla movimiento, imaginación y colores. Recorre nuestros
              espacios, celebra momentos especiales y deja que los niños disfruten a su ritmo.
            </p>
            <Link
              href="/precios"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ef3854] px-7 py-4 text-sm font-black uppercase text-white shadow-lg shadow-rose-200 transition hover:-translate-y-0.5 hover:bg-[#d92f49]"
            >
              Ver precios entradas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ImageCarousel images={carouselImages} />
        </div>
      </section>

      <section className="bg-[#e9f9ff] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black uppercase text-[#ef3854] shadow-sm">
              <Sparkles className="h-4 w-4" />
              Atracciones
            </p>
            <h2 className="mt-5 font-display text-5xl font-black leading-none text-[#0a72ce] sm:text-6xl">
              Juegos para explorar, saltar y celebrar
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {attractions.map((attraction) => (
              <AttractionCard key={attraction.title} {...attraction} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 lg:px-8">
          <article className="overflow-hidden rounded-[8px] bg-[#0a72ce] text-white shadow-xl shadow-sky-100">
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/cumpleanos.jpg"
                alt="Cumpleaños infantiles en BKids"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-7">
              <h2 className="font-display text-4xl font-black">Cumpleaños</h2>
              <p className="mt-3 font-semibold leading-7 text-white/90">
                Celebraciones entretenidas, familiares y listas para personalizar cuando se
                definan los packs finales.
              </p>
              <Link
                href="/cumpleanos"
                className="mt-6 inline-flex rounded-full bg-[#ffcc33] px-6 py-3 text-sm font-black uppercase text-[#063f83]"
              >
                Ver cumpleaños
              </Link>
            </div>
          </article>

          <article className="overflow-hidden rounded-[8px] bg-[#00a9c7] text-white shadow-xl shadow-sky-100">
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/talleres-generico.jpg"
                alt="Talleres infantiles en BKids"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-7">
              <h2 className="font-display text-4xl font-black">Talleres</h2>
              <p className="mt-3 font-semibold leading-7 text-white/90">
                Actividades afterschool y experiencias de aprendizaje en un entorno seguro y
                entretenido.
              </p>
              <Link
                href="/talleres"
                className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-black uppercase text-[#0a72ce]"
              >
                Ver talleres
              </Link>
            </div>
          </article>
        </div>
      </section>

      <GoogleReviews />

      <CTASection
        title="Tienes una consulta?"
        text="Escríbenos para revisar horarios, disponibilidad, cumpleaños o talleres."
        buttonLabel="Ir al formulario"
        href="/formulario"
        variant="coral"
      />
    </>
  );
}
