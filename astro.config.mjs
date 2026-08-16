import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Vercel expone el dominio del proyecto en el build, así no hay que escribirlo
// a mano ni actualizarlo si algún día se agrega un dominio propio.
const dominioVercel =
  process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;

export default defineConfig({
  site: dominioVercel ? `https://${dominioVercel}` : 'http://localhost:4321',
  integrations: [tailwind()],
});
