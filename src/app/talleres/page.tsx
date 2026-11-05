import { WorkshopCTA } from "@/components/WorkshopCTA";
import { WorkshopGallery } from "@/components/WorkshopGallery";
import { WorkshopInfoSection } from "@/components/WorkshopInfoSection";
import { WorkshopsHero } from "@/components/WorkshopsHero";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/data/seo";
import { ScheduledPromotionBanner } from "@/components/ScheduledPromotionBanner";
import { christmasWorkshopPromotion } from "@/data/promotions";

export const metadata = buildMetadata("/talleres");

export default function WorkshopsPage() {
  return (
    <>
      <WorkshopsHero />
      <ScheduledPromotionBanner promotion={christmasWorkshopPromotion} id="talleres-navidad" />
      <WorkshopInfoSection />
      <WorkshopGallery />
      <WorkshopCTA />
      <BreadcrumbJsonLd route="/talleres" />
    </>
  );
}
