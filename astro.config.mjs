// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// base is '/AyahFlow' only for GitHub Pages (project-page URL).
// Everywhere else (local dev, Vercel, custom domain) it's the root.
const onGhPages = process.env.DEPLOY_TARGET === 'gh-pages';

export default defineConfig({
  site: 'https://estiaksoyeb.github.io',
  base: onGhPages ? '/AyahFlow' : '/',
  vite: { plugins: [tailwindcss()] },
  devToolbar: { enabled: false },
});
