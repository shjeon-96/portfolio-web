import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-web.vercel.app'),
  title: {
    default: 'Seunghun Jeon | 제품 프론트엔드 엔지니어',
    template: '%s | Seunghun Jeon',
  },
  description:
    '복잡한 프론트엔드 제품 시스템, 공개 가능한 사례, 엔지니어링 변경 기록, AI 개발 흐름 포트폴리오.',
  openGraph: {
    title: 'Seunghun Jeon | 제품 프론트엔드 엔지니어',
    description:
      '복잡한 프론트엔드 제품 시스템을 위한 공개 가능한 사례, 변경 기록, AI 개발 흐름.',
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
