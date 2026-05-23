import { getBirthdayWhatsappUrl } from "@/data/birthday";
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
  eyebrow: "Promoción semanal",
  title: "Todos los lunes 2x1 en entradas",
  text: "Una invitación especial para empezar la semana jugando, explorando y compartiendo en familia.",
  image: "/images/promotions/home-lunes-2x1-bkids.jpg",
  alt: "Promoción todos los lunes 2x1 en entradas BKids",
  primaryLabel: "Ver precios",
  primaryHref: "/precios",
  secondaryLabel: "Consultar por WhatsApp",
  secondaryHref: contact.whatsappUrl,
};

export const birthdayPromotion: PromotionBanner = {
  eyebrow: "Promoción cumpleaños",
  title: "Celebra durante mayo con 15% de descuento",
  text: "Promoción disponible para planes Básico y Medio. Escríbenos para revisar disponibilidad y reservar tu fecha.",
  image: "/images/promotions/cumpleanos-mayo-descuento-bkids.jpg",
  alt: "Promoción de cumpleaños BKids durante mayo con 15% de descuento",
  primaryLabel: "Consultar cumpleaños",
  primaryHref: getBirthdayWhatsappUrl(
    "Hola BKids, quiero consultar por la promoción de cumpleaños con 15% de descuento.",
  ),
  secondaryLabel: "Ver planes",
  secondaryHref: "#packs",
};

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
