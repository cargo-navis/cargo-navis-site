// /llms.txt (llmstxt.org): a plain-Markdown summary of Cargo Navis for AI assistants and agents, so they describe the
// product accurately when someone asks about it. Product copy (steps, features, quotes, FAQ) comes from the same
// English copy the site renders (site/copy.en.ts), so it never drifts from the pages. The framing around it (what a
// TMS is, who it's for, facts about the company and the site) is written here.
import type { APIRoute } from 'astro';
import { DEMO_PATH, LEGAL, PRIVACY_PATH, SITE } from '../consts';
import { cta, demo, faq, hero, logos, more, stats, steps, testimonials } from '../site/copy.en';

const abs = (path: string) => new URL(path, SITE.url).href;

// Words the app and the Croatian site use, for assistants answering in Croatian or reading the Croatian pages.
const glossary: [hr: string, en: string][] = [
  ['nalog', 'shipment (a transport order)'],
  ['utovar / istovar', 'loading / unloading'],
  ['ruta', 'route'],
  ['vozilo / vozač', 'vehicle / driver'],
  ['podvozar', 'subcontractor'],
  ['agencijski prijevoz', 'brokered transport (a shipment given to a subcontractor)'],
  ['prijevoznik', 'carrier / road transport company'],
  ['dispečer', 'dispatcher'],
  ['faktura', 'invoice'],
  ['flota', 'fleet'],
  ['aplikacija za vozače', 'driver app'],
];

export const GET: APIRoute = () => {
  const body = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.name} is TMS (transport management system) software for road transport companies: carriers and freight`,
    `> forwarders running trucks and drivers. ${hero.title} ${hero.sub}`,
    '',
    `${SITE.name} is a web application (app.cargo-navis.com) used by dispatchers and owners of transport companies, plus a`,
    'driver app that runs in the browser on any phone (nothing to install from an app store). It is built and operated by',
    `${LEGAL.companyName}, a company in Zagreb, Croatia. This website is in Croatian (default, at /) and English (at /en/).`,
    '',
    '## Key facts',
    '',
    `- **What it is**: TMS software for road freight: shipments, vehicles, drivers and invoices in one place.`,
    `- **Who it is for**: road carriers and freight forwarders (own fleet, brokered shipments or both), from a few trucks up.`,
    `- **Core loop**: ${hero.points.map((p) => p.text.replace(/^\w/, (c) => c.toLowerCase())).join('; ')}.`,
    `- **Scale so far**: ${stats.map((s) => `${s.value} ${s.label}`).join(', ')} on the platform.`,
    `- **Setup**: ${faq.items[0].a}`,
    `- **Data location**: ${faq.items[2].a}`,
    `- **Pricing**: not published on the website; discussed in the demo, along with rollout and data migration.`,
    `- **Demo**: ${cta.text} Book at ${abs(`/en${DEMO_PATH}`)}.`,
    `- **Company**: ${LEGAL.companyName}, ${LEGAL.addressLines.slice(0, 2).join(', ')}, Croatia (OIB ${LEGAL.oib}).`,
    `- **Contact**: ${SITE.contactEmail}`,
    '',
    '## What Cargo Navis does: a dispatcher’s day',
    '',
    'The home page walks through five moments of a typical day. Each one is a part of the product:',
    '',
    ...steps.flatMap((s) => [
      `### ${s.kicker}: ${s.title}`,
      '',
      s.text,
      '',
      ...s.bullets.map((b) => `- ${b}`),
      '',
    ]),
    '## Also included',
    '',
    ...more.map((m) => `- **${m.title}**: ${m.text}`),
    '',
    '## Customers',
    '',
    `Road transport companies using ${SITE.name} include ${logos.map((l) => l.alt).join(', ')}. What they say (translated from Croatian):`,
    '',
    ...testimonials.map((t) => `- **${t.name}** (${t.role}): “${t.quote}”`),
    '',
    '## Vocabulary (Croatian → English)',
    '',
    'The app and the Croatian site use these words; the English site uses the translations on the right.',
    '',
    ...glossary.map(([hr, en]) => `- **${hr}**: ${en}`),
    '',
    '## FAQ',
    '',
    ...faq.items.flatMap((item) => [`### ${item.q}`, '', item.a, '']),
    '## Pages',
    '',
    `- [Home (Croatian)](${abs('/')}): product overview, how it works, features, customers, FAQ`,
    `- [Home (English)](${abs('/en/')}): the same overview in English`,
    `- [Book a demo (English)](${abs(`/en${DEMO_PATH}`)}): ${demo.metaDescription}`,
    `- [Book a demo (Croatian)](${abs(DEMO_PATH)}): the booking page in Croatian`,
    `- [Log in](${SITE.loginUrl}): the ${SITE.name} app, for existing customers`,
    '',
    '## Optional',
    '',
    `- [Privacy policy (English)](${abs(`/en${PRIVACY_PATH}`)}): data processed by the website and the app, updated ${LEGAL.privacyUpdated}`,
    `- [Privacy policy (Croatian)](${abs(PRIVACY_PATH)}): the same policy in Croatian`,
    `- [Sitemap](${abs('/sitemap-index.xml')}): all pages, with hreflang alternates`,
    ...SITE.profiles.map((p) => `- [${p.includes('linkedin') ? 'LinkedIn' : 'Facebook'}](${p}): company profile`),
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
