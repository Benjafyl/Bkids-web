import { contact } from "@/data/site";

export const birthdayPdfUrl = "/docs/packs-cumpleanos-bkids.pdf";

export function getBirthdayWhatsappUrl(message: string) {
  const baseUrl = contact.whatsappUrl.split("?")[0];
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}

export const birthdayIntro = {
  title: "Packs de cumpleaños",
  text: "Tenemos distintas opciones para que puedas celebrar el cumpleaños de tu hijo a tu medida, con acceso a juegos, salón exclusivo y una experiencia pensada para niños y familias.",
  note: "Packs disponibles para niños de 1 a 7 años.",
};

export const birthdayPlans = [
  {
    name: "Plan Básico",
    color: "sky" as const,
    fromPrice: "$100.000",
    includes: [
      "2 horas de acceso a todos los juegos",
      "Salón exclusivo con mesas y sillas",
      "Pulsera identificativa para cada niño",
      "Invitación digital para enviar a invitados",
      "Decoración básica: globos y banderín",
    ],
    prices: {
      weekdays: {
        tenKids: "$100.000",
        twentyKids: "$190.000",
        thirtyKids: "$300.000",
        extraKid: "$10.000",
      },
      weekends: {
        tenKids: "$140.000",
        twentyKids: "$280.000",
        thirtyKids: "$420.000",
        extraKid: "$14.000",
      },
    },
  },
  {
    name: "Plan Medio",
    badge: "Más contratado",
    color: "blue" as const,
    fromPrice: "$125.000",
    includes: [
      "2 horas de acceso a todos los juegos",
      "Salón exclusivo con mesas y sillas",
      "Pulsera identificativa para cada niño",
      "Invitación digital para enviar a invitados",
      "Decoración básica: globos y banderín",
      "Torta de cuchuflí bañada en chocolate",
      "Regalo para el cumpleañero",
    ],
    prices: {
      weekdays: {
        tenKids: "$125.000",
        twentyKids: "$240.000",
        thirtyKids: "$350.000",
        extraKid: "$12.500",
      },
      weekends: {
        tenKids: "$160.000",
        twentyKids: "$300.000",
        thirtyKids: "$450.000",
        extraKid: "$16.000",
      },
    },
  },
  {
    name: "Plan Full",
    color: "coral" as const,
    fromPrice: "$200.000",
    includes: [
      "2 horas de acceso a todos los juegos",
      "Salón exclusivo con mesas y sillas",
      "Pulsera identificativa para cada niño",
      "Invitación digital para enviar a invitados",
      "Decoración básica: globos y banderín",
      "Torta de 80 unidades de cuchuflí bañado en chocolate",
      "Regalo para el cumpleañero",
      "Snack por niño: jugo, mini sándwich Subway y galletón Subway",
      "Sorpresas para invitados",
    ],
    prices: {
      weekdays: {
        tenKids: "$200.000",
        twentyKids: "$350.000",
        thirtyKids: "$450.000",
        extraKid: "$17.000",
      },
      weekends: {
        tenKids: "$250.000",
        twentyKids: "$400.000",
        thirtyKids: "$520.000",
        extraKid: "$18.500",
      },
    },
  },
];

export const birthdaySchedules = [
  {
    title: "Lunes a viernes",
    slots: ["13:00 a 15:00 hrs", "16:00 a 18:00 hrs"],
  },
  {
    title: "Sábado, domingo y festivos",
    slots: ["10:00 a 12:00 hrs", "13:00 a 15:00 hrs", "16:00 a 18:00 hrs"],
  },
];

export const birthdayScheduleNote =
  "Los horarios se coordinan directamente con el equipo BKids según disponibilidad.";

export const birthdayConditions = [
  "Acceso permitido para niños de hasta 7 años o estatura máxima de 1,40 m.",
  "Cada celebración dura 2 horas.",
  "Se permite el ingreso hasta 15 minutos antes.",
  "El cumpleañero también cuenta dentro de la lista de invitados.",
  "Se considera 1 adulto por niño invitado y 4 adultos para el cumpleañero.",
  "El salón es de uso exclusivo del contratante.",
  "El local puede permanecer abierto al público, salvo planes cerrados de 30 niños.",
  "Está prohibido el consumo de bebidas alcohólicas.",
  "No se permite confetti ni piñatas, salvo condiciones específicas del plan.",
  "Para confirmar la reserva se abona el 50%.",
  "El 50% restante debe pagarse antes o al momento definido por BKids.",
  "Cambios de fecha o cantidad de invitados deben informarse con al menos 7 días de anticipación.",
  "En caso de cancelación, el anticipo no es reembolsable.",
  "Adulto adicional: $4.000.",
];

export const birthdayExtras = [
  "20 mini sándwich Subway 8 cm a elección",
  "Bebidas 1.5 lts",
  "Agua 1.5 lts",
  "Jugos 1.5 lts",
  "Refill jugo",
];

export const birthdaySnack = {
  includes: [
    "1 mini sándwich Subway de 8 cm a elección",
    "1 galletón Subway",
    "1 jugo en cajita 200 ml",
  ],
  sandwiches: [
    "Jamón queso",
    "Pizza con pepperoni, salsa roja y queso",
    "Pollo apanado queso",
    "Palta vegetariano",
  ],
  cookies: ["Chip chocolate", "Macadamia", "Doble chocolate"],
};
