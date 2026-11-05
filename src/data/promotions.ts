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
  imageAspect?: "square" | "poster" | "portrait";
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

export const birthdayNovemberPromotion: PromotionBanner = {
  eyebrow: "Noviembre de 2026 · Solo planes básicos",
  title: "20% de descuento en cumpleaños",
  text: "Celebra su cumpleaños en BKids durante noviembre de 2026 con un 20% de descuento, válido solo para planes básicos. Consulta disponibilidad y organiza su gran día con nosotros.",
  image: "/images/promotions/cumpleanos-noviembre-2026-bkids.jpg",
  alt: "20% de descuento en cumpleaños en BKids durante noviembre de 2026, solo válido para planes básicos",
  primaryLabel: "Consultar descuento",
  primaryHref: `${contact.whatsappUrl.split("?")[0]}?text=${encodeURIComponent(
    "Hola BKids, quiero consultar por el 20% de descuento en planes básicos de cumpleaños durante noviembre de 2026.",
  )}`,
  expiresAt: "2026-12-01T00:00:00-03:00",
};

export const christmasWorkshopPromotion: PromotionBanner = {
  eyebrow: "14 al 18 de diciembre de 2026",
  title: "Talleres de Navidad",
  text: "De 9:00 a 13:00, para niños de 3 a 8 años sin pañales. $20.000 diario, $18.000 hermanos y $80.000 la semana. Incluye materiales, juego y colación. Te esperamos en Camino El Alba 12620, Local 16B, Las Condes.",
  image: "/images/promotions/talleres-navidad-diciembre-2026-bkids.jpg",
  alt: "Talleres de Navidad BKids del 14 al 18 de diciembre, de 9:00 a 13:00, para niños de 3 a 8 años sin pañales: $20.000 diario, $18.000 hermanos y $80.000 semana; incluye materiales, juego y colación",
  imageAspect: "portrait",
  primaryLabel: "Consultar talleres",
  primaryHref: `${contact.whatsappUrl.split("?")[0]}?text=${encodeURIComponent(
    "Hola BKids, quiero consultar por los talleres de Navidad del 14 al 18 de diciembre de 2026.",
  )}`,
  expiresAt: "2026-12-19T00:00:00-03:00",
};

export const homeFeaturedPromotions: PromotionBanner[] = [
  {
    ...birthdayNovemberPromotion,
    primaryLabel: "Ver cumpleaños",
    primaryHref: "/cumpleanos#promocion-cumpleanos",
  },
  {
    ...christmasWorkshopPromotion,
    primaryLabel: "Ver talleres de Navidad",
    primaryHref: "/talleres#talleres-navidad",
  },
];

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
