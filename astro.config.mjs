// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// `site` must match the deployed origin — Astro uses it to emit absolute URLs
// in the sitemap and in the Open Graph tags. Update it here (and only here)
// when a custom domain is attached.
// https://astro.build/config
export default defineConfig({
  site: 'https://amirhesp.github.io',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});
