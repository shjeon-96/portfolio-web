import type { MetadataRoute } from 'next';
import { caseStudies } from '@/lib/data';

const baseUrl = 'https://portfolio-web.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/case-studies', '/editor-prototype', '/changelog', '/ai-workflow', '/skills', '/about', '/ko', '/ko/case-studies', '/ko/editor-prototype', '/ko/changelog', '/ko/ai-workflow', '/ko/skills', '/ko/about'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const caseStudyRoutes = caseStudies.map((caseStudy) => ({
    url: `${baseUrl}/case-studies/${caseStudy.slug}`,
    lastModified: new Date(),
  }));

  const koreanCaseStudyRoutes = caseStudies.map((caseStudy) => ({
    url: `${baseUrl}/ko/case-studies/${caseStudy.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...caseStudyRoutes, ...koreanCaseStudyRoutes];
}
