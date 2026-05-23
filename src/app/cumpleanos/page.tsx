import Link from "next/link";
import { Download } from "lucide-react";
import { BirthdayConditionsSection } from "@/components/BirthdayConditionsSection";
import { BirthdayExtrasSection } from "@/components/BirthdayExtrasSection";
import { BirthdayFinalCTA } from "@/components/BirthdayFinalCTA";
import { BirthdayPlansSection } from "@/components/BirthdayPlansSection";
import { BirthdayPricesTable } from "@/components/BirthdayPricesTable";
import { BirthdayScheduleSection } from "@/components/BirthdayScheduleSection";
import { Hero } from "@/components/Hero";
import { PromotionBanner } from "@/components/PromotionBanner";
import { birthdayPdfUrl, getBirthdayWhatsappUrl } from "@/data/birthday";
import { birthdayPromotion } from "@/data/promotions";
import { heroImages } from "@/data/site";

export default function BirthdaysPage() {
  return (
    <>
      <Hero
        title="Cumpleaños"
        subtitle="Ven a jugar y a reír"
        image={heroImages.birthdays}
        ctaLabel="Consultar por WhatsApp"
        ctaHref={getBirthdayWhatsappUrl("Hola BKids, quiero consultar por los packs de cumpleaños.")}
        secondaryCtaLabel="Consultar por correo"
        secondaryCtaHref="/formulario"
        variant="immersive"
        eyebrow="Celebraciones BKids"
      />

      <PromotionBanner promotion={birthdayPromotion} />
      <BirthdayPlansSection />
      <BirthdayPricesTable />
      <BirthdayScheduleSection />
      <BirthdayConditionsSection />
      <BirthdayExtrasSection />

      <section className="bg-[#e9f9ff] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center lg:px-8">
          <p className="max-w-2xl text-base font-bold leading-7 text-slate-700">
            ¿Quieres revisar todo con más detalle? El PDF completo queda disponible para abrir o
            descargar en una nueva pestaña.
          </p>
          <Link
            href={birthdayPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[#0a72ce] px-6 py-3 text-sm font-black uppercase text-white shadow-lg shadow-sky-100 transition hover:-translate-y-0.5 hover:bg-[#045ca9]"
          >
            <Download className="mr-2 h-4 w-4" />
            Descargar PDF completo
          </Link>
        </div>
      </section>

      <BirthdayFinalCTA />
    </>
  );
}
