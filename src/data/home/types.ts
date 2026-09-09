// Shape of the translatable homepage copy. The structural spine (images, ids,
// layout flags, stat values) lives in ./index.ts and is shared across locales,
// so hr and en can never drift in row count, order or image assignment.
export type FeatureId = 'fleet' | 'orders' | 'alerts' | 'analytics' | 'archive';
export type StatId = 'companies' | 'orders' | 'loads' | 'vehicles';
export type TestimonialId = 'sokol' | 'vukelja' | 'animago';

export interface FeatureCopy {
  title: string; // may contain <br>
  paragraphs: string[]; // may contain <strong>/<br>
  bullets?: string[]; // may contain <strong>
  subBoxes?: { title: string; text: string }[];
}

export interface HomeCopy {
  hero: { heading: string; subtitle: string };
  about: {
    heading: string;
    paragraph: string;
    stats: Record<StatId, string>;
  };
  features: Record<FeatureId, FeatureCopy>;
  testimonials: {
    heading: string;
    cards: Record<TestimonialId, { role: string; quote: string }>;
  };
  cta: { heading: string; paragraph: string };
  footer: { address: string }; // may contain <br>
}
