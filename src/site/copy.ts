// Site copy (Croatian; English twin in copy.en.ts). Informal „ti” (as the app, decided 2026-11-21), app
// words: nalog, utovar / istovar, ruta, podvozar, Aplikacija za vozače. Dates 7.11. / 7.11.2026. Sentence case.
import type { ImageMetadata } from 'astro';
import { SITE } from '../consts';
import garic from '../assets/logos/garic.webp';
import sokol from '../assets/logos/transporti-sokol.webp';
import vukelja from '../assets/logos/vukelja-transporti.webp';
import animago from '../assets/logos/animago.webp';
import lust from '../assets/logos/lust-transporti.webp';

// Demo booking page and section anchors on the home page (absolute, so they also work from /demo).
export const DEMO_HREF: string = '/demo';
export const LOGIN_HREF: string = SITE.loginUrl;
export const EMAIL: string = SITE.contactEmail;

/** Section ids on the home page, localized so shared URLs read in the page's language (/#klijenti, /en/#customers). */
export const anchors = {
  howItWorks: 'kako-radi',
  features: 'znacajke',
  customers: 'klijenti',
  faq: 'pitanja',
  contact: 'kontakt',
};

export const nav = [
  { label: 'Kako radi', href: `/#${anchors.howItWorks}` },
  { label: 'Značajke', href: `/#${anchors.features}` },
  { label: 'Klijenti', href: `/#${anchors.customers}` },
  { label: 'Kontakt', href: `/#${anchors.contact}` },
];

export const hero = {
  eyebrow: 'Softver za prijevoznike',
  title: 'Nalozi, vozila i vozači na jednom mjestu.',
  sub: 'Nalog iz PDF-a za minutu, ruta svakog vozila na jednom ekranu, a vozači potvrđuju utovar i istovar u aplikaciji. Ti vidiš sve, odmah.',
  points: [
    { icon: 'mail', text: 'Nalog iz emaila ili PDF-a za minutu' },
    { icon: 'route', text: 'Ruta svakog vozila, utovari i istovari na jednom mjestu' },
    { icon: 'phone', text: 'Vozači potvrđuju u aplikaciji, ti vidiš odmah' },
  ],
  primary: 'Dogovori demo',
  secondary: 'Prijava',
};

export type StepId = 'nalog' | 'vozilo' | 'ruta' | 'vozac' | 'faktura';

/** The daily path, in order: B tells it as a day, C as stops on a route. */
export const steps: {
  id: StepId;
  /** URL fragment of the step (localized, e.g. /en/#shipment). */
  anchor: string;
  time: string;
  kicker: string;
  title: string;
  text: string;
  bullets: string[];
  shot: string;
}[] = [
  {
    id: 'nalog',
    anchor: 'nalog',
    time: '08:10',
    kicker: 'Dodaj nalog',
    title: 'Nalog iz PDF-a za minutu',
    text: 'Povuci PDF naloga, proslijedi ga emailom ili ga dodaj ručno. Iz PDF-a ili emaila popunjavamo klijenta, terete, utovare i istovare umjesto tebe, a ✦ pokazuje što treba provjeriti prije spremanja.',
    bullets: [
      'Klijent, cijena i referenca iz dokumenta',
      'Tereti s LDM-om, kilogramima i paletama',
      'Vlastiti prijevoz ili agencijski, uz RUC i maržu',
    ],
    shot: 'nalog-iz-pdf-a',
  },
  {
    id: 'vozilo',
    anchor: 'vozilo',
    time: '08:25',
    kicker: 'Dodijeli vozilo',
    title: 'Vidiš koje vozilo stiže na utovar',
    text: 'Uz svako vozilo piše gdje će biti na dan utovara i ima li taj dan već istovar. Odabereš vozilo i vozača, a obavijest mu šalješ jednim klikom.',
    bullets: ['Vozila bez preklapanja prva na popisu', 'Ruta vozila odmah uz novi nalog', 'Obavijest ravno u aplikaciju za vozače'],
    shot: 'dodijeli-vozilo',
  },
  {
    id: 'ruta',
    anchor: 'ruta',
    time: '11:00',
    kicker: 'Pregledaj rutu',
    title: 'Ruta svakog vozila na jednom ekranu',
    text: 'Utovari i istovari po danima, tko vozi koji dio rute i što je sljedeće. Promijeni datum, redoslijed ili vozača, a završeno ostaje kako jest.',
    bullets: ['Svaki vozač u svojoj boji', 'Sljedeće mjesto i što kasni, na prvi pogled', 'Obaviješten ili ne, piše uz svaki utovar'],
    shot: 'ruta-vozila',
  },
  {
    id: 'vozac',
    anchor: 'vozac',
    time: '14:30',
    kicker: 'Obavijesti vozača',
    title: 'Vozač potvrdi, ti vidiš odmah',
    text: 'Utovari i istovari stižu vozaču na mobitel. Potvrdi utovar, doda CMR ili fotografiju, a ti to vidiš u nalogu istog trenutka. Bez poziva „gdje si?”.',
    bullets: ['Potvrda utovara i istovara jednim dodirom', 'CMR i fotografije ravno uz nalog', 'Radi na svakom mobitelu, bez instalacije iz trgovine'],
    shot: 'aplikacija-za-vozace',
  },
  {
    id: 'faktura',
    anchor: 'faktura',
    time: '16:00',
    kicker: 'Prati fakture i zaradu',
    title: 'Znaš što je fakturirano, a što kasni',
    text: 'Status fakture na svakom nalogu: nefakturiran, fakturiran, plaćen. Dospjelo neplaćeno vidiš na Početnoj, a agencijski nalozi pokazuju zaradu odmah uz cijenu.',
    bullets: ['Nefakturirani nalozi na jedan klik', 'Dospjelo neplaćeno, crveno tek kad kasni', 'RUC i marža na svakom agencijskom nalogu'],
    shot: 'fakture',
  },
];

/** Everything around the daily path. */
export const more: { id: string; icon: string; title: string; text: string; shot?: string }[] = [
  {
    id: 'flota',
    icon: 'license',
    title: 'Rokovi te upozore 30 dana ranije',
    text: 'Registracije, tahografi, osiguranja, vozačke, KOD 95 i liječnički. Cargo Navis prati rokove i javi se na vrijeme.',
    shot: 'flota-rokovi',
  },
  {
    id: 'analitika',
    icon: 'chart',
    title: 'Koliko zarađuješ, po klijentu, vozaču i vozilu',
    text: 'Prihod, broj naloga i RUC za bilo koje razdoblje, uz usporedbu s prethodnim.',
    shot: 'analitika',
  },
  {
    id: 'pretraga',
    icon: 'search',
    title: 'Pronađi bilo što za sekundu',
    text: 'Pritisni ⌘K i pronađi nalog, vozilo, klijenta ili zaposlenika.',
    shot: 'pretraga',
  },
  {
    id: 'arhiva',
    icon: 'archive',
    title: 'Svi dokumenti uz nalog',
    text: 'Nalozi, CMR-ovi, licence i ugovori uz nalog, vozilo ili zaposlenika. Bez mapa i izgubljenih privitaka.',
  },
  {
    id: 'podvozari',
    icon: 'truck-loading',
    title: 'Podvozari kao i vlastita vozila',
    text: 'Agencijske naloge vodiš na istom mjestu, s cijenom podvozara i maržom.',
  },
  {
    id: 'izgled',
    icon: 'moon',
    title: 'Svijetli ili tamni izgled',
    text: 'Za dispečere koji rade od jutra do mraka.',
  },
];

// Confirmed by the team 2026-11-25 (live site before the redesign, 2026-10-27, showed 18k+ naloga, 25k+ tereta, 350+ vozila;
// numbers only go up, so a tile must never show less than the last published value).
export const stats = [
  { value: '20k+', label: 'naloga' },
  { value: '25k+', label: 'tereta' },
  { value: '500+', label: 'vozila' },
];

export const logos: { src: ImageMetadata; alt: string }[] = [
  { src: garic, alt: 'Garić' },
  { src: sokol, alt: 'Transporti Sokol' },
  { src: vukelja, alt: 'Vukelja Transporti' },
  { src: animago, alt: 'Animago' },
  { src: lust, alt: 'Lust Transporti' },
];

// Customer quotes stay as given (their words, not ours). `highlight` = a verbatim excerpt of the quote, for variants
// that lead with one line; `topic` = what the quote is about, linking it to a part of the product.
export const testimonials = [
  {
    name: 'Transporti Sokol',
    role: 'CEO',
    logo: sokol,
    quote:
      'Softver nam je drastično poboljšao pregled nad flotom i dokumentacijom. Fleet management nam automatski prati isteke registracija i opreme, a sustav nas pravovremeno upozorava i na isteke vozačkih dozvola, KOD 95 i liječničkih pregleda. Uštedjeli smo mnogo vremena i smanjili rizike u svakodnevnom radu.',
    highlight: 'Uštedjeli smo mnogo vremena i smanjili rizike u svakodnevnom radu.',
    topic: { icon: 'license', label: 'Flota i isprave' },
  },
  {
    name: 'Vukelja Transporti',
    role: 'Manager',
    logo: vukelja,
    quote:
      'Softver nam je u potpunosti centralizirao informacije i olakšao vođenje naloga. Naplatu pratimo jednostavno, a sve što nam treba imamo na jednom mjestu.',
    highlight: 'Naplatu pratimo jednostavno, a sve što nam treba imamo na jednom mjestu.',
    topic: { icon: 'invoice', label: 'Nalozi i naplata' },
  },
  {
    name: 'Animago d.o.o.',
    role: 'Disponent',
    logo: animago,
    quote:
      'Aplikacija je jednostavna, intuitivna i olakšava svakodnevne operativne procese. Fleet management posebno nam pomaže pratiti isteke registracija vozila.',
    highlight: 'Aplikacija je jednostavna, intuitivna i olakšava svakodnevne operativne procese.',
    topic: { icon: 'route', label: 'Svakodnevni rad' },
  },
];

export const cta = {
  title: 'Pokaži nam kako radiš danas.',
  text: 'U 30 minuta prođemo tvoj tipičan dan i pokažemo ti kako izgleda u Cargo Navisu. Bez obveze.',
};

export const footer = {
  tagline: 'Softver za prijevoznike: nalozi, vozila, vozači i fakture na jednom mjestu.',
  address: ['Cargo Navis d.o.o.', 'Županjska ulica 21', '10000 Zagreb'],
};

/** Section headings and small UI strings that sit in the shared sections (A2 + demo are bilingual). */
export const ui = {
  navAria: 'Glavna navigacija',
  menuOpen: 'Otvori izbornik',
  menuClose: 'Zatvori izbornik',
  shotCaption: 'Prikaz ekrana aplikacije Cargo Navis s primjerom podataka.',
  day: {
    title: 'Jedan dan u Cargo Navisu',
    sub: 'Pet trenutaka koji ti danas oduzimaju najviše vremena, i kako izgledaju kad su na jednom mjestu.',
    aria: 'Koraci',
  },
  moreTitle: 'A između toga, sve ostalo.',
  quotes: { title: 'Što kažu prijevoznici koji ga koriste', aria: 'Odaberi citat', translated: '', marks: ['„', '”'] },
  ctaCard: {
    facts: ['30 minuta', 'Online ili kod tebe u uredu', 'Bez obveze'],
    primary: 'Odaberi termin',
    login: 'Već koristiš? Prijava',
  },
  footer: {
    product: 'Proizvod',
    users: 'Za korisnike',
    contact: 'Kontakt',
    login: 'Prijava',
    demo: 'Dogovori demo',
    privacy: 'Politika privatnosti',
    privacyHref: '/privacy-policy',
    rights: 'Sva prava pridržana.',
  },
  legal: {
    eyebrow: 'Pravno',
    privacyTitle: 'Politika privatnosti',
    privacyPageTitle: 'Politika privatnosti',
    updated: 'Zadnje ažuriranje',
    dateLocale: 'hr-HR',
    toc: 'Sadržaj',
    // One entry per <h2> in components/legal/PrivacyBodyHr.astro, same order; `id` is the heading's anchor.
    sections: [
      { id: 'uvod', label: 'Uvod' },
      { id: 'voditelj-obrade', label: 'Voditelj obrade' },
      { id: 'pojmovi', label: 'Pojmovi' },
      { id: 'web-stranica', label: 'Web-stranica www.cargo-navis.com' },
      { id: 'aplikacija', label: 'Aplikacija Cargo Navis (app.cargo-navis.com)' },
      { id: 'primatelji', label: 'Ostali primatelji i prijenos izvan EGP-a' },
      { id: 'razdoblje-cuvanja', label: 'Razdoblje čuvanja' },
      { id: 'vasa-prava', label: 'Vaša prava' },
      { id: 'privatnost-djece', label: 'Privatnost djece' },
      { id: 'sigurnost', label: 'Sigurnost' },
      { id: 'izmjene', label: 'Izmjene politike' },
      { id: 'kontakt', label: 'Kontakt' },
    ],
    contactTitle: 'Pitanja o privatnosti?',
    contactText: 'Piši nam na',
  },
};

/** Dogovori demo page. */
export const demo = {
  pageTitle: 'Dogovori demo',
  metaTitle: 'Dogovori demo - Cargo Navis',
  metaDescription:
    'Rezerviraj 30-minutni demo i pogledaj kako Cargo Navis vodi naloge, vozila, vozače i fakture u tvojoj tvrtki.',
  eyebrow: 'Demo',
  title: 'Dogovori demo',
  sub: 'Odaberi termin koji ti odgovara. Prolazimo kroz Cargo Navis uživo, na primjerima iz tvog posla.',
  facts: ['30 minuta', 'Online, s bilo kojeg uređaja', 'Bez obveze'],
  agendaTitle: 'Što prolazimo',
  agenda: [
    {
      title: 'Tvoj dan danas',
      text: 'Ispričaš nam kako sada vodiš naloge, vozila i vozače, i gdje ti odlazi najviše vremena.',
    },
    {
      title: 'Cargo Navis uživo',
      text: 'Pokažemo ti tvoj tipičan nalog: iz PDF-a, preko dodjele vozila i rute, do potvrde vozača u aplikaciji.',
    },
    {
      title: 'Tvoja pitanja',
      text: 'Uvođenje, cijena, prijenos podataka iz Excela ili drugog programa. Pitaj što god te zanima.',
    },
  ],
  noSlot: { title: 'Ne odgovara ti nijedan termin?', text: 'Piši nam i dogovorit ćemo vrijeme koje ti odgovara.' },
  calendar: {
    title: 'Odaberi termin',
    sub: 'Potvrda i poveznica stižu ti na email.',
    iframe: 'Kalendar za dogovaranje demo termina',
  },
  statLabels: ['naloga do sada', 'vozila u sustavu'],
  logoLabel: 'Prijevoznici koji već koriste Cargo Navis',
};

/** Česta pitanja (A2, between the quotes and the CTA). Facts confirmed by the team 2026-11-25. */
export const faq = {
  title: 'Česta pitanja',
  sub: 'Ono što nas prijevoznici najčešće pitaju prije nego što počnu.',
  more: 'Još pitanja?',
  moreText: 'Piši nam na',
  items: [
    {
      q: 'Koliko traje uvođenje?',
      a: 'Možeš početi već sutra. Račun otvaramo odmah, a podatke iz Excela ili programa koji sada koristiš prebacimo do sljedećeg dana.',
    },
    {
      q: 'Kako vozači dobivaju aplikaciju?',
      a: 'Pozivnicu za aplikaciju za vozače napraviš u Cargo Navisu i pošalješ je vozaču. Kad je otvori na mobitelu, odmah vidi svoje utovare i istovare.',
    },
    {
      q: 'Gdje su spremljeni naši podaci?',
      a: 'Podaci aplikacije pohranjeni su na serverima na tlu Europske unije.',
    },
    {
      q: 'Podržavate li agencijski, odnosno spedicijski način rada?',
      a: 'Da. Uz vlastita vozila na istom mjestu vodiš i agencijske naloge: s podvozarom, njegovom cijenom i tvojom maržom.',
    },
  ],
};
