# BKids Web

Sitio web de BKids construido con Next.js, TypeScript y Tailwind CSS.

La documentacion del proyecto vive en `docs/`. Si eres un agente de IA o una persona que va a modificar el sitio, empieza por esa carpeta.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir:

```text
http://localhost:3000
```

## Build local

```bash
npm run build
```

El proyecto esta configurado con `output: "export"` en `next.config.ts`, por lo que el build genera la carpeta estatica `out/`.

## Pantalla temporal "Muy pronto"

El sitio puede quedar oculto temporalmente con una pantalla de "Muy pronto" sin borrar el avance de la web.

Para activar o desactivar esta pantalla, editar `src/data/site.ts`:

```ts
export const comingSoon = {
  enabled: true,
  // ...
};
```

- `enabled: true`: muestra solo la pantalla temporal en todas las rutas.
- `enabled: false`: muestra el sitio completo.

Despues de cambiarlo, volver a construir y desplegar.

## Docker

Construir la imagen:

```bash
docker build -t bkids-web .
```

Ejecutar el contenedor localmente:

```bash
docker run --rm -p 8080:80 bkids-web
```

Abrir:

```text
http://localhost:8080
```

El contenedor final usa `nginx:alpine` y escucha internamente en el puerto `80`.

## Dockploy

Crear una app nueva e independiente para BKids. No reutilizar apps, contenedores, carpetas ni configuraciones de otros sitios del servidor.

Configuracion sugerida:

```text
App name: bkids-web
Repo: Benjafyl/Bkids-web
Branch: main
Build Type: Dockerfile
Docker File: Dockerfile
Docker Context Path: .
Container Port: 80
```

Dominios:

```text
bkids.cl
www.bkids.cl
```

Routing:

```text
Path: /
Internal Path: /
Strip Path: off
HTTPS en Dockploy: off
```

Cloudflare maneja HTTPS publico y el tunel `servidor-byc` envia trafico a `http://localhost:80` del servidor. Dockploy + Traefik se encargan de enrutar por hostname hacia el contenedor correspondiente.

## Flujo para publicar cambios

```bash
npm run build
docker build -t bkids-web .
docker run --rm -p 8080:80 bkids-web
git add .
git commit -m "dockeriza bkids para dockploy"
git push
```
