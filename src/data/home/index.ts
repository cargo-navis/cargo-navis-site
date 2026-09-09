// Homepage content. Kept as a typed data module (not content collections)
// because the feature rows carry rich inline markup + alternating layout that
// doesn't map cleanly to MDX. The collections remain for future dedicated
// feature pages / changelog.
//
// Structure lives here and is shared by every locale; the translatable strings
// live in ./hr.ts and ./en.ts, typed as HomeCopy so a missing English key is a
// compile error rather than a blank section. Call getHome(locale).
import type { ImageMetadata } from 'astro';
import type { Locale, UIKey } from '../../i18n/ui';
import { DEMO_PATH, INQUIRY_MAILTO, LOGIN_URL, PRIVACY_PATH, SITE } from '../../consts';
import type { FeatureId, HomeCopy, StatId, TestimonialId } from './types';
import { hr } from './hr';
import { en } from './en';

// Screenshots
import heroA from '../../assets/img/cleanshot-2026-01-05-at-15.17.53.webp';
import heroB from '../../assets/img/cleanshot-2026-02-11-at-10.23.14.webp';
import heroC from '../../assets/img/cleanshot-2026-01-05-at-15.25.15.webp';
import heroD from '../../assets/img/cleanshot-2026-01-05-at-10.46.47.webp';
import shape from '../../assets/img/shape.webp';
import dashboard from '../../assets/img/dashboard.webp';
import fleet from '../../assets/img/fleet.webp';
import orders from '../../assets/img/cleanshot-2026-01-06-at-13.10.41.webp';
import alerts from '../../assets/img/alerts.webp';
import analitika from '../../assets/img/analitika.webp';
import fileUpload from '../../assets/img/file-upload.webp';

// Logos
import logomark from '../../assets/logos/logomark.webp';
import garic from '../../assets/logos/garic.webp';
import transportiSokol from '../../assets/logos/transporti-sokol.webp';
import vukelja from '../../assets/logos/vukelja-transporti.webp';
import animago from '../../assets/logos/animago.webp';
import lust from '../../assets/logos/lust-transporti.webp';

export { logomark, shape };
export type { FeatureId, StatId, TestimonialId } from './types';

const copy: Record<Locale, HomeCopy> = { hr, en };

// --- locale-agnostic ---------------------------------------------------------

// Labels resolve through i18n; hrefs are locale-agnostic and get prefixed by the
// component. Section anchors are absolute (`/#About`) so they also work from /demo.
export const navLinks: { key: UIKey; href: string }[] = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.about', href: '/#About' },
  { key: 'nav.features', href: '/#Feature' },
  { key: 'nav.reviews', href: '/#Review' },
  { key: 'nav.contact', href: '/#Cta' },
];
export const loginHref = LOGIN_URL;
export const demoHref = DEMO_PATH;

export const marqueeLogos: { src: ImageMetadata; alt: string }[] = [
  { src: garic, alt: 'Marquee Image' },
  { src: transportiSokol, alt: 'Marquee Image' },
  { src: vukelja, alt: 'Marquee Image' },
  { src: animago, alt: 'Marquee Image' },
  { src: lust, alt: 'Marquee Image' },
];

export const footerMenus = [
  {
    titleKey: 'footer.menu.company' as UIKey,
    links: [
      { key: 'nav.home' as UIKey, href: '/' },
      { key: 'nav.about' as UIKey, href: '/#About' },
      { key: 'nav.features' as UIKey, href: '/#Feature' },
      { key: 'nav.reviews' as UIKey, href: '/#Review' },
      { key: 'nav.contact' as UIKey, href: '/#Cta' },
    ],
  },
  {
    titleKey: 'footer.menu.legal' as UIKey,
    links: [{ key: 'footer.privacy' as UIKey, href: PRIVACY_PATH }],
  },
];

export const footerContactEmail = { label: SITE.contactEmail, href: INQUIRY_MAILTO };

// --- structural spine --------------------------------------------------------

const heroImages = {
  two: [
    { src: heroA, alt: 'Hero Image' },
    { src: heroB, alt: 'Hero Image' },
  ],
  three: { src: heroC, alt: 'Hero Image' },
  four: { src: heroD, alt: 'Hero Image' },
};

const aboutSpine = {
  dashboard: { src: dashboard, alt: 'Dashboard Image' },
  videoId: 'JHygu7fRKOQ',
  // Numeric values are locale-agnostic; only the labels are translated.
  stats: [
    { id: 'companies', value: '25+' },
    { id: 'orders', value: '18k+' },
    { id: 'loads', value: '25k+' },
    { id: 'vehicles', value: '350+' },
  ] satisfies { id: StatId; value: string }[],
};

const featureSpine = [
  { id: 'fleet', reverse: false, image: { src: fleet, alt: 'Feature Image' } },
  { id: 'orders', reverse: true, image: { src: orders, alt: 'Feature Image' } },
  { id: 'alerts', reverse: false, image: { src: alerts, alt: 'Feature Image' } },
  { id: 'analytics', reverse: true, image: { src: analitika, alt: 'Feature Image' } },
  { id: 'archive', reverse: false, image: { src: fileUpload, alt: 'Feature Image' } },
] satisfies { id: FeatureId; reverse: boolean; image: { src: ImageMetadata; alt: string } }[];

const testimonialSpine = [
  {
    id: 'sokol',
    name: 'Transporti Sokol',
    logo: { src: transportiSokol, alt: 'Client logo - Transporti Sokol' },
    wide: true,
  },
  {
    id: 'vukelja',
    name: 'Vukelja Transporti',
    logo: { src: vukelja, alt: 'Client logo - Vukelja Transporti' },
    wide: false,
  },
  {
    id: 'animago',
    name: 'Animago d.o.o',
    logo: { src: animago, alt: 'Client logo - Animago d.o.o' },
    wide: false,
  },
] satisfies {
  id: TestimonialId;
  name: string;
  logo: { src: ImageMetadata; alt: string };
  wide: boolean;
}[];

// --- merged view -------------------------------------------------------------

export interface FeatureRow {
  id: FeatureId;
  reverse: boolean;
  title: string; // may contain <br>
  paragraphs: string[]; // may contain <strong>/<br>
  image: { src: ImageMetadata; alt: string };
  bullets?: string[]; // may contain <strong>
  subBoxes?: { title: string; text: string }[];
}

export function getHome(locale: Locale) {
  const c = copy[locale];

  return {
    hero: { ...c.hero, images: heroImages },

    about: {
      heading: c.about.heading,
      paragraph: c.about.paragraph,
      dashboard: aboutSpine.dashboard,
      videoId: aboutSpine.videoId,
      stats: aboutSpine.stats.map((s) => ({ value: s.value, label: c.about.stats[s.id] })),
    },

    features: featureSpine.map(
      (f): FeatureRow => ({ ...f, ...c.features[f.id] }),
    ),

    testimonials: {
      heading: c.testimonials.heading,
      cards: testimonialSpine.map((t) => ({ ...t, ...c.testimonials.cards[t.id] })),
    },

    cta: c.cta,

    footer: {
      menus: footerMenus,
      contact: { email: footerContactEmail, address: c.footer.address },
    },
  };
}
