// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

// Sitemap URLs in the same form as each page's canonical (layouts/Layout.astro): no trailing slash, except the
// locale home pages `/` and `/en/`. Otherwise Google sees `/demo/` in the sitemap and `/demo` as canonical.
/** @param {string} url */
const toCanonical = (url) => {
  const u = new URL(url);
  if (!/^\/(en\/)?$/.test(u.pathname)) u.pathname = u.pathname.replace(/\/+$/, '');
  return u.href;
};

// https://astro.build/config
export default defineConfig({
  site: 'https://www.cargo-navis.com',

  // hr = default locale served at `/` (SEO parity with current site),
  // en served at `/en/`. English content fills in later.
  i18n: {
    defaultLocale: 'hr',
    locales: ['hr', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react(),
    mdx(),
    sitemap({
      // Same hreflang codes as the <link rel="alternate"> tags in layouts/Layout.astro (`hr`, `en`, `x-default`).
      i18n: {
        defaultLocale: 'hr',
        locales: { hr: 'hr', en: 'en' },
      },
      serialize: (item) => {
        const links = item.links?.map((link) => ({ ...link, url: toCanonical(link.url) }));
        const hr = links?.find((link) => link.lang === 'hr');
        return {
          ...item,
          url: toCanonical(item.url),
          links: links && hr ? [...links, { lang: 'x-default', url: hr.url }] : links,
        };
      },
    }),
  ],
  adapter: vercel()
});