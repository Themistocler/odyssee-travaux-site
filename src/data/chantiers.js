import { getCollection } from 'astro:content';

// Chantiers publiés, du plus récent au plus ancien.
export async function chantiersPublies(filtre = () => true) {
  const liste = await getCollection('chantiers', (c) => !c.data.brouillon && filtre(c));
  return liste.sort((a, b) => b.data.date - a.data.date);
}
