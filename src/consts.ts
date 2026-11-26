import type { Locale } from './i18n/ui';

export const SITE = {
  name: 'Cargo Navis',
  url: 'https://www.cargo-navis.com',
  loginUrl: 'https://app.cargo-navis.com/login',
  contactEmail: 'info@cargo-navis.com',
  // Company profiles, for the Organization structured data (`sameAs`).
  profiles: ['https://www.linkedin.com/company/cargo-navis', 'https://www.facebook.com/profile.php?id=61578706550160'],
} as const;

// Structured-data IDs, so the blocks on a page point at each other instead of repeating the company.
export const ORG_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;

// Default link-preview image per locale (public/, 1200×630 PNG): the hero headline next to the driver app with a
// confirmed utovar. Static files, made once from the site's fonts and colours; replace both if the hero copy changes.
export const OG_IMAGE: Record<Locale, { src: string; alt: string }> = {
  hr: { src: '/og-image-hr.png', alt: 'Cargo Navis: nalozi, vozila i vozači na jednom mjestu' },
  en: { src: '/og-image-en.png', alt: 'Cargo Navis: shipments, vehicles and drivers in one place' },
};

// Legal entity behind the site — used by the privacy policy and Organization JSON-LD.
export const LEGAL = {
  companyName: 'Cargo Navis d.o.o.',
  oib: '37735986647',
  addressLines: ['Županjska ulica 21', '10000 Zagreb', 'Hrvatska / Croatia'],
  privacyEmail: SITE.contactEmail,
  // Keep in sync with the "last updated" line rendered on the policy pages.
  privacyUpdated: '2026-11-25',
} as const;

// Google Calendar appointment schedule powering /demo.
// `gv=true` is required by Google; without it the embed renders the raw calendar.
export const BOOKING_SCHEDULE_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ25C-0EMugywCgU-lNA72kIQ82DerLM8qj-N84a6rfMS7I2pR6fB9VIk3Qp41hS1gQ2IuDQY3kx?gv=true';

// Locale-agnostic paths. Slugs are identical across locales so the hreflang
// alternates emitted by Layout.astro resolve to real URLs.
export const DEMO_PATH = '/demo';
export const PRIVACY_PATH = '/privacy-policy';

// Per-locale home page metadata (2026-11 redesign copy: informal „ti”, app words).
export const META: Record<Locale, { title: string; description: string }> = {
  hr: {
    title: 'Softver za prijevoznike: nalozi, vozila i vozači - Cargo Navis',
    description:
      'Nalog iz PDF-a za minutu, ruta svakog vozila na jednom ekranu, a vozači potvrđuju utovar i istovar u aplikaciji. Cargo Navis je softver za prijevoznike.',
  },
  en: {
    title: 'TMS software: shipments, vehicles, drivers - Cargo Navis',
    description:
      'A shipment from a PDF in a minute, every vehicle’s route on one screen, and drivers confirm loading and unloading in the app. Cargo Navis is TMS software for transport companies.',
  },
};
