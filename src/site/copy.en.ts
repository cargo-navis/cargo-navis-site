// English twin of copy.ts (same exports, same shape — locale.ts checks it). Plain, direct „you”. App words: shipment
// (nalog), loading / unloading (utovar / istovar), route (ruta), subcontractor (podvozar), brokered (agencijski),
// driver app. Customer quotes are translations, marked „Translated from Croatian.” under the quotes.
import { logos, LOGIN_HREF, EMAIL } from './copy';
import sokol from '../assets/logos/transporti-sokol.webp';
import vukelja from '../assets/logos/vukelja-transporti.webp';
import animago from '../assets/logos/animago.webp';
import type { StepId } from './copy';

export { logos, LOGIN_HREF, EMAIL };
export const DEMO_HREF: string = '/en/demo';

export const anchors = {
  howItWorks: 'how-it-works',
  features: 'features',
  customers: 'customers',
  faq: 'faq',
  contact: 'contact',
};

export const nav = [
  { label: 'How it works', href: `/en/#${anchors.howItWorks}` },
  { label: 'Features', href: `/en/#${anchors.features}` },
  { label: 'Customers', href: `/en/#${anchors.customers}` },
  { label: 'Contact', href: `/en/#${anchors.contact}` },
];

export const hero = {
  eyebrow: 'TMS Software',
  title: 'Shipments, vehicles and drivers in one place.',
  sub: 'A shipment from a PDF in a minute, every vehicle’s route on one screen, and drivers confirm loading and unloading in the app. You see everything, right away.',
  points: [
    { icon: 'mail', text: 'Shipments from email or PDF in a minute' },
    { icon: 'route', text: 'Every vehicle’s route, loadings and unloadings in one place' },
    { icon: 'phone', text: 'Drivers confirm in the app, you see it right away' },
  ],
  primary: 'Book a demo',
  secondary: 'Log in',
};

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
    anchor: 'shipment',
    time: '08:10',
    kicker: 'Add a shipment',
    title: 'A shipment from a PDF in a minute',
    text: 'Drag in the shipment PDF, forward it by email or add it by hand. From a PDF or email we fill in the client, cargo, loadings and unloadings for you, and ✦ shows what to check before saving.',
    bullets: [
      'Client, price and reference from the document',
      'Cargo with LDM, kilograms and pallets',
      'Own transport or brokered, with your margin',
    ],
    shot: 'nalog-iz-pdf-a',
  },
  {
    id: 'vozilo',
    anchor: 'vehicle',
    time: '08:25',
    kicker: 'Assign a vehicle',
    title: 'See which vehicle can make the loading',
    text: 'Next to each vehicle you see where it will be on the loading day and whether it already has an unloading that day. Pick the vehicle and the driver, and notify the driver with one click.',
    bullets: [
      'Vehicles without clashes listed first',
      'The vehicle’s route right next to the new shipment',
      'The notification goes straight to the driver app',
    ],
    shot: 'dodijeli-vozilo',
  },
  {
    id: 'ruta',
    anchor: 'route',
    time: '11:00',
    kicker: 'View the route',
    title: 'Every vehicle’s route on one screen',
    text: 'Loadings and unloadings by day, who drives which part of the route and what’s next. Change the date, the order of stops or the driver, and finished stops stay as they are.',
    bullets: [
      'Each driver in their own colour',
      'The next stop and what’s late, at a glance',
      'Notified or not, shown on every loading',
    ],
    shot: 'ruta-vozila',
  },
  {
    id: 'vozac',
    anchor: 'driver',
    time: '14:30',
    kicker: 'Notify the driver',
    title: 'The driver confirms, you see it right away',
    text: 'Loadings and unloadings arrive on the driver’s phone. They confirm the loading, add a CMR or a photo, and you see it on the shipment instantly. No more “where are you?” calls.',
    bullets: [
      'Confirm loading and unloading with one tap',
      'CMRs and photos go straight to the shipment',
      'Works on any phone, nothing to install from a store',
    ],
    shot: 'aplikacija-za-vozace',
  },
  {
    id: 'faktura',
    anchor: 'invoice',
    time: '16:00',
    kicker: 'Track invoices and earnings',
    title: 'Know what’s invoiced and what’s overdue',
    text: 'Invoice status on every shipment: not invoiced, invoiced, paid. Overdue payments show on the Home screen, and brokered shipments show your earnings right next to the price.',
    bullets: [
      'Uninvoiced shipments in one click',
      'Overdue and unpaid, red only once it’s late',
      'The margin on every brokered shipment',
    ],
    shot: 'fakture',
  },
];

export const more: { id: string; icon: string; title: string; text: string; shot?: string }[] = [
  {
    id: 'flota',
    icon: 'license',
    title: 'Deadlines warn you 30 days ahead',
    text: 'Registrations, tachographs, insurance, driving licences, Code 95 and medicals. Cargo Navis tracks the deadlines and reminds you in time.',
    shot: 'flota-rokovi',
  },
  {
    id: 'analitika',
    icon: 'chart',
    title: 'What you earn, per client, driver and vehicle',
    text: 'Revenue, number of shipments and margin for any period, compared with the previous one.',
    shot: 'analitika',
  },
  {
    id: 'pretraga',
    icon: 'search',
    title: 'Find anything in a second',
    text: 'Press ⌘K and find a shipment, vehicle, client or employee.',
    shot: 'pretraga',
  },
  {
    id: 'arhiva',
    icon: 'archive',
    title: 'Every document with its shipment',
    text: 'Shipments, CMRs, licences and contracts with the shipment, vehicle or employee. No folders, no lost attachments.',
  },
  {
    id: 'podvozari',
    icon: 'truck-loading',
    title: 'Subcontractors, just like your own vehicles',
    text: 'Run brokered shipments in the same place, with the subcontractor’s price and your margin.',
  },
  {
    id: 'izgled',
    icon: 'moon',
    title: 'Light or dark mode',
    text: 'For dispatchers who work from morning till night.',
  },
];

export const stats = [
  { value: '20k+', label: 'shipments' },
  { value: '25k+', label: 'loads' },
  { value: '500+', label: 'vehicles' },
];

export const testimonials = [
  {
    name: 'Transporti Sokol',
    role: 'CEO',
    logo: sokol,
    quote:
      'The software has drastically improved our overview of the fleet and the paperwork. Fleet management automatically tracks registration and equipment expiry dates, and the system warns us in time when driving licences, Code 95 and medical check-ups are about to expire. We’ve saved a lot of time and reduced risk in our day-to-day work.',
    highlight: 'We’ve saved a lot of time and reduced risk in our day-to-day work.',
    topic: { icon: 'license', label: 'Fleet and documents' },
  },
  {
    name: 'Vukelja Transporti',
    role: 'Manager',
    logo: vukelja,
    quote:
      'The software has fully centralised our information and made managing shipments easier. We track payments easily, and everything we need is in one place.',
    highlight: 'We track payments easily, and everything we need is in one place.',
    topic: { icon: 'invoice', label: 'Shipments and payments' },
  },
  {
    name: 'Animago d.o.o.',
    role: 'Dispatcher',
    logo: animago,
    quote:
      'The app is simple, intuitive and makes everyday operations easier. Fleet management especially helps us keep track of vehicle registration expiry dates.',
    highlight: 'The app is simple, intuitive and makes everyday operations easier.',
    topic: { icon: 'route', label: 'Day-to-day work' },
  },
];

export const cta = {
  title: 'Show us how you work today.',
  text: 'In 30 minutes we walk through your typical day and show you how it looks in Cargo Navis. No commitment.',
};

export const footer = {
  tagline: 'TMS software: shipments, vehicles, drivers and invoices in one place.',
  address: ['Cargo Navis d.o.o.', 'Županjska ulica 21', '10000 Zagreb, Croatia'],
};

export const ui = {
  navAria: 'Main navigation',
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
  shotCaption: 'A screen from the Cargo Navis app, with sample data.',
  day: {
    title: 'A day in Cargo Navis',
    sub: 'Five moments that take up most of your time today, and how they look in one place.',
    aria: 'Steps',
  },
  moreTitle: 'And everything in between.',
  quotes: { title: 'What our clients say', aria: 'Choose a quote', translated: 'Translated from Croatian.', marks: ['“', '”'] },
  ctaCard: {
    facts: ['30 minutes', 'Online or at your office', 'No commitment'],
    primary: 'Pick a time',
    login: 'Already a customer? Log in',
  },
  footer: {
    product: 'Product',
    users: 'For customers',
    contact: 'Contact',
    login: 'Log in',
    demo: 'Book a demo',
    privacy: 'Privacy policy',
    privacyHref: '/en/privacy-policy',
    rights: 'All rights reserved.',
  },
  legal: {
    eyebrow: 'Legal',
    privacyTitle: 'Privacy policy',
    privacyPageTitle: 'Privacy policy',
    updated: 'Last updated',
    dateLocale: 'en-GB',
    toc: 'Contents',
    // One entry per <h2> in components/legal/PrivacyBodyEn.astro, same order; `id` is the heading's anchor.
    sections: [
      { id: 'introduction', label: 'Introduction' },
      { id: 'data-controller', label: 'Data controller' },
      { id: 'definitions', label: 'Definitions' },
      { id: 'website', label: 'The website www.cargo-navis.com' },
      { id: 'application', label: 'The Cargo Navis application (app.cargo-navis.com)' },
      { id: 'recipients', label: 'Other recipients and transfers outside the EEA' },
      { id: 'retention', label: 'Retention' },
      { id: 'your-rights', label: 'Your rights' },
      { id: 'children', label: 'Children’s privacy' },
      { id: 'security', label: 'Security' },
      { id: 'changes', label: 'Changes to this policy' },
      { id: 'contact', label: 'Contact' },
    ],
    contactTitle: 'Questions about privacy?',
    contactText: 'Email us at',
  },
};

export const demo = {
  pageTitle: 'Book a demo',
  metaTitle: 'Book a demo - Cargo Navis',
  metaDescription:
    'Book a 30-minute demo and see how Cargo Navis runs shipments, vehicles, drivers and invoices for your transport business.',
  eyebrow: 'Demo',
  title: 'Book a demo',
  sub: 'Pick a time that suits you. We go through Cargo Navis live, with examples from your own business.',
  facts: ['30 minutes', 'Online, from any device', 'No commitment'],
  agendaTitle: 'What we cover',
  agenda: [
    {
      title: 'Your day today',
      text: 'You tell us how you run shipments, vehicles and drivers now, and where most of your time goes.',
    },
    {
      title: 'Cargo Navis, live',
      text: 'We show you one of your typical shipments: from a PDF, through assigning a vehicle and the route, to the driver confirming in the app.',
    },
    {
      title: 'Your questions',
      text: 'Rollout, pricing, moving your data over from Excel or another system. Ask anything.',
    },
  ],
  noSlot: { title: 'None of the times work?', text: 'Email us and we’ll find a time that suits you.' },
  calendar: {
    title: 'Pick a time',
    sub: 'The confirmation and the link arrive by email.',
    iframe: 'Demo booking calendar',
  },
  statLabels: ['shipments so far', 'vehicles on the platform'],
  logoLabel: 'Transport companies already using Cargo Navis',
};

export const faq = {
  title: 'Frequently asked questions',
  sub: 'What transport companies most often ask us before they start.',
  more: 'More questions?',
  moreText: 'Email us at',
  items: [
    {
      q: 'How long does setup take?',
      a: 'You can start tomorrow. We open your account right away and move your data over from Excel or the software you use now by the next day.',
    },
    {
      q: 'How do drivers get the app?',
      a: 'You create an invite to the driver app in Cargo Navis and send it to the driver. Once they open it on their phone, they see their loadings and unloadings right away.',
    },
    {
      q: 'Where is our data stored?',
      a: 'App data is stored on servers on EU soil.',
    },
    {
      q: 'Do you support brokered and freight forwarding work?',
      a: 'Yes. Alongside your own vehicles, you run brokered shipments in the same place: with the subcontractor, their price and your margin.',
    },
  ],
};
