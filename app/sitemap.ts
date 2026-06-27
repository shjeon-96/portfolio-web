import type { MetadataRoute } from 'next';
import { caseStudies } from '@/lib/data';

const baseUrl = 'https://portfolio-web.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/case-studies', '/changelog', '/ai-workflow', '/skills', '/about', '/en', '/en/case-studies', '/en/changelog', '/en/ai-workflow', '/en/skills', '/en/about'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const caseStudyRoutes = caseStudies.map((caseStudy) => ({
    url: `${baseUrl}/case-studies/${caseStudy.slug}`,
    lastModified: new Date(),
  }));

  const englishCaseStudyRoutes = caseStudies.map((caseStudy) => ({
    url: `${baseUrl}/en/case-studies/${caseStudy.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...caseStudyRoutes, ...englishCaseStudyRoutes];
}
