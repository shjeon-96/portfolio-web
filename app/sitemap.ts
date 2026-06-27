import type { MetadataRoute } from 'next';

const baseUrl = 'https://portfolio-web.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/changelog', '/ai-workflow', '/skills', '/about', '/en', '/en/changelog', '/en/ai-workflow', '/en/skills', '/en/about'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
