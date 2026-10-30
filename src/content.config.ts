import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { prestations } from './data/entreprise.js';

// Un chantier = un dossier src/content/chantiers/<nom>/ avec index.md et ses photos.
const chantiers = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/chantiers' }),
  schema: ({ image }) => z.object({
    titre: z.string(),
    ville: z.string(),
    date: z.coerce.date(),
    prestation: z.enum(prestations.map((p) => p.slug)),
    resume: z.string().max(200),
    photos: z.array(z.object({
      src: image(),
      legende: z.string(),
      moment: z.enum(['avant', 'pendant', 'apres']).optional(),
    })).default([]),
    brouillon: z.boolean().default(false),
  }),
});

export const collections = { chantiers };
