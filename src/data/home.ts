// Homepage content — Croatian, verbatim from the current Webflow site (1:1 rebuild).
// Kept as a typed data module (not content collections) because the feature rows
// carry rich inline markup + alternating layout that doesn't map cleanly to MDX.
// The collections (Step 3) remain for future dedicated feature pages / changelog.
import type { ImageMetadata } from 'astro';
import type { UIKey } from '../i18n/ui';
import { DEMO_PATH, INQUIRY_MAILTO, LOGIN_URL, PRIVACY_PATH, SITE } from '../consts';

// Screenshots
import heroA from '../assets/img/cleanshot-2026-01-05-at-15.17.53.webp';
import heroB from '../assets/img/cleanshot-2026-02-11-at-10.23.14.webp';
import heroC from '../assets/img/cleanshot-2026-01-05-at-15.25.15.webp';
import heroD from '../assets/img/cleanshot-2026-01-05-at-10.46.47.webp';
import shape from '../assets/img/shape.webp';
import dashboard from '../assets/img/dashboard.webp';
import fleet from '../assets/img/fleet.webp';
import orders from '../assets/img/cleanshot-2026-01-06-at-13.10.41.webp';
import alerts from '../assets/img/alerts.webp';
import analitika from '../assets/img/analitika.webp';
import fileUpload from '../assets/img/file-upload.webp';

// Logos
import logomark from '../assets/logos/logomark.webp';
import garic from '../assets/logos/garic.webp';
import transportiSokol from '../assets/logos/transporti-sokol.webp';
import vukelja from '../assets/logos/vukelja-transporti.webp';
import animago from '../assets/logos/animago.webp';
import lust from '../assets/logos/lust-transporti.webp';

export { logomark, shape };

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

export const hero = {
  heading: 'Upravljajte logistikom uz Cargo Navis',
  subtitle:
    'Jednostavno upravljajte vozilima, zaposlenicima i pošiljkama na jedinstvenoj i moćnoj platformi.',
  cta: { label: 'Dogovori demo', href: DEMO_PATH },
  images: {
    two: [
      { src: heroA, alt: 'Hero Image' },
      { src: heroB, alt: 'Hero Image' },
    ],
    three: { src: heroC, alt: 'Hero Image' },
    four: { src: heroD, alt: 'Hero Image' },
  },
};

export const marqueeLogos: { src: ImageMetadata; alt: string }[] = [
  { src: garic, alt: 'Marquee Image' },
  { src: transportiSokol, alt: 'Marquee Image' },
  { src: vukelja, alt: 'Marquee Image' },
  { src: animago, alt: 'Marquee Image' },
  { src: lust, alt: 'Marquee Image' },
];

export const about = {
  heading: 'Digitalizirajte svoje svakodnevne operacije prijevoza tereta.',
  paragraph:
    'Saznajte kako softver za upravljanje pošiljkama optimizira logističke procese, poboljšava praćenje pošiljki te pruža snažne alate za planiranje, nadzor i pojednostavljenje kretanja robe kroz cijeli opskrbni lanac.',
  dashboard: { src: dashboard, alt: 'Dashboard Image' },
  videoId: 'JHygu7fRKOQ',
  stats: [
    { value: '25+', label: 'Aktivnih kompanija' },
    { value: '18k+', label: 'Dodanih naloga' },
    { value: '25k+', label: 'Dodanih tereta' },
    { value: '350+', label: 'Registriranih vozila' },
  ],
};

export interface FeatureRow {
  id: string;
  reverse: boolean;
  title: string; // may contain <br>
  paragraphs: string[]; // may contain <strong>/<br>
  image: { src: ImageMetadata; alt: string };
  bullets?: string[]; // may contain <strong>
  subBoxes?: { title: string; text: string }[];
}

export const features: FeatureRow[] = [
  {
    id: 'fleet',
    reverse: false,
    title: 'Upravljajte svojom transportnom flotom.',
    paragraphs: [
      'Učinkovito pratite i upravljajte cijelom flotom s jedne platforme. Ostvarite potpunu vidljivost nad vozilima, dokumentacijom i ključnim datumima kako biste osigurali nesmetan i pouzdan rad.',
    ],
    image: { src: fleet, alt: 'Feature Image' },
    subBoxes: [
      {
        title: 'Centralizirano',
        text: 'Pratite sva vozila, dokumente i važne rokove na jednom mjestu za potpunu operativnu kontrolu.',
      },
      {
        title: 'Proaktivno',
        text: 'Budite korak ispred održavanja, usklađenosti i obnove dokumenata uz pravovremena upozorenja koja pomažu spriječiti kašnjenja i prekide u radu.',
      },
    ],
  },
  {
    id: 'orders',
    reverse: true,
    title: 'Preuzmite potpunu kontrolu nad svojim nalozima.',
    paragraphs: [
      'Pojednostavite, optimizirajte i pohranite svoje naloge za bolju kontrolu, točnost i učinkovitost.',
    ],
    image: { src: orders, alt: 'Feature Image' },
    bullets: [
      'Olakšajte poslovanje uz bazu naloga i potpunu povijest svih podataka o prijevozu.',
      'Osigurajte točnost i zadržite potpunu kontrolu nad nalozima uz redovita ažuriranja statusa.',
      'Pošaljite naloge vozačima i primajte informacije o utovaru putem <strong>WhatsApp-a</strong>.',
    ],
  },
  {
    id: 'alerts',
    reverse: false,
    title: 'Nikada ne propustite važan rok.',
    paragraphs: [
      'Primajte pravovremena <strong>upozorenja</strong> o isteku registracija, terminima održavanja, tahografima i drugim ključnim datumima. Sustav kontinuirano prati važne rokove i šalje obavijesti putem <strong>e-maila</strong>.',
      'Ostanite usklađeni s propisima i smanjite rizik od kazni ili zastoja u radu. Uz proaktivne notifikacije možete planirati unaprijed i osigurati nesmetan rad svoje flote.',
    ],
    image: { src: alerts, alt: 'Feature Image' },
  },
  {
    id: 'analytics',
    reverse: true,
    title: 'Donosite odluke na temelju podataka, ne osjećaja.',
    paragraphs: [
      'U svakom trenutku znajte koliko zarađujete, tko vam donosi najviše prihoda i gdje imate prostor za rast. Naša analitika daje vam potpunu sliku poslovanja - kroz prihod, broj naloga i performanse vozila, vozača i klijenata.<br><br>Filtrirajte podatke po vremenu, vozaču, vozilu ili klijentu i u nekoliko sekundi dođite do točnih informacija koje su vam potrebne.',
    ],
    image: { src: analitika, alt: 'Feature Image' },
  },
  {
    id: 'archive',
    reverse: false,
    title: 'Digitalna arhiva -<br>Svi važni dokumenti na jednom mjestu.',
    paragraphs: [
      'Zaboravite na izgubljene papire, e-mail privitke i nepregledne mape. S digitalnom arhivom svi vaši ključni dokumenti - nalozi, licence, ugovori i ostala dokumentacija - sigurno su <strong>pohranjeni</strong> <strong>i</strong> <strong>uvijek dostupni</strong>.',
    ],
    image: { src: fileUpload, alt: 'Feature Image' },
    bullets: [
      'Jednostavan upload dokumenata.',
      'Centralizirana digitalna arhiva i sigurna pohrana na jednom mjestu.',
      'Brzi pristup dokumentima kad god vam trebaju, bez papira i nereda.',
    ],
  },
];

export const testimonials = {
  heading: 'Što naši klijenti kažu o našem poslovanju',
  cards: [
    {
      name: 'Transporti Sokol',
      role: 'CEO',
      quote:
        '“Softver nam je drastično poboljšao pregled nad flotom i dokumentacijom. Fleet management nam automatski prati isteke registracija i opreme, a sustav nas pravovremeno upozorava i na isteke vozačkih dozvola, KOD 95 i liječničkih pregleda. Uštedjeli smo mnogo vremena i smanjili rizike u svakodnevnom radu.”',
      logo: { src: transportiSokol, alt: 'Client logo - Transporti Sokol' },
      wide: true,
    },
    {
      name: 'Vukelja Transporti',
      role: 'Manager',
      quote:
        '“Softver nam je u potpunosti centralizirao informacije i olakšao vođenje naloga. Naplatu pratimo jednostavno, a sve što nam treba imamo na jednom mjestu.”',
      logo: { src: vukelja, alt: 'Client logo - Vukelja Transporti' },
      wide: false,
    },
    {
      name: 'Animago d.o.o',
      role: 'Disponent',
      quote:
        '“Aplikacija je jednostavna, intuitivna i olakšava svakodnevne operativne procese. Fleet management posebno nam pomaže pratiti isteke registracija vozila.”',
      logo: { src: animago, alt: 'Client logo - Animago d.o.o' },
      wide: false,
    },
  ],
};

export const cta = {
  heading: 'Preuzmite kontrolu nad svojim poslovanjem već danas!',
  paragraph:
    'Isprobajte Cargo Navis već danas i digitalizirajte svoje poslovanje - bez razbacanih papira.',
  button: { label: 'Dogovori demo', href: DEMO_PATH },
};

export const footer = {
  menus: [
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
  ],
  contact: {
    email: { label: SITE.contactEmail, href: INQUIRY_MAILTO },
    address: 'Županjska ulica 21,<br>10000 Zagreb, Croatia',
  },
  copyright: '© 2026 Cargo Navis. Sva prava pridržana.',
};
