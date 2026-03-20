import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  author: z.string().default('AI Tutorials'),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  // SEO: Short 2-3 sentence answer for AI citation engines + featured snippets
  quickAnswer: z.string().optional(),
  // SEO: FAQ pairs for FAQPage schema + visible FAQ section
  faqs: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })).optional(),
});

const tutorials = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/tutorials' }),
  schema: baseSchema.extend({
    category: z.enum([
      'prompt-engineering',
      'ai-tools',
      'automation',
      'coding-with-ai',
      'ai-agents',
      'machine-learning',
    ]),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    estimatedTime: z.string(),
    prerequisites: z.array(z.string()).default([]),
    tools: z.array(z.string()).default([]),
    learningPath: z.string().optional(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/news' }),
  schema: baseSchema.extend({
    source: z.string().optional(),
    sourceUrl: z.string().url().optional(),
    category: z.enum(['industry', 'research', 'product-launch', 'regulation', 'opinion']),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/blog' }),
  schema: baseSchema.extend({
    category: z.enum(['opinion', 'review', 'guide', 'case-study', 'interview']),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/products' }),
  schema: baseSchema.extend({
    price: z.number(),
    currency: z.string().default('USD'),
    gumroadId: z.string(),
    gumroadUrl: z.string().url(),
    productType: z.enum(['template', 'prompt-pack', 'course', 'ebook', 'tool', 'guide']),
    featured: z.boolean().default(false),
  }),
});

const nonCoder = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/non-coder' }),
  schema: baseSchema.extend({
    category: z.enum(['ai-basics', 'tools-explained', 'coding-literacy', 'practical-skills']),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/resources' }),
  schema: baseSchema.extend({
    resourceType: z.enum(['cheatsheet', 'reference', 'tool-directory', 'template', 'comparison']),
    downloadUrl: z.string().url().optional(),
    externalUrl: z.string().url().optional(),
  }),
});

const challenges = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/challenges' }),
  schema: baseSchema.extend({
    category: z.enum(['build', 'create', 'practical', 'fun']),
    difficulty: z.enum(['beginner', 'intermediate']),
    estimatedTime: z.string(),
    whatYoullBuild: z.string(),
    platforms: z.array(z.string()).default(['ChatGPT', 'Claude', 'Gemini']),
  }),
});

export const collections = { tutorials, news, blog, nonCoder, products, resources, challenges };
