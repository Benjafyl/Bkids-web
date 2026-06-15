export const siteMeta = {
  title: "Juegos infantiles en Las Condes | BKids Stay & Play",
  description:
    "BKids es un espacio de juegos infantiles, cumpleaños y talleres para niños en Las Condes.",
};

export const comingSoon = {
  enabled: false,
  eyebrow: "BKids Las Condes",
  title: "Muy pronto",
  text: "Estamos preparando una nueva experiencia para jugar, celebrar y compartir en familia.",
  image: "/images/hero-home-local.jpg",
};

export const location = {
  address: "Camino El Alba 12620, Local 16B, Las Condes",
  mapsUrl:
    "https://www.google.com/maps/place/Bkids+Stay+and+Play/data=!4m2!3m1!1s0x0:0x18d716bf682bcc03?sa=X&ved=1t:2428&ictx=111",
  embedUrl:
    "https://www.google.com/maps?q=Bkids%20Stay%20and%20Play%20Camino%20El%20Alba%2012620%20Local%2016B%20Las%20Condes&output=embed",
};

export const contact = {
  address: location.address,
  legalAddress: "Camino El Alba 12620, Local 16B, Las Condes",
  phone: "+56 9 8711 7154",
  email: "contactobkidschile@gmail.com",
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
  copyrightName: "BKids",
  developerName: "Benjamin Yañez Lasalvia",
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
  workshops: "/images/workshops/taller-bkids-02.jpg",
  prices: "/images/heroes/hero-precios-bkids.jpg",
  contact: "/images/espacio-principal-bkids.jpg",
};

export const homeHeroSlides = [
  {
    type: "video" as const,
    src: "/images/hero-home-video.mp4",
    poster: "/images/hero-home-local.jpg",
    alt: "Niños jugando en stay and play BKids Las Condes",
  },
  {
    src: "/images/espacio-principal-bkids.jpg",
    alt: "Familias jugando en el espacio principal de BKids Las Condes",
  },
  {
    src: "/images/tobogan-nino.jpg",
    alt: "Tobogán amarillo en BKids Las Condes",
  },
  {
    src: "/images/maquina-pelotas-ninos.jpg",
    alt: "Piscina de pelotas en BKids Las Condes",
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
    image: "/images/attractions/laberinto-bkids.jpg",
    description: "Circuitos para explorar, trepar y descubrir nuevos caminos.",
  },
  {
    title: "Piscina de pelotas",
    image: "/images/attractions/piscina-de-pelotas-bkids.jpg",
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
    image: "/images/attractions/cama-saltarina-bkids.jpg",
    description: "Saltos seguros para liberar energía y pasarlo increíble.",
  },
  {
    title: "Máquina interactiva de pelotas",
    image: "/images/maquina-pelotas-ninos.jpg",
    description: "Juego dinámico para lanzar, apuntar y activar desafíos.",
  },
  {
    title: "Plataforma interactiva",
    image: "/images/attractions/plataforma-interactiva-bkids.jpg",
    description: "Un espacio dinámico para moverse, descubrir y jugar en equipo.",
  },
  {
    title: "Área ninja",
    image: "/images/attractions/area-ninja-bkids.jpg",
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

export const localCatalogProducts = [
  {
    title: "Galletas",
    image: "/images/catalog/galletas-bkids.jpeg",
    alt: "Galletas disponibles en BKids Las Condes",
  },
  {
    title: "Jugos",
    image: "/images/catalog/jugos-bkids.jpeg",
    alt: "Jugos disponibles en BKids Las Condes",
  },
  {
    title: "Bebidas",
    image: "/images/catalog/bebidas-bkids.jpeg",
    alt: "Bebidas disponibles en BKids Las Condes",
  },
  {
    title: "Agua",
    image: "/images/catalog/agua-bkids.jpeg",
    alt: "Agua disponible en BKids Las Condes",
  },
  {
    title: "Compotas",
    image: "/images/catalog/compotas-bkids.jpeg",
    alt: "Compotas disponibles en BKids Las Condes",
  },
  {
    title: "Snacks",
    image: "/images/catalog/snacks-bkids.jpeg",
    alt: "Snacks disponibles en BKids Las Condes",
  },
  {
    title: "Leches",
    image: "/images/catalog/leches-bkids.jpeg",
    alt: "Leches disponibles en BKids Las Condes",
  },
  {
    title: "Muffin",
    image: "/images/catalog/muffin-bkids.jpeg",
    alt: "Muffin disponible en BKids Las Condes",
  },
  {
    title: "Brownie",
    image: "/images/catalog/brownie-bkids.jpeg",
    alt: "Brownie disponible en BKids Las Condes",
  },
  {
    title: "Galleta de coco",
    image: "/images/catalog/galleta-coco-bkids.jpeg",
    alt: "Galleta de coco disponible en BKids Las Condes",
  },
];

export const socialLinks = {
  instagram:
    "https://www.instagram.com/bkids_chile?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  facebook: "https://www.facebook.com/profile.php?id=61581802253114#",
  whatsapp: contact.whatsappUrl,
};
