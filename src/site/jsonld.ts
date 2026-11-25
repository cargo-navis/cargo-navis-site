// Structured data for the home page, built from the same copy the page renders (so it never drifts from it):
// SoftwareApplication (what Cargo Navis is) and FAQPage (the Česta pitanja section). The Organization block is
// emitted by layouts/Layout.astro on every page.
import { META, SITE } from '../consts';
import { getCopy, siteLocale } from './locale';

export const homeJsonLd = (url: URL): Record<string, unknown>[] => {
  const locale = siteLocale(url);
  const { faq } = getCopy(url);
  const home = new URL(locale === 'hr' ? '/' : '/en/', SITE.url).href;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: SITE.name,
      url: home,
      description: META[locale].description,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      inLanguage: locale === 'hr' ? 'hr-HR' : 'en',
      publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: locale === 'hr' ? 'hr-HR' : 'en',
      mainEntity: faq.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ];
};
