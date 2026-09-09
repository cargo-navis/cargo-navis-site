// UI string dictionaries. hr = default. Keep keys flat + dotted for grouping.
// English fills in over time; missing en keys fall back to hr.

export const locales = ['hr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'hr';

export const ui = {
  hr: {
    'nav.home': 'Početna',
    'nav.about': 'O nama',
    'nav.features': 'Značajke',
    'nav.reviews': 'Recenzije',
    'nav.contact': 'Kontakt',
    'nav.login': 'Prijava',
    'nav.aria.main': 'Glavna navigacija',
    'nav.aria.mobile': 'Mobilna navigacija',
    'nav.aria.toggle': 'Otvori izbornik',
    'cta.book': 'Dogovori sastanak',
    'cta.demo': 'Dogovori demo',
    'cta.contact': 'Kontaktiraj nas',
    'footer.tagline':
      'Moderan alat za učinkovito upravljanje svim operacijama u transportnom poslovanju.',
    'footer.menu.company': 'Kompanija',
    'footer.menu.legal': 'Pravno',
    'footer.contact': 'Kontakt',
    'footer.privacy': 'Politika privatnosti',
    'footer.rights': 'Sva prava pridržana.',
    'contact.name': 'Ime',
    'contact.email': 'Email',
    'contact.message': 'Poruka',
    'contact.send': 'Pošalji',
    'contact.success': 'Poruka poslana. Javljamo se uskoro.',
    'contact.error': 'Slanje nije uspjelo. Pokušajte ponovno.',
    'booking.iframe.title': 'Kalendar za dogovaranje demo termina',
    'lang.switch': 'Jezik',
    'lang.hr': 'HR',
    'lang.en': 'EN',
    'about.video.play': 'Pokreni video',
    'video.close': 'Zatvori video',
    'testimonials.translated': 'Recenzije su izvorno napisane na hrvatskom jeziku.',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.features': 'Features',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact',
    'nav.login': 'Log in',
    'nav.aria.main': 'Main navigation',
    'nav.aria.mobile': 'Mobile navigation',
    'nav.aria.toggle': 'Open menu',
    'cta.book': 'Book a meeting',
    'cta.demo': 'Book a demo',
    'cta.contact': 'Contact us',
    'footer.tagline':
      'A modern tool for running every part of your transport operation efficiently.',
    'footer.menu.company': 'Company',
    'footer.menu.legal': 'Legal',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.rights': 'All rights reserved.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.success': 'Message sent. We’ll be in touch soon.',
    'contact.error': 'Sending failed. Please try again.',
    'booking.iframe.title': 'Demo booking calendar',
    'lang.switch': 'Language',
    'lang.hr': 'HR',
    'lang.en': 'EN',
    'about.video.play': 'Play video',
    'video.close': 'Close video',
    'testimonials.translated': 'Reviews were originally written in Croatian.',
  },
} as const;

export type UIKey = keyof (typeof ui)['hr'];
