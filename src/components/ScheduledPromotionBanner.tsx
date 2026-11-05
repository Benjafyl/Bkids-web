import { connection } from "next/server";
import { PromotionBanner } from "@/components/PromotionBanner";
import { isPromotionActive, type PromotionBanner as PromotionData } from "@/data/promotions";

export async function ScheduledPromotionBanner({ promotion, id }: { promotion: PromotionData; id: string }) {
  await connection();
  if (!isPromotionActive(promotion)) return null;

  return (
    <div id={id} className="scroll-mt-28">
      <PromotionBanner promotion={promotion} />
    </div>
  );
}
