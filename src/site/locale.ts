// Site language from the URL (hr at /, en at /en/ — see i18n/utils). Components read their copy with
// getCopy(Astro.url); the app mocks pick their strings with isEn(Astro.url).
import { alternatePath, getLocale, localizePath } from '../i18n/utils';
import type { Locale } from '../i18n/ui';
import * as hr from './copy';
import * as enModule from './copy.en';

// Compile-time check: the English copy has every export the Croatian one has, with the same shape.
const en: typeof hr = enModule;

export const siteLocale = (url: URL): Locale => getLocale(url);
export const isEn = (url: URL) => siteLocale(url) === 'en';
export const getCopy = (url: URL) => (isEn(url) ? en : hr);

/** The same page in the other language (for the HR · EN switch). */
export const otherLocaleHref = (url: URL) => alternatePath(url, isEn(url) ? 'hr' : 'en');

/** Home of the current language (logo link). */
export const homeHref = (url: URL) => localizePath('/', siteLocale(url));
