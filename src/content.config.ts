import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Locale is encoded in the folder: src/content/<collection>/<locale>/<slug>.mdx
// e.g. src/content/features/hr/nalozi.mdx  ->  id "hr/nalozi"
// Filter with getCollection('features', ({ id }) => id.startsWith('hr/')).

const changelog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/changelog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    version: z.string().optional(),
    category: z.enum(['feature', 'fix', 'improvement']).optional(),
    draft: z.boolean().default(false),
  }),
});

const roadmap = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/roadmap' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['planned', 'in-progress', 'shipped']),
    quarter: z.string().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const features = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/features' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      icon: z.string().optional(),
      heroImage: image().optional(),
      order: z.number().default(0),
      draft: z.boolean().default(false),
    }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/testimonials' }),
  schema: ({ image }) =>
    z.object({
      author: z.string(),
      company: z.string(),
      role: z.string().optional(),
      quote: z.string(),
      logo: image().optional(),
      order: z.number().default(0),
    }),
});

export const collections = { changelog, roadmap, features, testimonials };
