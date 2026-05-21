import { WorkshopCTA } from "@/components/WorkshopCTA";
import { WorkshopGallery } from "@/components/WorkshopGallery";
import { WorkshopInfoSection } from "@/components/WorkshopInfoSection";
import { WorkshopsHero } from "@/components/WorkshopsHero";

export default function WorkshopsPage() {
  return (
    <>
      <WorkshopsHero />
      <WorkshopGallery />
      <WorkshopInfoSection />
      <WorkshopCTA />
    </>
  );
}
