// Service providers named in the privacy policy. Company names stay as
// registered; location and purpose are translated per locale.
import type { Locale } from '../i18n/ui';

export interface Recipient {
  name: string;
  location: Record<Locale, string>;
  purpose: Record<Locale, string>;
}

export const recipients: Recipient[] = [
  {
    name: 'Vercel Inc.',
    location: { hr: 'EU / SAD', en: 'EU / US' },
    purpose: {
      hr: 'Hosting i isporuka web-stranice i aplikacije app.cargo-navis.com; obrada tehničkih zapisa poslužitelja (IP adresa, vrsta preglednika).',
      en: 'Hosting and delivery of the website and the app.cargo-navis.com application; processing of technical server logs (IP address, browser type).',
    },
  },
  {
    name: 'Hetzner Online GmbH',
    location: { hr: 'Njemačka (EU)', en: 'Germany (EU)' },
    purpose: {
      hr: 'Hosting baze podataka aplikacije - pohrana podataka o korisnicima, nalozima, vozilima i dokumentaciji.',
      en: 'Application database hosting - storage of user, order, vehicle and document data.',
    },
  },
  {
    name: 'Resend, Inc.',
    location: { hr: 'SAD', en: 'US' },
    purpose: {
      hr: 'Slanje transakcijskih i obavijesnih e-poruka (upozorenja o rokovima, obavijesti o računu) - e-mail adresa i sadržaj poruke.',
      en: 'Sending transactional and notification emails (deadline alerts, account notices) - email address and message content.',
    },
  },
  {
    name: 'Infobip d.o.o.',
    location: { hr: 'Hrvatska (EU)', en: 'Croatia (EU)' },
    purpose: {
      hr: 'Slanje naloga vozačima i zaprimanje informacija o utovaru putem WhatsAppa - broj telefona i sadržaj poruke.',
      en: 'Sending orders to drivers and receiving loading information over WhatsApp - phone number and message content.',
    },
  },
  {
    name: 'WhatsApp Ireland Ltd. (Meta)',
    location: { hr: 'Irska (EU) / SAD', en: 'Ireland (EU) / US' },
    purpose: {
      hr: 'Isporuka poruka vozačima putem WhatsApp Business platforme - broj telefona i sadržaj poruke.',
      en: 'Delivery of messages to drivers over the WhatsApp Business platform - phone number and message content.',
    },
  },
  {
    name: 'Google Ireland Ltd. (Google Calendar)',
    location: { hr: 'EU / SAD', en: 'EU / US' },
    purpose: {
      hr: 'Zaprimanje rezervacija demo termina putem Google Calendar Appointment Schedules - ime, e-mail adresa i podaci koje unesete pri rezervaciji.',
      en: 'Receiving demo bookings through Google Calendar Appointment Schedules - name, email address and any details you enter when booking.',
    },
  },
];
