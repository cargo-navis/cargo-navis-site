// Structured data for the home page, built from the same copy the page renders (so it never drifts from it):
// WebSite (the site name Google shows in results), SoftwareApplication (what Cargo Navis is) and FAQPage (the Česta
// pitanja section). The Organization block (with `@id` ORG_ID) is emitted by layouts/Layout.astro on every page; the
// blocks here refer to it by that id.
import { META, ORG_ID, SITE, WEBSITE_ID } from '../consts';
import { getCopy, siteLocale } from './locale';

export const homeJsonLd = (url: URL): Record<string, unknown>[] => {
  const locale = siteLocale(url);
  const { faq } = getCopy(url);
  const home = new URL(locale === 'hr' ? '/' : '/en/', SITE.url).href;
  const inLanguage = locale === 'hr' ? 'hr-HR' : 'en';
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      name: SITE.name,
      alternateName: 'CargoNavis',
      url: new URL('/', SITE.url).href,
      inLanguage: ['hr-HR', 'en'],
      publisher: { '@id': ORG_ID },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: SITE.name,
      url: home,
      description: META[locale].description,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      inLanguage,
      publisher: { '@id': ORG_ID },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage,
      mainEntity: faq.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ];
};
