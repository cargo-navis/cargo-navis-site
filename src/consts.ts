import type { Locale } from './i18n/ui';

export const SITE = {
  name: 'Cargo Navis',
  url: 'https://www.cargo-navis.com',
  ogImage: '/og-image.jpg', // 1200x630
  loginUrl: 'https://app.cargo-navis.com/login',
  contactEmail: 'info@cargo-navis.com',
} as const;

// Legal entity behind the site — used by the privacy policy and Organization JSON-LD.
export const LEGAL = {
  companyName: 'Cargo Navis d.o.o.',
  oib: '37735986647',
  addressLines: ['Županjska ulica 21', '10000 Zagreb', 'Hrvatska / Croatia'],
  privacyEmail: SITE.contactEmail,
  // Keep in sync with the "last updated" line rendered on the policy pages.
  privacyUpdated: '2026-09-08',
} as const;

// Google Calendar appointment schedule powering /demo.
// `gv=true` is required by Google; without it the embed renders the raw calendar.
export const BOOKING_SCHEDULE_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ25C-0EMugywCgU-lNA72kIQ82DerLM8qj-N84a6rfMS7I2pR6fB9VIk3Qp41hS1gQ2IuDQY3kx?gv=true';

// Locale-agnostic paths. Slugs are identical across locales so the hreflang
// alternates emitted by Layout.astro resolve to real URLs.
export const DEMO_PATH = '/demo';
export const PRIVACY_PATH = '/privacy-policy';

// Kept for the footer/contact mailto links. Primary CTAs now point at /demo.
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
