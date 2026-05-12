# Flujo De Trabajo Y Verificación

## Instalación

```bash
npm install
```

## Desarrollo Local

```bash
npm run dev
```

Por defecto, abre:

```text
http://localhost:3000
```

También puede usarse:

```text
http://127.0.0.1:3000
```

## Verificación Obligatoria Antes De Entregar

Ejecuta:

```bash
npm run lint
npm run build
```

Ambos deben pasar.

## Revisión Visual Recomendada

Revisar al menos:

- Inicio desktop.
- Inicio móvil.
- Formulario móvil.
- Navbar móvil abierto.
- Footer.
- Hero de cada página.

Puntos críticos:

- Que no haya texto superpuesto.
- Que los botones no corten texto.
- Que el menú móvil cierre al navegar.
- Que el formulario muestre errores para nombre, correo inválido y mensaje vacío.
- Que el mensaje de éxito aparezca al enviar datos válidos.

## Convenciones De Edición

- Mantén componentes pequeños y reutilizables.
- Si un bloque se repite en más de una página, considera crear componente.
- Si un dato puede cambiar por negocio, ponlo en `src/data/site.ts`.
- Usa `next/image` para imágenes locales.
- Usa `next/link` para navegación interna.
- Usa `lucide-react` para iconos generales, pero no asumas que incluye logos de marcas.

## Agregar Una Página Nueva

1. Crea `src/app/nueva-ruta/page.tsx`.
2. Reutiliza `Hero`, `CTASection` y componentes existentes.
3. Agrega la ruta a `navItems` en `src/data/site.ts` si debe aparecer en el menú.
4. Actualiza esta documentación si la página será parte estable del sitio.
5. Ejecuta `npm run lint` y `npm run build`.

## Agregar Una Nueva Atracción

1. Agrega la imagen en `public/images/`.
2. Agrega el objeto correspondiente en `attractions` dentro de `src/data/site.ts`.
3. Usa título, descripción e imagen clara.
4. Verifica la grilla en desktop y móvil.

## Cambiar Precios

Edita `entryPrices` en `src/data/site.ts`.

No cambies el componente `PriceCard` si solo varían los valores, títulos o descripciones.

## Cambiar Reseñas De Google

Edita `googleReviews` en `src/data/reviews.ts`.

Los botones de la sección usan `googleLinks.reviewsUrl` y `googleLinks.writeReviewUrl` en el mismo archivo.

## Futuro Backend O Envío Real De Formulario

Actualmente `ContactForm` solo valida en frontend y muestra un mensaje visual.

Si se agrega envío real:

- Mantén la validación frontend.
- Agrega manejo de estado de carga y error.
- No pongas secretos en código cliente.
- Preferir Server Actions o Route Handlers según el servicio elegido.
- Documenta el proveedor y las variables de entorno necesarias.
