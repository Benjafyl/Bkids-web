# Contenido, Rutas Y Assets

## Contenido Editable

El archivo principal para edición editorial es:

```text
src/data/site.ts
```

Ahí se pueden modificar sin tocar layout:

- Título y descripción SEO.
- Dirección, teléfono, correo y horarios.
- Link de Google Maps y URL embebida del mapa (`location.mapsUrl` y `location.embedUrl`).
- Link de WhatsApp (`contact.whatsappUrl` y `socialLinks.whatsapp`).
- Razón social y RUT.
- Menú de navegación.
- Imágenes usadas por página.
- Carrusel de inicio.
- Atracciones.
- Precios.
- Condiciones de cumpleaños.
- Copys base de talleres.

## Rutas Actuales

```text
/               Inicio
/quienes-somos  Quiénes Somos
/cumpleanos     Cumpleaños
/talleres       Talleres
/precios        Precios
/formulario     Contacto / Formulario
```

No cambies estas rutas sin actualizar navegación, CTAs y documentación.

## Imágenes

Todas las imágenes públicas viven en:

```text
public/images/
```

Lista de imágenes preparadas para reemplazo:

```text
logo-bkids.png
hero-home.jpg
hero-cumpleanos.jpg
hero-talleres.jpg
hero-precios.jpg
hero-contacto.jpg
juegos-laberinto.jpg
piscina-pelotas.jpg
tobogan.jpg
resbalin.jpg
espacio-juegos.jpg
foto-comercial-1.jpg
foto-comercial-2.jpg
hero-about.jpg
nosotros-equipo.jpg
arenero.jpg
cama-elastica.jpg
pared-legos.jpg
maquina-pelotas.jpg
area-ninja.jpg
talleres-generico.jpg
cumpleanos.jpg
hero-home-video.mp4
maquina-pelotas-ninos.jpg
cumpleanos-celebracion.jpg
resfalin-ninos.jpg
tobogan-nino.jpg
equipo-bkids-conocenos.jpg
cumpleanos-header.jpg
cumpleanos-info.jpg
quienes-somos-familia-secundaria.jpg
taller-invierno-recap.jpg
quienes-somos-foto-nosotros.jpg
quienes-somos-equipo-secundaria.jpg
```

## Reglas Para Reemplazar Imágenes

- Mantén exactamente el mismo nombre si solo estás cambiando la imagen.
- Usa JPG para fotografías y PNG para logo con transparencia.
- Recomendado para heroes: mínimo 1600 x 1000 px.
- Recomendado para tarjetas: mínimo 1200 x 900 px.
- Evita imágenes oscuras, borrosas o demasiado recortadas.
- Las imágenes deben mostrar juegos, espacios reales, cumpleaños, talleres o elementos infantiles reconocibles.

## Paleta Visual

Colores principales usados:

```text
Azul fuerte: #0a72ce
Celeste/turquesa: #00a9c7
Coral/rojo: #ef3854
Amarillo: #ffcc33
Rosado: #ff6078
Azul oscuro de texto: #12314d
```

La web no debe volverse monocromática. Mantén contraste entre azul, amarillo, coral y turquesa.

## Tipografía

El proyecto usa:

- `Baloo 2` para títulos grandes y tono infantil.
- `Nunito` para textos legibles de interfaz.

Las fuentes se configuran en `src/app/layout.tsx` y se aplican desde `src/app/globals.css`.

## Reseñas De Google

Las 2 reseñas visibles de Inicio se editan en:

```text
src/data/reviews.ts
```

En ese mismo archivo están centralizados los links:

```text
googleLinks.reviewsUrl
googleLinks.writeReviewUrl
```

## Formulario De Contacto

El formulario envía a `/api/contact` y usa SMTP en servidor. Configura las variables de `.env.example` en desarrollo o Dockploy. Para cambiar el destinatario, edita solo `CONTACT_FORM_TO_EMAIL`.

El formulario también soporta reCAPTCHA v3 con `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`,
`RECAPTCHA_SECRET_KEY` y `RECAPTCHA_MIN_SCORE`.
