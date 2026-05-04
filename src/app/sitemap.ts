import type { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';
import { BLOG_POSTS } from '@/lib/blog-data';
import { SITE_CONFIG } from '@/lib/constants';

const staticRoutes = [
  '',
  'mehmet-usta',
  'galeri',
  'yorumlar',
  'blog',
  'iletisim',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const route of staticRoutes) {
    entries.push({
      url: `${SITE_CONFIG.url}/${locales[0]}${route ? `/${route}` : ''}`,
      lastModified: now,
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${SITE_CONFIG.url}/${l}${route ? `/${route}` : ''}`]),
        ),
      },
    });
  }

  for (const post of BLOG_POSTS) {
    entries.push({
      url: `${SITE_CONFIG.url}/${locales[0]}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'yearly',
      priority: 0.6,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${SITE_CONFIG.url}/${l}/blog/${post.slug}`]),
        ),
      },
    });
  }

  return entries;
}
