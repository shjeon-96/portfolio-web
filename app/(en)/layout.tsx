import type { Metadata, Viewport } from 'next';
import { RouteMotionShell } from '@/components/route-motion-shell';
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
    'Product front-end portfolio focused on no-code builders, B2B operation consoles, state models, and export/deploy output parity.',
  openGraph: {
    title: 'Seunghun Jeon | Product Front-End Engineer',
    description:
      'Product front-end portfolio focused on no-code builders, B2B operation consoles, state models, and export/deploy output parity.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f6f7f5',
};

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        <RouteMotionShell>{children}</RouteMotionShell>
        <SiteFooter />
      </body>
    </html>
  );
}
