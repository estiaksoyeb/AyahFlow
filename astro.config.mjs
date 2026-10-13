// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Dev: base '/' (http://127.0.0.1:4321/)
// Prod: base '/AyahFlow' (GitHub Pages project site)
const isProd = process.env.NODE_ENV === 'production' || !!process.env.CI;

export default defineConfig({
  site: 'https://estiaksoyeb.github.io',
  base: isProd ? '/AyahFlow' : '/',
  vite: { plugins: [tailwindcss()] },
  devToolbar: { enabled: false },
});
