// UI string dictionaries. hr = default. Keep keys flat + dotted for grouping.
// English fills in over time; missing en keys fall back to hr.

export const locales = ['hr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'hr';

export const ui = {
  hr: {
    'nav.about': 'O nama',
    'nav.features': 'Značajke',
    'nav.reviews': 'Recenzije',
    'nav.contact': 'Kontakt',
    'nav.login': 'Prijava',
    'cta.book': 'Dogovori sastanak',
    'cta.contact': 'Kontaktiraj nas',
    'footer.rights': 'Sva prava pridržana.',
    'contact.name': 'Ime',
    'contact.email': 'Email',
    'contact.message': 'Poruka',
    'contact.send': 'Pošalji',
    'contact.success': 'Poruka poslana. Javljamo se uskoro.',
    'contact.error': 'Slanje nije uspjelo. Pokušajte ponovno.',
  },
  en: {
    'nav.about': 'About',
    'nav.features': 'Features',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact',
    'nav.login': 'Log in',
    'cta.book': 'Book a meeting',
    'cta.contact': 'Contact us',
    'footer.rights': 'All rights reserved.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.success': 'Message sent. We’ll be in touch soon.',
    'contact.error': 'Sending failed. Please try again.',
  },
} as const;

export type UIKey = keyof (typeof ui)['hr'];
