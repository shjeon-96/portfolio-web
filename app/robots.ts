import type { MetadataRoute } from 'next';
import { PORTFOLIO_SITE_URL } from '@/lib/site-links';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${PORTFOLIO_SITE_URL}/sitemap.xml`,
  };
}
