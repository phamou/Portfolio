import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    company: z.string().optional(),
    role: z.string().optional(),
    tags: z.array(z.string()).default([]),
    impact: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

const athlete = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/athlete' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.enum(['training', 'race', 'reflection']),
    takeaway: z.string(),
    highlights: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

const kitchen = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/kitchen' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['coffee', 'tea', 'matcha', 'hojicha', 'cocktail']),
    oneLiner: z.string(),
    story: z.string(),
    notes: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    kind: z.enum(['featured', 'foundational']),
    href: z.string().url(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

export const collections = { work, athlete, kitchen, projects };

