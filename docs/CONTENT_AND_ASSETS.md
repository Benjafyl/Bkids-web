# Contenido, Rutas Y Assets

## Contenido Editable

El archivo principal para edición editorial es:

```text
src/data/site.ts
```

Ahí se pueden modificar sin tocar layout:

- Título y descripción SEO.
- Dirección, teléfono, correo y horarios.
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
resfalin.jpg
arenero.jpg
cama-elastica.jpg
pared-legos.jpg
maquina-pelotas.jpg
area-ninja.jpg
talleres-generico.jpg
cumpleanos.jpg
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
