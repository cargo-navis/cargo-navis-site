// Copy for the /demo booking page. Unlike data/home.ts this is locale-keyed —
// the page ships in both hr and en from day one.
import type { Locale } from '../i18n/ui';

export interface DemoCopy {
  metaTitle: string;
  metaDescription: string;
  heading: string;
  subtitle: string;
  bullets: string[];
  asideTitle: string;
  asideText: string;
  contactLabel: string;
}

export const demo: Record<Locale, DemoCopy> = {
  hr: {
    metaTitle: 'Dogovori demo - Cargo Navis',
    metaDescription:
      'Rezervirajte 30-minutni demo termin i saznajte kako Cargo Navis digitalizira upravljanje flotom, nalozima i dokumentacijom u vašoj tvrtki.',
    heading: 'Dogovorite demo termin',
    subtitle:
      'Odaberite termin koji vam odgovara. Prolazimo kroz Cargo Navis uživo, na primjerima iz vašeg poslovanja - bez obveze.',
    bullets: [
      'Pregled kako Cargo Navis radi u praksi.',
      'Razgovor o vašim nalozima, floti i dokumentaciji.',
      'Odgovori na pitanja o uvođenju, cijeni i migraciji podataka.',
    ],
    asideTitle: 'Ne odgovara vam nijedan termin?',
    asideText: 'Javite nam se e-mailom i dogovorit ćemo termin koji vam odgovara.',
    contactLabel: 'Pošaljite upit',
  },
  en: {
    metaTitle: 'Book a demo - Cargo Navis',
    metaDescription:
      'Book a 30-minute demo and see how Cargo Navis digitalizes fleet, order and document management for your transport business.',
    heading: 'Book a demo',
    subtitle:
      'Pick a slot that works for you. We walk through Cargo Navis live, against your own operation - no commitment.',
    bullets: [
      'See how Cargo Navis works in practice.',
      'Talk through your orders, fleet and paperwork.',
      'Get answers on rollout, pricing and data migration.',
    ],
    asideTitle: 'None of the slots work?',
    asideText: 'Email us and we will arrange a time that suits you.',
    contactLabel: 'Send an inquiry',
  },
};
