import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Seunghun Jeon | Product Front-End Engineer',
  description: 'Product console portfolio for React, Next.js, product engineering, engineering changelog, and AI workflow.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

