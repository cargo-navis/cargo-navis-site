// English homepage copy. Adapted rather than word-for-word: same message and
// structure as hr, written to read natively for an international freight
// audience. Client quotes are translated from the Croatian originals — the
// section carries a `testimonials.translated` note saying so.
import type { HomeCopy } from './types';

export const en: HomeCopy = {
  hero: {
    heading: 'Take control of your logistics with Cargo Navis',
    subtitle:
      'Manage vehicles, staff and shipments with ease, all on one powerful platform.',
  },

  about: {
    heading: 'Digitalize your day-to-day freight operations.',
    paragraph:
      'See how freight management software streamlines your logistics processes, improves shipment tracking, and gives you powerful tools to plan, monitor and simplify the movement of goods across your entire supply chain.',
    stats: {
      companies: 'Active companies',
      orders: 'Orders created',
      loads: 'Cargo entries',
      vehicles: 'Vehicles registered',
    },
  },

  features: {
    fleet: {
      title: 'Manage your transport fleet.',
      paragraphs: [
        'Track and manage your entire fleet efficiently from a single platform. Get full visibility over vehicles, documents and critical dates so your operation runs smoothly and reliably.',
      ],
      subBoxes: [
        {
          title: 'Centralized',
          text: 'Track every vehicle, document and deadline in one place for complete operational control.',
        },
        {
          title: 'Proactive',
          text: 'Stay ahead of maintenance, compliance and document renewals with timely alerts that help prevent delays and downtime.',
        },
      ],
    },

    orders: {
      title: 'Full control over every order.',
      paragraphs: [
        'Simplify, optimize and store your orders for better control, accuracy and efficiency.',
      ],
      bullets: [
        'Run a leaner operation with an order database holding the full history of every transport record.',
        'Keep orders accurate and fully under control with regular status updates.',
        'Send orders to drivers and receive loading updates over <strong>WhatsApp</strong>.',
      ],
    },

    alerts: {
      title: 'Never miss an important deadline.',
      paragraphs: [
        'Get timely <strong>alerts</strong> for expiring registrations, service appointments, tachograph checks and other critical dates. The system continuously monitors key deadlines and notifies you by <strong>email</strong>.',
        'Stay compliant and reduce the risk of fines or downtime. Proactive notifications let you plan ahead and keep your fleet running smoothly.',
      ],
    },

    analytics: {
      title: 'Make decisions based on data, not gut feel.',
      paragraphs: [
        'Know at any moment how much you are earning, which clients bring in the most revenue, and where you have room to grow. Our analytics give you the full picture of your business - revenue, order volume, and the performance of your vehicles, drivers and clients.<br><br>Filter by period, driver, vehicle or client and get the exact figures you need in seconds.',
      ],
    },

    archive: {
      title: 'Digital archive -<br>All your key documents in one place.',
      paragraphs: [
        'Forget lost paperwork, email attachments and folders nobody can navigate. With the digital archive all your key documents - orders, licences, contracts and everything else - are securely <strong>stored</strong> <strong>and</strong> <strong>always available</strong>.',
      ],
      bullets: [
        'Simple document upload.',
        'A centralized digital archive with secure storage in one place.',
        'Fast access to documents whenever you need them, without the paper and the clutter.',
      ],
    },
  },

  testimonials: {
    heading: 'What our clients say about working with us',
    cards: {
      sokol: {
        role: 'CEO',
        quote:
          '“The software has dramatically improved our visibility over the fleet and our paperwork. Fleet management automatically tracks registration and equipment expiry, and the system alerts us in good time about driver licences, Code 95 and medical checks. We have saved a lot of time and reduced the risks in our day-to-day work.”',
      },
      vukelja: {
        role: 'Manager',
        quote:
          '“The software has completely centralized our information and made managing orders much easier. Invoicing is simple to track, and everything we need is in one place.”',
      },
      animago: {
        role: 'Dispatcher',
        quote:
          '“The application is simple, intuitive and makes everyday operations easier. Fleet management is especially helpful for tracking vehicle registration expiry.”',
      },
    },
  },

  cta: {
    heading: 'Take control of your business today!',
    paragraph:
      'Try Cargo Navis today and digitalize your operation - without the scattered paperwork.',
  },

  footer: {
    address: 'Županjska ulica 21,<br>10000 Zagreb, Croatia',
  },
};
