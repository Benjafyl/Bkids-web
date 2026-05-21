export const siteMeta = {
  title: "BKids | Entretención infantil en Las Condes",
  description:
    "Centro de entretención infantil, cumpleaños, talleres y juegos para niños en Las Condes.",
};

export const comingSoon = {
  enabled: false,
  eyebrow: "BKids Las Condes",
  title: "Muy pronto",
  text: "Estamos preparando una nueva experiencia para jugar, celebrar y compartir en familia.",
  image: "/images/hero-home-local.jpg",
};

export const location = {
  address: "Camino El Alba 12.620, Local 16B, Las Condes",
  mapsUrl:
    "https://www.google.com/maps/place/Bkids+Stay+and+Play/data=!4m2!3m1!1s0x0:0x18d716bf682bcc03?sa=X&ved=1t:2428&ictx=111",
  embedUrl:
    "https://www.google.com/maps?q=Bkids%20Stay%20and%20Play%20Camino%20El%20Alba%2012620%20Local%2016B%20Las%20Condes&output=embed",
};

export const contact = {
  address: location.address,
  legalAddress: "Camino El Alba 12.620 Local 16 B, Las Condes",
  phone: "+56 9 8711 7154",
  email: "contactobkitschile@gmail.com",
  schedule: {
    weekdays: "Lunes a viernes: 09:00 a 19:00 hrs",
    weekends: "Sábado, domingo y festivos: 10:00 a 19:00 hrs",
  },
  mapUrl: location.mapsUrl,
  whatsappUrl:
    "https://wa.me/56987117154?text=Hola%20BKids%2C%20quiero%20hacer%20una%20consulta.",
};

export const legal = {
  businessName: "Entretenciones QR SPA",
  rut: "77.927.601-5",
};

export const navItems = [
  { label: "Quiénes Somos", href: "/quienes-somos" },
  { label: "Cumpleaños", href: "/cumpleanos" },
  { label: "Talleres", href: "/talleres" },
  { label: "Precios", href: "/precios" },
];

export const heroImages = {
  home: "/images/hero-home-local.jpg",
  about: "/images/equipo-bkids-conocenos.jpg",
  birthdays: "/images/cumpleanos-header.jpg",
  workshops: "/images/taller-legos.jpg",
  prices: "/images/espacio-principal-bkids.jpg",
  contact: "/images/contacto-familia.jpg",
};

export const homeHeroSlides = [
  {
    type: "video" as const,
    src: "/images/hero-home-video.mp4",
    poster: "/images/hero-home-local.jpg",
    alt: "Niña jugando en la piscina de pelotas de BKids",
  },
  {
    src: "/images/espacio-principal-bkids.jpg",
    alt: "Familias jugando en el espacio principal de BKids",
  },
  {
    src: "/images/tobogan-nino.jpg",
    alt: "Tobogán amarillo de BKids",
  },
  {
    src: "/images/maquina-pelotas-ninos.jpg",
    alt: "Piscina de pelotas de BKids",
  },
];

export const carouselImages = [
  {
    src: "/images/about-familia.jpg",
    alt: "Familias disfrutando la piscina de pelotas en BKids",
  },
  {
    src: "/images/about-juego-grupal.jpg",
    alt: "Espacio de juegos de BKids con niños y familias",
  },
  {
    src: "/images/juego-arenero.jpg",
    alt: "Niña jugando en la piscina de pelotas de BKids",
  },
  {
    src: "/images/foto-divertida-marco.jpg",
    alt: "Tobogán amarillo de BKids",
  },
];

export const attractions = [
  {
    title: "Laberinto",
    image: "/images/espacio-principal-bkids.jpg",
    description: "Circuitos para explorar, trepar y descubrir nuevos caminos.",
  },
  {
    title: "Piscina de pelotas",
    image: "/images/about-juego-grupal.jpg",
    description: "Un mar de colores para saltar, imaginar y jugar libremente.",
  },
  {
    title: "Tobogán",
    image: "/images/tobogan-nino.jpg",
    description: "Bajadas entretenidas para sumar movimiento a cada visita.",
  },
  {
    title: "Resfalin",
    image: "/images/resfalin-ninos.jpg",
    description: "Diversión clásica para niños activos y curiosos.",
  },
  {
    title: "Arenero",
    image: "/images/juego-arenero.jpg",
    description: "Juego sensorial para crear, construir y compartir.",
  },
  {
    title: "Cama saltarina",
    image: "/images/cama-elastica.jpg",
    description: "Saltos seguros para liberar energía y pasarlo increíble.",
  },
  {
    title: "Máquina interactiva de pelotas",
    image: "/images/maquina-pelotas-ninos.jpg",
    description: "Juego dinámico para lanzar, apuntar y activar desafíos.",
  },
  {
    title: "Plataforma interactiva",
    image: "/images/maquina-grupal.jpg",
    description: "Un espacio dinámico para moverse, descubrir y jugar en equipo.",
  },
  {
    title: "Área ninja",
    image: "/images/area-ninja.jpg",
    description: "Obstáculos pensados para moverse, equilibrarse y superar retos.",
  },
];

export const entryPrices = [
  {
    title: "1 hora",
    price: "$7.000",
    detail: "Entrada individual para jugar, explorar y disfrutar el espacio con calma.",
    highlight: true,
  },
  {
    title: "20 minutos",
    price: "$4.000",
    detail: "Ideal para una visita corta, una prueba o una pasada rápida por BKids.",
  },
  {
    title: "Pack familiar",
    price: "$18.000",
    detail: "3 niños por 1 hora para venir en familia o con amigos.",
  },
];

export const workshopCopy =
  "Próximamente tendremos talleres y actividades pensadas para que los niños aprendan, jueguen y desarrollen nuevas habilidades en un entorno seguro, entretenido y acompañado.";

export const socialLinks = {
  instagram:
    "https://www.instagram.com/bkids_chile?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  facebook: "https://www.facebook.com/profile.php?id=61581802253114#",
  whatsapp: contact.whatsappUrl,
};

export const workshopRecap = [
  {
    title: "Día de la madre",
    image: "/images/quienes-somos-foto-nosotros.jpg",
    alt: "Familia compartiendo una actividad especial en BKids",
  },
  {
    title: "Talleres de verano",
    image: "/images/taller-legos.jpg",
    alt: "Niños participando en actividades creativas en BKids",
  },
  {
    title: "Talleres de invierno",
    image: "/images/taller-invierno-recap.jpg",
    alt: "Información de talleres de invierno BKids",
  },
  {
    title: "Actividades creativas",
    image: "/images/talleres-generico.jpg",
    alt: "Talleres infantiles y actividades creativas en BKids",
  },
  {
    title: "Festividades",
    image: "/images/cumple-bienvenida.jpg",
    alt: "Niños llegando a una celebración especial en BKids",
  },
  {
    title: "Eventos especiales",
    image: "/images/foto-divertida-marco.jpg",
    alt: "Experiencia especial de juegos y celebración en BKids",
  },
  {
    title: "Talleres por temporada",
    image: "/images/cumpleanos-info.jpg",
    alt: "Actividad por temporada en BKids",
  },
];
