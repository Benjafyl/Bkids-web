import type { Metadata } from "next";

export const siteUrl = "https://bkids.cl";
export const siteName = "BKids";
export const ogImage = "/images/seo/og-bkids.jpg";

export type SeoRoute = "/" | "/quienes-somos" | "/cumpleanos" | "/talleres" | "/precios" | "/formulario";

export const pageSeo: Record<SeoRoute, { title: string; description: string; path: SeoRoute; breadcrumb: string }> = {
  "/": {
    title: "Juegos infantiles en Las Condes | BKids Stay & Play",
    description:
      "BKids es un espacio de juegos infantiles, cumpleaños y talleres para niños en Las Condes. Ven a jugar, celebrar y vivir una experiencia segura en familia.",
    path: "/",
    breadcrumb: "Inicio",
  },
  "/quienes-somos": {
    title: "Quiénes somos | BKids Stay & Play en Las Condes",
    description:
      "Conoce BKids, un proyecto familiar de juegos infantiles en Las Condes pensado para crear momentos seguros, entretenidos y llenos de juego para niños.",
    path: "/quienes-somos",
    breadcrumb: "Quiénes somos",
  },
  "/cumpleanos": {
    title: "Cumpleaños infantiles en Las Condes | BKids",
    description:
      "Celebra cumpleaños infantiles en BKids Las Condes con acceso a juegos, salón exclusivo, decoración, snacks y planes para niños de 1 a 7 años.",
    path: "/cumpleanos",
    breadcrumb: "Cumpleaños",
  },
  "/talleres": {
    title: "Talleres infantiles en Las Condes | BKids",
    description:
      "Talleres y actividades infantiles en BKids Las Condes: experiencias creativas, sensoriales y entretenidas para que los niños aprendan jugando.",
    path: "/talleres",
    breadcrumb: "Talleres",
  },
  "/precios": {
    title: "Precios juegos infantiles BKids | Las Condes",
    description:
      "Revisa precios de entradas, pack familiar, cumpleaños, talleres y productos disponibles en BKids Las Condes antes de planificar tu visita.",
    path: "/precios",
    breadcrumb: "Precios",
  },
  "/formulario": {
    title: "Contacto BKids | Juegos infantiles en Las Condes",
    description:
      "Contacta a BKids para consultar horarios, precios, cumpleaños, talleres y disponibilidad en Camino El Alba, Las Condes, por correo o WhatsApp.",
    path: "/formulario",
    breadcrumb: "Contacto",
  },
};

export function absoluteUrl(path: string) {
  return `${siteUrl}${path === "/" ? "/" : path}`;
}

export function buildMetadata(route: SeoRoute): Metadata {
  const seo = pageSeo[route];
  const canonical = absoluteUrl(seo.path);
  const imageUrl = absoluteUrl(ogImage);

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonical,
      siteName,
      locale: "es_CL",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "Niños jugando en BKids Stay and Play Las Condes",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [imageUrl],
    },
  };
}

export const breadcrumbRoutes = Object.values(pageSeo).filter((route) => route.path !== "/");

export const faqItems = [
  {
    question: "¿Dónde está ubicado BKids?",
    answer: "BKids está ubicado en Camino El Alba 12620, Local 16B, Las Condes.",
  },
  {
    question: "¿Cuáles son los horarios de BKids?",
    answer:
      "BKids atiende de lunes a viernes de 09:00 a 19:00 hrs, y sábado, domingo y festivos de 10:00 a 19:00 hrs.",
  },
  {
    question: "¿Qué es BKids Stay and Play?",
    answer:
      "BKids es un espacio de juegos infantiles en Las Condes donde niños y familias pueden jugar, celebrar cumpleaños y participar en actividades.",
  },
  {
    question: "¿Se pueden celebrar cumpleaños en BKids?",
    answer:
      "Sí, BKids cuenta con planes de cumpleaños infantiles con acceso a juegos, salón exclusivo y distintas opciones según cantidad de niños.",
  },
  {
    question: "¿BKids realiza talleres infantiles?",
    answer:
      "Sí, BKids realiza talleres y actividades infantiles por temporada, festividades y fechas especiales.",
  },
];
