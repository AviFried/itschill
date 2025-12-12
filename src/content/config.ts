import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.date(),
        image: z.string().optional(),
        video: z.string().optional(),
    }),
});

export const collections = { posts };
