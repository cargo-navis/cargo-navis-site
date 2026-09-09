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

// Drop any locale prefix from a pathname, yielding the locale-agnostic path.
// `/en/demo` -> `/demo`, `/en` -> `/`, `/demo` -> `/demo`.
export function stripLocale(pathname: string): string {
  const stripped = pathname.replace(new RegExp(`^/(${locales.join('|')})(?=/|$)`), '');
  return stripped === '' ? '/' : stripped;
}

// The current page in another locale — what the language switcher links to.
export function alternatePath(url: URL, locale: Locale): string {
  return localizePath(stripLocale(url.pathname), locale);
}
