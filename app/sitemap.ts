import type { MetadataRoute } from 'next';
import { getSitemapRouteEntries } from '@/lib/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapRouteEntries();
}
