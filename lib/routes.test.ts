import { describe, expect, it } from 'vitest';

import {
  getLocalizedRoutePath,
  getNavigationItems,
  getRoutePath,
  getSitemapRouteEntries,
  siteRoutes,
  type PublicRouteId,
} from '@/lib/routes';
import { PORTFOLIO_SITE_URL } from '@/lib/site-links';

describe('public route registry', () => {
  it('resolves localized route paths from the canonical registry', () => {
    expect(getRoutePath('home', 'ko')).toBe('/');
    expect(getRoutePath('home', 'en')).toBe('/en');
    expect(getRoutePath('evidence', 'ko')).toBe('/evidence');
    expect(getRoutePath('evidence', 'en')).toBe('/en/evidence');
  });

  it('builds navigation items in registry order', () => {
    expect(getNavigationItems('en')).toEqual(
      siteRoutes.map((route) => ({
        href: route.paths.en,
        id: route.id,
        label: route.labels.en,
      })),
    );
  });

  it('switches known paths across locales and sends unknown paths to the locale home', () => {
    expect(getLocalizedRoutePath('/en/changelog', 'ko')).toBe('/changelog');
    expect(getLocalizedRoutePath('/changelog', 'en')).toBe('/en/changelog');
    expect(getLocalizedRoutePath('/missing', 'ko')).toBe('/');
    expect(getLocalizedRoutePath('/missing', 'en')).toBe('/en');
  });

  it('builds sitemap entries with canonical alternates and bounded priorities', () => {
    const sitemapEntries = getSitemapRouteEntries();
    const homeKo = sitemapEntries.find((entry) => entry.url === `${PORTFOLIO_SITE_URL}/`);
    const homeEn = sitemapEntries.find((entry) => entry.url === `${PORTFOLIO_SITE_URL}/en`);

    expect(sitemapEntries).toHaveLength(siteRoutes.length * 2);
    expect(homeKo?.priority).toBe(1);
    expect(homeEn?.priority).toBe(0.95);
    expect(homeKo?.alternates?.languages).toEqual({
      en: `${PORTFOLIO_SITE_URL}/en`,
      ko: `${PORTFOLIO_SITE_URL}/`,
    });
    expect(sitemapEntries.every((entry) => entry.priority >= 0.5)).toBe(true);
  });

  it('throws when a caller asks for a route id outside the registry contract', () => {
    expect(() => getRoutePath('missing' as PublicRouteId, 'ko')).toThrow('Unknown public route id: missing');
  });
});
