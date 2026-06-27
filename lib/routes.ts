import publicRoutes from '@/lib/public-routes.json';
import { PORTFOLIO_SITE_URL } from '@/lib/site-links';

export type Locale = 'en' | 'ko';
export type PublicRouteId =
  | 'about'
  | 'ai-workflow'
  | 'changelog'
  | 'evidence'
  | 'home'
  | 'resume'
  | 'skills';

type PublicRoute = {
  id: PublicRouteId;
  paths: Record<Locale, string>;
  labels: Record<Locale, string>;
  checkSnippets: Record<Locale, string[]>;
  lastModified: string;
  changeFrequency: 'monthly';
  priority: number;
};

export const siteRoutes = publicRoutes as PublicRoute[];

export function getRoutePath(id: PublicRouteId, locale: Locale) {
  return getRoute(id).paths[locale];
}

export function getNavigationItems(locale: Locale) {
  return siteRoutes.map((route) => ({
    href: route.paths[locale],
    id: route.id,
    label: route.labels[locale],
  }));
}

export function getLocalizedRoutePath(pathname: string, locale: Locale) {
  const route = siteRoutes.find((item) => item.paths.en === pathname || item.paths.ko === pathname);

  if (!route) {
    // Explicit 404-shell exception: keep the language switch navigable even when the current URL is not a public route.
    return getRoutePath('home', locale);
  }

  return route.paths[locale];
}

export function getSitemapRouteEntries() {
  return siteRoutes.flatMap((route) =>
    (['ko', 'en'] as const).map((locale) => ({
      alternates: {
        languages: {
          en: `${PORTFOLIO_SITE_URL}${route.paths.en}`,
          ko: `${PORTFOLIO_SITE_URL}${route.paths.ko}`,
        },
      },
      changeFrequency: route.changeFrequency,
      lastModified: route.lastModified,
      priority: locale === 'ko' && route.id === 'home' ? route.priority : Math.max(route.priority - 0.05, 0.5),
      url: `${PORTFOLIO_SITE_URL}${route.paths[locale]}`,
    })),
  );
}

function getRoute(id: PublicRouteId) {
  const route = siteRoutes.find((item) => item.id === id);

  if (!route) {
    throw new Error(`Unknown public route id: ${id}`);
  }

  return route;
}
