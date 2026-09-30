import type { ImageMetadata } from 'astro';

/**
 * Las fotos se descubren solas: basta con copiar archivos a las carpetas.
 *  - src/assets/perfil/*            → tu foto (se usa la primera por orden alfabético)
 *  - src/assets/proyectos/<slug>/*  → fotos de cada caso (la primera es la portada, el resto es galería)
 * Formatos: jpg, jpeg, png, webp, avif.
 */
const fotosProyectos = import.meta.glob<ImageMetadata>(
  '/src/assets/proyectos/*/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true, import: 'default' },
);

const fotosPerfil = import.meta.glob<ImageMetadata>(
  '/src/assets/perfil/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true, import: 'default' },
);

const porNombre = (a: [string, unknown], b: [string, unknown]) =>
  a[0].localeCompare(b[0], 'es', { numeric: true, sensitivity: 'base' });

export interface Foto {
  src: ImageMetadata;
  /** Nombre del archivo, para poder asociarle un alt desde proyectos.ts. */
  archivo: string;
}

export function fotosDeProyecto(slug: string): Foto[] {
  return Object.entries(fotosProyectos)
    .filter(([ruta]) => ruta.startsWith(`/src/assets/proyectos/${slug}/`))
    .sort(porNombre)
    .map(([ruta, src]) => ({ src, archivo: ruta.split('/').pop() ?? '' }));
}

export function fotoDePerfil(): ImageMetadata | undefined {
  return Object.entries(fotosPerfil).sort(porNombre)[0]?.[1];
}
