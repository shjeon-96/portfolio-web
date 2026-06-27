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
    '에디터 엔진, 모바일 릴리즈 게이트, AI 개발 흐름을 공개 가능한 제품 엔지니어링 근거로 정리한 포트폴리오.',
  openGraph: {
    title: 'Seunghun Jeon | 제품 프론트엔드 엔지니어',
    description:
      '에디터 엔진, 모바일 릴리즈 게이트, AI 개발 흐름을 공개 가능한 제품 엔지니어링 근거로 정리한 포트폴리오.',
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
