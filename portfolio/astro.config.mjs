import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Si cambiás el dominio (ej. a uno propio), actualizá esta línea.
export default defineConfig({
  site: 'https://valentinavalle.vercel.app',
  integrations: [sitemap()],
  trailingSlash: 'never',
  build: { format: 'file' },
});
