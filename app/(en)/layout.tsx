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
    'Public portfolio for complex product UI, mobile release gates, editor engines, and AI-assisted engineering evidence.',
  openGraph: {
    title: 'Seunghun Jeon | Product Front-End Engineer',
    description:
      'Public portfolio for complex product UI, mobile release gates, editor engines, and AI-assisted engineering evidence.',
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
