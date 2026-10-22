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
  expiresAt?: string;
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

export const homeFeaturedPromotion: PromotionBanner = {
  eyebrow: "Solo por octubre de 2026",
  title: "2 horas de juego por $10.000",
  text: "¡Octubre de miedo en BKids! Aprovecha esta promoción durante octubre de 2026 y ven a disfrutar de nuestros juegos.",
  image: "/images/promotions/octubre-2026-dos-horas-bkids.jpeg",
  alt: "Octubre de miedo en BKids: 2 horas de juego por $10.000 durante octubre de 2026",
  primaryLabel: "Consultar promoción",
  primaryHref: `${contact.whatsappUrl.split("?")[0]}?text=${encodeURIComponent(
    "Hola BKids, quiero consultar por la promoción de octubre de 2026: 2 horas de juego por $10.000.",
  )}`,
  expiresAt: "2026-11-01T00:00:00-03:00",
};

export const rainyDaysPromotion: PromotionBanner = {
  eyebrow: "Diversión bajo techo",
  title: "En días fríos y de lluvia, ¡ven a BKids!",
  text: "Tenemos calefacción y un ambiente grato y seguro para jugar, aunque afuera haga frío o llueva.",
  image: "/images/promotions/dias-frios-lluvia-bkids.jpeg",
  alt: "BKids te espera en días fríos y de lluvia, con calefacción y un ambiente grato y seguro para jugar",
  primaryLabel: "Consultar por WhatsApp",
  primaryHref: contact.whatsappUrl,
};

export const homeActivePromotions = [rainyDaysPromotion, homePromotion];

export function isPromotionActive(promotion: PromotionBanner, now = new Date()) {
  return !promotion.expiresAt || now.getTime() < new Date(promotion.expiresAt).getTime();
}
