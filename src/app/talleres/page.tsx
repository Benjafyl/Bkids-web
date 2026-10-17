import { WorkshopCTA } from "@/components/WorkshopCTA";
import { WorkshopGallery } from "@/components/WorkshopGallery";
import { WorkshopInfoSection } from "@/components/WorkshopInfoSection";
import { WorkshopsHero } from "@/components/WorkshopsHero";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/data/seo";

export const metadata = buildMetadata("/talleres");

export default function WorkshopsPage() {
  return (
    <>
      <WorkshopsHero />
      <WorkshopInfoSection />
      <WorkshopGallery />
      <WorkshopCTA />
      <BreadcrumbJsonLd route="/talleres" />
    </>
  );
}
