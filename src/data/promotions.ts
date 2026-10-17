import { contact } from "@/data/site";

export type PromotionBanner = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export const homePromotion: PromotionBanner = {
  eyebrow: "Promoci\u00f3n vigente",
  title: "Todos los lunes 2x1 en entradas",
  text: "Una invitaci\u00f3n especial para empezar la semana jugando, explorando y compartiendo en familia.",
  image: "/images/promotions/home-lunes-2x1-vertical-bkids.png",
  alt: "Promoci\u00f3n todos los lunes 2x1 en entradas BKids",
  primaryLabel: "Ver precios de entradas",
  primaryHref: "/precios",
  secondaryLabel: "Consultar por WhatsApp",
  secondaryHref: contact.whatsappUrl,
};

export const homeActivePromotions = [homePromotion];
