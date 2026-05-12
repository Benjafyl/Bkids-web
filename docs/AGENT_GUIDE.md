# Guía Para Agentes De IA

## Objetivo Del Proyecto

BKids Web es una web moderna, responsive y visualmente infantil para un centro de entretención en Las Condes. La marca debe sentirse alegre, acuática, colorida, familiar y profesional.

El sitio ya tiene las páginas principales, navegación, formulario visual con validación frontend, datos editables centralizados e imágenes placeholder reemplazables.

## Reglas Antes De Editar

- Revisa primero `src/data/site.ts`; gran parte del contenido editable vive ahí.
- Mantén el stack actual: Next.js App Router, TypeScript y Tailwind CSS.
- No agregues backend salvo que la tarea lo pida explícitamente.
- No dupliques contenido hardcodeado si puede vivir en `src/data/site.ts`.
- Conserva rutas limpias: `/`, `/quienes-somos`, `/cumpleanos`, `/talleres`, `/precios`, `/formulario`.
- Mantén la estética BKids: azul fuerte, celeste, turquesa, rojo/coral, amarillo y rosado.
- Evita frases ya descartadas como “Personajes y fantasía”.
- Usa componentes existentes antes de crear nuevos.
- Después de cambios visuales, revisa desktop y móvil.

## Dónde Tocar Según La Tarea

- Cambiar textos, precios, teléfonos, mail, dirección, atracciones o condiciones: `src/data/site.ts`.
- Cambiar estructura de una página: `src/app/**/page.tsx`.
- Cambiar header, navegación o footer: `src/components/Header.tsx`, `TopBar.tsx`, `Navbar.tsx`, `Footer.tsx`.
- Cambiar hero: `src/components/Hero.tsx`.
- Cambiar carrusel: `src/components/ImageCarousel.tsx`.
- Cambiar formulario y validaciones: `src/components/ContactForm.tsx`.
- Cambiar look global, olas, tipografías o tokens visuales: `src/app/globals.css`.
- Reemplazar imágenes: `public/images/`.

## Criterios De Calidad

- El sitio debe compilar con `npm run build`.
- El lint debe pasar con `npm run lint`.
- La experiencia móvil no debe tener texto cortado ni elementos superpuestos.
- Los botones y enlaces principales deben mantener contraste suficiente.
- Los placeholders de imagen pueden existir, pero deben estar bien nombrados y ser fáciles de reemplazar.
- Las páginas deben quedar navegables, no como secciones incompletas.

## Notas De Next.js

Este proyecto usa Next.js 16 con App Router. Si necesitas revisar comportamiento específico del framework, lee la documentación local o actual antes de asumir APIs antiguas.

Los componentes son Server Components por defecto. Usa `"use client"` solo en componentes que requieren estado, eventos o APIs del navegador.
