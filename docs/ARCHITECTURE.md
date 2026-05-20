# Arquitectura Del Proyecto

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- `lucide-react` para iconos generales
- Endpoint backend `/api/contact` para envío del formulario por SMTP

## Estructura Principal

```text
src/
  app/
    api/contact/route.ts
    page.tsx
    layout.tsx
    globals.css
    quienes-somos/page.tsx
    cumpleanos/page.tsx
    talleres/page.tsx
    precios/page.tsx
    formulario/page.tsx
  components/
    AttractionCard.tsx
    ContactForm.tsx
    BirthdayWorkshopsSection.tsx
    CTASection.tsx
    Footer.tsx
    Header.tsx
    Hero.tsx
    HeroCarousel.tsx
    ImageCarousel.tsx
    LocationHoursSection.tsx
    Navbar.tsx
    PriceCard.tsx
    TopBar.tsx
  data/
    site.ts
    reviews.ts
public/
  images/
docs/
```

## Layout Global

`src/app/layout.tsx` define:

- Metadata SEO base.
- Tipografías de Google con `next/font`.
- `Header` global.
- `Footer` global.
- Contenedor principal para todas las rutas.

## Páginas

- `/`: Inicio con hero, atracciones, bloques de cumpleaños/talleres, horarios/ubicación, reseñas y CTA.
- `/quienes-somos`: historia, misión y valores de marca.
- `/cumpleanos`: estructura de packs, condiciones y CTA.
- `/talleres`: contenido genérico de talleres, actividades y CTA.
- `/precios`: cards de entradas y secciones de cumpleaños/talleres.
- `/formulario`: datos de contacto, formulario con envío real por `/api/contact` y ubicación.

## Componentes

- `TopBar`: barra azul superior con contacto y redes.
- `Navbar`: navegación principal responsive.
- `Header`: compone `TopBar` y `Navbar`.
- `Hero`: hero reusable con variantes `immersive`, `split`, `compact` y `collage`.
- `ImageCarousel`: carrusel cliente con autoavance y controles.
- `AttractionCard`: tarjeta para atracciones.
- `PriceCard`: tarjeta para precios.
- `CTASection`: bloque de llamada a la acción.
- `HeroCarousel`: hero interactivo de Inicio con imagen de fondo, controles y puntos.
- `AttractionsSection`: grilla compacta de atracciones de Inicio.
- `BirthdayWorkshopsSection`: cards comerciales de Cumpleaños y Talleres en Inicio.
- `LocationHoursSection`: bloque de visita con horarios, contacto y mapa.
- `ContactForm`: formulario cliente con validación básica y envío a `/api/contact`.
- `Footer`: footer con olas, logo, contacto e información legal.
- `GoogleReviews`: bloque compacto de reseñas de Google para Inicio.

## Datos Centralizados

`src/data/site.ts` concentra:

- Metadata.
- Contacto.
- Legal.
- Navegación.
- Imágenes hero.
- Imágenes del carrusel.
- Atracciones.
- Precios.
- Condiciones de cumpleaños.
- Packs iniciales.
- Texto de talleres.
- Link centralizado de WhatsApp.
- Galería de recap de talleres.

El formulario usa variables de entorno SMTP. No hardcodear credenciales ni exponer secretos en componentes cliente.

`src/data/reviews.ts` concentra las reseñas visibles y los links de Google para ver o dejar reseñas.

Cuando agregues contenido repetible, prefiere sumarlo ahí y mapearlo desde los componentes o páginas.
