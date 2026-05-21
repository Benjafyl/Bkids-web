import { AttractionsSection } from "@/components/AttractionsSection";
import { BirthdayWorkshopsSection } from "@/components/BirthdayWorkshopsSection";
import { CTASection } from "@/components/CTASection";
import { GoogleReviews } from "@/components/GoogleReviews";
import { HeroCarousel } from "@/components/HeroCarousel";
import { LocationHoursSection } from "@/components/LocationHoursSection";
import { contact, homeHeroSlides } from "@/data/site";

export default function Home() {
  return (
    <>
      <HeroCarousel
        eyebrow="Diversión sin fin"
        title="Sumérgete en nuestra aventura"
        subtitle="Un espacio alegre, seguro y lleno de juegos para niños y familias."
        ctaLabel="Ver precios"
        ctaHref="/precios"
        slides={homeHeroSlides}
      />

      <AttractionsSection />
      <BirthdayWorkshopsSection />
      <LocationHoursSection />
      <GoogleReviews />

      <CTASection
        title="¿Tienes una consulta?"
        text="Escríbenos para revisar horarios, disponibilidad, cumpleaños o talleres."
        buttonLabel="Consultar por WhatsApp"
        href={contact.whatsappUrl}
        secondaryButtonLabel="Consultar por correo"
        secondaryHref="/formulario"
        variant="coral"
      />
    </>
  );
}
