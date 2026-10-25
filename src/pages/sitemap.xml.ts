import type { APIRoute } from 'astro';
import { topics } from '../data/note-topics';

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error('Configure the public site URL before building the sitemap.');
  // Match the filename-based public URLs used by notes/[slug].astro.
  const notes = Object.keys(import.meta.glob('../content/notes/*.md'))
    .map(path => '/notes/' + encodeURIComponent(path.split('/').pop()!.replace(/\.md$/, '')) + '/')
    .sort();
  const paths = ['/', '/research/', '/publications/', '/notes/', '/about/',
    ...topics.map(topic => `/notes/topics/${topic.slug}/`), ...notes];
  const escapeXML = (value: string) => value.replace(/[<>&"']/g, char =>
    ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' }[char]!));
  const urls = [...new Set(paths)].map(path =>
    `  <url><loc>${escapeXML(new URL(path, site).href)}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
