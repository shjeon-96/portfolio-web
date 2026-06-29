import type { Metadata, Viewport } from 'next';
import { RouteMotionShell } from '@/components/route-motion-shell';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { PORTFOLIO_SITE_URL } from '@/lib/site-links';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(PORTFOLIO_SITE_URL),
  title: {
    default: 'Seunghun Jeon | 제품 프론트엔드 엔지니어',
    template: '%s | Seunghun Jeon',
  },
  description:
    '노코드 빌더, B2B 운영 콘솔, 릴리즈 경계에서 상태 모델과 배포 산출물 정합성을 다룬 제품 프론트엔드 포트폴리오.',
  openGraph: {
    title: 'Seunghun Jeon | 제품 프론트엔드 엔지니어',
    description:
      '노코드 빌더, B2B 운영 콘솔, 릴리즈 경계에서 상태 모델과 배포 산출물 정합성을 다룬 제품 프론트엔드 포트폴리오.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f6f7f5',
};

export default function KoreanRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <a className="skip-link" href="#main-content">
          본문으로 건너뛰기
        </a>
        <SiteHeader />
        <RouteMotionShell>{children}</RouteMotionShell>
        <SiteFooter />
      </body>
    </html>
  );
}
