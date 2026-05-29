import { contact } from "@/data/site";
import { workshopWhatsappUrl } from "@/data/workshops";

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
  eyebrow: "Promoción vigente",
  title: "Todos los lunes 2x1 en entradas",
  text: "Una invitación especial para empezar la semana jugando, explorando y compartiendo en familia.",
  image: "/images/promotions/home-lunes-2x1-vertical-bkids.png",
  alt: "Promoción todos los lunes 2x1 en entradas BKids",
  primaryLabel: "Ver precios",
  primaryHref: "/precios",
  secondaryLabel: "Consultar por WhatsApp",
  secondaryHref: contact.whatsappUrl,
};

export const homeWorkshopPromotion: PromotionBanner = {
  eyebrow: "Taller de temporada",
  title: "Talleres de invierno",
  text: "Talleres para niños de 3 a 7 años, de 9:00 a 13:00 hrs, con materiales y colación incluidos.",
  image: "/images/promotions/talleres-invierno-promocion-bkids.jpeg",
  alt: "Promoción talleres de invierno BKids",
  primaryLabel: "Consultar por WhatsApp",
  primaryHref: workshopWhatsappUrl,
};

export const homeActivePromotions = [homePromotion, homeWorkshopPromotion];

export const workshopPromotion: PromotionBanner = {
  eyebrow: "Talleres de invierno",
  title: "Talleres de invierno BKids",
  text: "Actividades para niños de 3 a 7 años, con materiales y colación incluidos.",
  image: "/images/promotions/talleres-invierno-bkids.jpg",
  alt: "Flyer talleres de invierno BKids",
  primaryLabel: "Consultar por WhatsApp",
  primaryHref: workshopWhatsappUrl,
  secondaryLabel: "Consultar por correo",
  secondaryHref: "/formulario",
};
