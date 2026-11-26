// Site locales. hr = default (served at /), en at /en/. Page copy lives in src/site/copy.ts and copy.en.ts.

export const locales = ['hr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'hr';
