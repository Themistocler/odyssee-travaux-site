import { chantiersPublies } from '../data/chantiers.js';
import { prestations } from '../data/entreprise.js';

export async function GET({ site }) {
  const chemins = [
    '/', '/chantiers/', '/professionnels/',
    ...prestations.map((p) => `/${p.slug}/`),
    ...(await chantiersPublies()).map((c) => `/chantiers/${c.id}/`),
  ];
  const urls = chemins.map((c) => `<url><loc>${new URL(c, site).href}</loc></url>`).join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
}
