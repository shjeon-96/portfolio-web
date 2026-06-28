import type { Metadata } from 'next';

import { getRoutePath, type Locale, type PublicRouteId } from '@/lib/routes';
import { PORTFOLIO_SITE_URL } from '@/lib/site-links';

type PageMetadataInput = {
  description: string;
  locale: Locale;
  routeId: PublicRouteId;
  title: string;
};

export function createPageMetadata({ description, locale, routeId, title }: PageMetadataInput): Metadata {
  const canonicalPath = getRoutePath(routeId, locale);
  const englishPath = getRoutePath(routeId, 'en');
  const koreanPath = getRoutePath(routeId, 'ko');
  const canonicalUrl = getAbsoluteRouteUrl(canonicalPath);

  return {
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: getAbsoluteRouteUrl(englishPath),
        ko: getAbsoluteRouteUrl(koreanPath),
        'x-default': getAbsoluteRouteUrl(koreanPath),
      },
    },
    description,
    openGraph: {
      alternateLocale: locale === 'ko' ? ['en_US'] : ['ko_KR'],
      description,
      locale: locale === 'ko' ? 'ko_KR' : 'en_US',
      title,
      type: 'website',
      url: canonicalUrl,
    },
    title,
  };
}

function getAbsoluteRouteUrl(pathname: string) {
  return pathname === '/' ? PORTFOLIO_SITE_URL : `${PORTFOLIO_SITE_URL}${pathname}`;
}
