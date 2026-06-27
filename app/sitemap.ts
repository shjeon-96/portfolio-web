import type { MetadataRoute } from 'next';
import { PORTFOLIO_SITE_URL } from '@/lib/site-links';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '',
    '/evidence',
    '/changelog',
    '/ai-workflow',
    '/skills',
    '/about',
    '/en',
    '/en/evidence',
    '/en/changelog',
    '/en/ai-workflow',
    '/en/skills',
    '/en/about',
  ].map((route) => ({
    url: `${PORTFOLIO_SITE_URL}${route}`,
    lastModified: new Date(),
  }));
}
