// Service providers named in the privacy policy, grouped by where they are used: `web` = this website
// (www.cargo-navis.com), `app` = the Cargo Navis application (app.cargo-navis.com). Company names stay as
// registered; location and purpose are translated per locale.
import type { Locale } from '../i18n/ui';

export interface Recipient {
  scope: 'web' | 'app';
  name: string;
  location: Record<Locale, string>;
  purpose: Record<Locale, string>;
}

export const recipients: Recipient[] = [
  // --- Website ---------------------------------------------------------------
  {
    scope: 'web',
    name: 'Vercel Inc.',
    location: { hr: 'EU / SAD', en: 'EU / US' },
    purpose: {
      hr: 'Hosting i isporuka web-stranice; obrada tehničkih zapisa poslužitelja (IP adresa, vrsta preglednika).',
      en: 'Hosting and delivery of the website; processing of technical server logs (IP address, browser type).',
    },
  },
  {
    scope: 'web',
    name: 'Google Ireland Ltd. (Google Calendar)',
    location: { hr: 'EU / SAD', en: 'EU / US' },
    purpose: {
      hr: 'Zaprimanje rezervacija demo termina putem Google Calendar Appointment Schedules - ime, e-mail adresa i podaci koje unesete pri rezervaciji.',
      en: 'Receiving demo bookings through Google Calendar Appointment Schedules - name, email address and any details you enter when booking.',
    },
  },

  {
    scope: 'web',
    name: 'PostHog Inc. (PostHog EU Cloud)',
    location: { hr: 'Njemačka (EU)', en: 'Germany (EU)' },
    purpose: {
      hr: 'Analitika posjećenosti web-stranice bez kolačića - pregledane stranice i vrijeme zadržavanja, izvor posjeta, vrsta uređaja i preglednika te približna lokacija iz IP adrese, bez snimanja sesija.',
      en: 'Cookieless website visitor analytics - pages viewed and time on page, referral source, device and browser type, and approximate location from the IP address, without session recording.',
    },
  },

  // --- Application -----------------------------------------------------------
  {
    scope: 'app',
    name: 'Vercel Inc.',
    location: { hr: 'EU / SAD', en: 'EU / US' },
    purpose: {
      hr: 'Hosting i isporuka aplikacije app.cargo-navis.com; obrada tehničkih zapisa poslužitelja (IP adresa, vrsta preglednika).',
      en: 'Hosting and delivery of the app.cargo-navis.com application; processing of technical server logs (IP address, browser type).',
    },
  },
  {
    scope: 'app',
    name: 'Hetzner Online GmbH',
    location: { hr: 'Njemačka (EU)', en: 'Germany (EU)' },
    purpose: {
      hr: 'Hosting baze podataka aplikacije - pohrana podataka o korisnicima, nalozima, vozilima i dokumentaciji.',
      en: 'Application database hosting - storage of user, shipment, vehicle and document data.',
    },
  },
  {
    scope: 'app',
    name: 'Resend, Inc.',
    location: { hr: 'SAD', en: 'US' },
    purpose: {
      hr: 'Slanje transakcijskih i obavijesnih e-poruka (upozorenja o rokovima, obavijesti o računu) - e-mail adresa i sadržaj poruke.',
      en: 'Sending transactional and notification emails (deadline alerts, account notices) - email address and message content.',
    },
  },
  {
    scope: 'app',
    name: 'Infobip d.o.o.',
    location: { hr: 'Hrvatska (EU)', en: 'Croatia (EU)' },
    purpose: {
      hr: 'Slanje naloga vozačima i zaprimanje informacija o utovaru putem WhatsAppa - broj telefona i sadržaj poruke.',
      en: 'Sending shipments to drivers and receiving loading information over WhatsApp - phone number and message content.',
    },
  },
  {
    scope: 'app',
    name: 'WhatsApp Ireland Ltd. (Meta)',
    location: { hr: 'Irska (EU) / SAD', en: 'Ireland (EU) / US' },
    purpose: {
      hr: 'Isporuka poruka vozačima putem WhatsApp Business platforme - broj telefona i sadržaj poruke.',
      en: 'Delivery of messages to drivers over the WhatsApp Business platform - phone number and message content.',
    },
  },
  {
    scope: 'app',
    name: 'PostHog Inc. (PostHog EU Cloud)',
    location: { hr: 'Njemačka (EU)', en: 'Germany (EU)' },
    purpose: {
      hr: 'Analitika korištenja aplikacije - ime i prezime, e-mail adresa, uloga i tvrtka korisnika te pregledane stranice, klikovi i radnje u aplikaciji, bez unesenog sadržaja i bez snimanja sesija.',
      en: 'Application usage analytics - the user’s name, email address, role and company, plus pages viewed, clicks and actions in the app, without entered content and without session recording.',
    },
  },
];

export const webRecipients = recipients.filter((r) => r.scope === 'web');
export const appRecipients = recipients.filter((r) => r.scope === 'app');
