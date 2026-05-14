import { defineCollection, z } from 'astro:content';

const heroCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    availability: z.string(),
    cta_primary: z.string(),
    cta_secondary: z.string(),
    phone: z.string(),
    highlight_word: z.string(),
    badges: z.array(z.object({
      text: z.string(),
      icon: z.string(),
    })),
  }),
});

const aboutCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    milestones: z.array(z.object({
      year: z.string(),
      text: z.string(),
    })),
  }),
});

const contactCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    form_heading: z.string(),
  }),
});

const careerCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    job_title: z.string(),
    benefits: z.array(z.string()),
    requirements: z.array(z.string()),
    form_title: z.string(),
  }),
});

export const collections = {
  hero: heroCollection,
  about: aboutCollection,
  contact: contactCollection,
  career: careerCollection,
};
