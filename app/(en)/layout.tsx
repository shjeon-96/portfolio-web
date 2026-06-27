import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { PORTFOLIO_SITE_URL } from '@/lib/site-links';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(PORTFOLIO_SITE_URL),
  title: {
    default: 'Seunghun Jeon | Product Front-End Engineer',
    template: '%s | Seunghun Jeon',
  },
  description:
    'Public portfolio for implementation evidence across complex product UI, mobile release gates, editor engines, and AI-assisted engineering.',
  openGraph: {
    title: 'Seunghun Jeon | Product Front-End Engineer',
    description:
      'Public portfolio for implementation evidence across complex product UI, mobile release gates, editor engines, and AI-assisted engineering.',
    type: 'website',
  },
};

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
