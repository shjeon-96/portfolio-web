import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-web.vercel.app'),
  title: {
    default: 'Seunghun Jeon | Product Front-End Engineer',
    template: '%s | Seunghun Jeon',
  },
  description:
    'Product console portfolio for React, Next.js, product engineering, engineering changelog, and AI workflow.',
  openGraph: {
    title: 'Seunghun Jeon | Product Front-End Engineer',
    description:
      'Public-safe case studies, engineering changelog, and AI workflow for complex front-end product systems.',
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
