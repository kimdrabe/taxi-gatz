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
    phone: z.string(),
    email: z.string(),
    address: z.string(),
    hours: z.string(),
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
    form_note: z.string(),
  }),
});

const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    order: z.number(),
  }),
});

const reviewsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    text: z.string(),
    rating: z.number(),
    order: z.number(),
  }),
});

export const collections = {
  hero: heroCollection,
  about: aboutCollection,
  contact: contactCollection,
  career: careerCollection,
  services: servicesCollection,
  reviews: reviewsCollection,
};
