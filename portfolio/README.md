# Portfolio · Valentina Valle

Sitio estático hecho con [Astro](https://astro.build). Español rioplatense, CSS propio, sin frameworks de UI.

## Dónde va cada cosa

| Qué                              | Dónde                                                        |
| -------------------------------- | ------------------------------------------------------------ |
| Mail, WhatsApp, LinkedIn, textos | `src/data/perfil.ts`                                         |
| Los casos (proyectos)            | `src/data/proyectos.ts`                                      |
| Tu foto                          | `src/assets/perfil/` (cualquier `.jpg/.png/.webp`)           |
| Fotos de un caso                 | `src/assets/proyectos/<slug>/`                               |
| CV                               | `public/cv/CV_Valentina_Valle_2026.pdf` (respetá ese nombre) |
| Colores y tipografías            | `src/styles/global.css` (variables al inicio)                |
| Imagen al compartir el link      | `public/og.png` (1200×630)                                   |

## Fotos

- Copiá las fotos a la carpeta del caso y listo: **la primera (por orden alfabético) es la portada y el resto es la galería**. Nombralas `01.jpg`, `02.jpg`… para controlar el orden.
- Tu foto va en `src/assets/perfil/` (se usa la primera).
- Mientras no haya fotos se ven placeholders ("Foto del proyecto"); se reemplazan solos.
- Formatos: jpg, jpeg, png, webp, avif. Astro las optimiza y las carga en lazy.
- Alt de las fotos: por defecto se arma con la marca y el título. Si querés uno propio, agregá `alts: ['Descripción foto 1', 'Descripción foto 2']` al caso en `proyectos.ts`.
- Al compartir un caso en redes se usa su portada; si no tiene foto, `og.png`.

## Sumar un proyecto nuevo

1. En `src/data/proyectos.ts` copiá un bloque de la lista y cambiá los textos. El `slug` va en la URL (`/proyectos/<slug>`): minúsculas, sin acentos ni espacios.
2. Creá la carpeta `src/assets/proyectos/<slug>/` y poné las fotos.
3. Listo: aparece en la grilla del home y tiene su propia página. El número (01, 02…) sale del orden en la lista.

Los campos con `?` en el archivo son opcionales (`desafio`, `resultado`, `cifras`, `destacado`, `eventos`…): si no los completás, esa sección no se muestra.

## Correrlo en tu compu

```bash
cd portfolio
npm install
npm run dev      # http://localhost:4321
npm run build    # genera la carpeta dist/
```

## Publicarlo en Vercel (gratis)

1. Entrá a [vercel.com](https://vercel.com) → **Sign up** → **Continue with GitHub**.
2. **Add New… → Project** → elegí el repo `verbal-agency` → **Import**.
3. En **Root Directory** poné `portfolio` (este sitio vive en esa carpeta; el resto del repo es el sitio de la agencia). Vercel detecta Astro solo.
4. En **Project Name** escribí `valentinavalle` (así queda `valentinavalle.vercel.app`). Si ya está tomado, elegí otro nombre y actualizá `site` en `astro.config.mjs` y la línea `Sitemap` de `public/robots.txt`.
5. **Deploy**. En un minuto tenés el link.

> Vercel publica la rama de producción (por defecto `main`). Los cambios de la rama `claude/valentina-valle-portfolio-14wff0` tienen que pasar a `main` (por un Pull Request) para que salgan en el link principal; mientras tanto Vercel les da un link de vista previa.

### Actualizarlo

Cambiá lo que quieras (textos, fotos, un caso nuevo), subilo a GitHub (`git add . && git commit -m "…" && git push`, o desde la web de GitHub arrastrando archivos) y Vercel vuelve a publicar solo, en ~1 minuto.

### Conectar un dominio propio (opcional)

1. Comprá el dominio (ej. `valentinavalle.com.ar` en NIC.ar o `.com` en Namecheap/GoDaddy).
2. En Vercel: tu proyecto → **Settings → Domains → Add** → escribí el dominio.
3. Vercel te muestra 1 o 2 registros DNS (un `A` o un `CNAME`). Cargalos en el panel del lugar donde compraste el dominio.
4. Esperá unos minutos hasta que aparezca el tilde verde (el certificado HTTPS es automático).
5. Cambiá `site` en `astro.config.mjs` y la línea `Sitemap` de `public/robots.txt` por el dominio nuevo y volvé a subir.
