import type { Metadata } from 'next';
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
    '에디터 엔진, 모바일 릴리즈 게이트, 구현 근거, AI 개발 흐름을 공개해도 안전한 제품 엔지니어링 근거로 정리한 포트폴리오.',
  openGraph: {
    title: 'Seunghun Jeon | 제품 프론트엔드 엔지니어',
    description:
      '에디터 엔진, 모바일 릴리즈 게이트, 구현 근거, AI 개발 흐름을 공개해도 안전한 제품 엔지니어링 근거로 정리한 포트폴리오.',
    type: 'website',
  },
};

export default function KoreanRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
