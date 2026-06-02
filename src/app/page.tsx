import { ActivePromotionsSection } from "@/components/ActivePromotionsSection";
import { AttractionsSection } from "@/components/AttractionsSection";
import { BirthdayWorkshopsSection } from "@/components/BirthdayWorkshopsSection";
import { CTASection } from "@/components/CTASection";
import { GoogleReviews } from "@/components/GoogleReviews";
import { HeroCarousel } from "@/components/HeroCarousel";
import { LocationHoursSection } from "@/components/LocationHoursSection";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import { contact, homeHeroSlides } from "@/data/site";
import { buildMetadata, faqItems } from "@/data/seo";

export const metadata = buildMetadata("/");

export default function Home() {
  return (
    <>
      <HeroCarousel
        eyebrow="Diversión sin fin"
        title="Sumérgete en una aventura de juegos"
        subtitle="BKids es un stay and play en Las Condes, un espacio seguro para jugar, celebrar cumpleaños y vivir momentos inolvidables en familia."
        ctaLabel="Ver precios"
        ctaHref="/precios"
        slides={homeHeroSlides}
      />

      <AttractionsSection />
      <ActivePromotionsSection />
      <BirthdayWorkshopsSection />
      <LocationHoursSection />
      <GoogleReviews />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full bg-[#e9f9ff] px-4 py-2 text-sm font-black uppercase text-[#0a72ce]">
              Ayuda rápida
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none text-[#0a72ce] sm:text-5xl">
              Preguntas frecuentes
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-[8px] bg-[#f7fdff] p-5 shadow-lg shadow-sky-100 ring-1 ring-sky-100"
              >
                <h3 className="font-display text-2xl font-black leading-tight text-[#0a72ce]">
                  {item.question}
                </h3>
                <p className="mt-2 text-base font-semibold leading-7 text-slate-600">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Tienes una consulta?"
        text="Escríbenos para revisar horarios, disponibilidad, cumpleaños o talleres infantiles en Camino El Alba, Las Condes."
        buttonLabel="Consultar por WhatsApp"
        href={contact.whatsappUrl}
        secondaryButtonLabel="Consultar por correo"
        secondaryHref="/formulario"
        variant="coral"
      />
      <FaqJsonLd />
    </>
  );
}
