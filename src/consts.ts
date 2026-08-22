import type { Locale } from './i18n/ui';

export const SITE = {
  name: 'Cargo Navis',
  url: 'https://www.cargo-navis.com',
  ogImage: '/og-image.jpg', // 1200x630
  loginUrl: 'https://app.cargo-navis.com/login',
  contactEmail: 'marko.hezler@cargo-navis.com',
} as const;

// Used by hero, all feature CTAs, footer, and the CTA section.
// TODO Step 7: swap to the Astro Action contact form.
export const INQUIRY_MAILTO = `mailto:${SITE.contactEmail}`;
export const LOGIN_URL = SITE.loginUrl;

// Per-locale page metadata. hr copied 1:1 from current site (SEO parity).
export const META: Record<Locale, { title: string; description: string }> = {
  hr: {
    title: 'Cargo Navis - Digitalizirajte svoje poslovanje u prijevozu tereta',
    description:
      'Jedinstven sustav za upravljanje nalozima tereta i flotom. Pratite naloge u stvarnom vremenu, upravljajte vozilima i dokumentacijom te pojednostavite logistiku uz pametna upozorenja i intuitivne alate.',
  },
  en: {
    title: 'Cargo Navis - Digitalize your freight transport business',
    description:
      'A unified system for managing freight orders and fleet. Track orders in real time, manage vehicles and documentation, and simplify logistics with smart alerts and intuitive tools.',
  },
};
