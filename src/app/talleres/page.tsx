import { PromotionBanner } from "@/components/PromotionBanner";
import { WorkshopCTA } from "@/components/WorkshopCTA";
import { WorkshopGallery } from "@/components/WorkshopGallery";
import { WorkshopInfoSection } from "@/components/WorkshopInfoSection";
import { WorkshopsHero } from "@/components/WorkshopsHero";
import { workshopPromotion } from "@/data/promotions";

export default function WorkshopsPage() {
  return (
    <>
      <WorkshopsHero />
      <WorkshopInfoSection />
      <PromotionBanner promotion={workshopPromotion} imageAspect="poster" />
      <WorkshopGallery />
      <WorkshopCTA />
    </>
  );
}
