import { ui, defaultLocale, locales, type Locale, type UIKey } from './ui';

// Read the active locale from a URL. hr lives at `/`, en at `/en/`.
export function getLocale(url: URL): Locale {
  const [, seg] = url.pathname.split('/');
  return (locales as readonly string[]).includes(seg) ? (seg as Locale) : defaultLocale;
}

// Translator bound to a locale. Falls back to hr when an en key is missing.
export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale][key] ?? ui[defaultLocale][key];
  };
}

// Build a locale-aware href. hr keeps bare paths, en is prefixed with /en.
export function localizePath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return locale === defaultLocale ? clean : `/${locale}${clean === '/' ? '' : clean}`;
}
