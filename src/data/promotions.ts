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

const dayOfTheChildWhatsappUrl =
  "https://wa.me/56987117154?text=Hola%20BKids%2C%20quiero%20consultar%20por%20la%20celebraci%C3%B3n%20del%20D%C3%ADa%20del%20Ni%C3%B1o.";

export const homeWorkshopPromotion: PromotionBanner = {
  eyebrow: "Evento de temporada",
  title: "D\u00eda del Ni\u00f1o en BKids",
  text: "Celebremos juntos a los m\u00e1s peque\u00f1os, con sorpresas durante todo el d\u00eda y Bluey como invitado especial.",
  image: "/images/promotions/dia-del-nino-bkids-poster.jpeg",
  alt: "Flyer del D\u00eda del Ni\u00f1o en BKids con Bluey como invitado especial",
  primaryLabel: "Consultar por WhatsApp",
  primaryHref: dayOfTheChildWhatsappUrl,
};

export const homeActivePromotions = [homePromotion, homeWorkshopPromotion];

export const workshopPromotion: PromotionBanner = {
  eyebrow: "Evento especial",
  title: "Celebremos el D\u00eda del Ni\u00f1o",
  text: "Te esperamos el domingo 9 de agosto para disfrutar juegos, risas, sorpresas y la visita especial de Bluey.",
  image: "/images/promotions/dia-del-nino-bkids-square.jpeg",
  alt: "Flyer de la celebraci\u00f3n del D\u00eda del Ni\u00f1o en BKids con Bluey",
  primaryLabel: "Consultar por WhatsApp",
  primaryHref: dayOfTheChildWhatsappUrl,
  secondaryLabel: "Consultar por correo",
  secondaryHref: "/formulario",
};
