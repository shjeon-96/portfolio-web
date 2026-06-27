'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navigationEn = [
  { href: '/en', label: 'Home' },
  { href: '/en/case-studies', label: 'Case Studies' },
  { href: '/en/editor-prototype', label: 'Prototype' },
  { href: '/en/changelog', label: 'Changelog' },
  { href: '/en/ai-workflow', label: 'AI Workflow' },
  { href: '/en/skills', label: 'Skills' },
  { href: '/en/about', label: 'About' },
];

const navigationKo = [
  { href: '/', label: '홈' },
  { href: '/case-studies', label: '케이스 스터디' },
  { href: '/editor-prototype', label: '프로토타입' },
  { href: '/changelog', label: '체인지로그' },
  { href: '/ai-workflow', label: 'AI 워크플로우' },
  { href: '/skills', label: '스킬' },
  { href: '/about', label: '소개' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isEditorPrototype = pathname === '/editor-prototype' || pathname === '/en/editor-prototype';
  const isKorean = !pathname.startsWith('/en');
  const navigation = isKorean ? navigationKo : navigationEn;

  if (isEditorPrototype) {
    return null;
  }

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_88%,white)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4">
        <Link
          className="flex min-h-11 min-w-11 items-center gap-3 font-semibold text-[var(--text-primary)]"
          href={isKorean ? '/' : '/en'}
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="flex size-8 items-center justify-center rounded-md bg-[var(--text-primary)] text-sm text-white">
            SJ
          </span>
          <span className="hidden sm:inline">Seunghun Jeon</span>
        </Link>
        <nav className="hidden items-center gap-1 text-sm text-[var(--text-secondary)] md:flex">
          {navigation.map((item) => (
            <Link
              className="flex min-h-11 min-w-11 items-center justify-center whitespace-nowrap rounded-md px-3 py-2 transition hover:bg-[var(--surface)] hover:text-[var(--text-primary)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
          <span className="mx-1 h-4 w-px shrink-0 bg-[var(--border)]" />
          <Link
            className="flex min-h-11 min-w-11 items-center justify-center whitespace-nowrap rounded-md px-3 py-2 transition hover:bg-[var(--surface)] hover:text-[var(--text-primary)]"
            href="/en"
          >
            EN
          </Link>
          <Link
            className="flex min-h-11 min-w-11 items-center justify-center whitespace-nowrap rounded-md px-3 py-2 transition hover:bg-[var(--surface)] hover:text-[var(--text-primary)]"
            href="/"
          >
            KO
          </Link>
        </nav>
        <button
          aria-controls="mobile-site-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="grid size-11 place-items-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] md:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {isMenuOpen ? (
        <nav
          className="border-t border-[var(--border)] bg-[var(--surface)] px-5 py-3 shadow-sm md:hidden"
          id="mobile-site-navigation"
        >
          <div className="mx-auto grid max-w-7xl gap-1 text-sm text-[var(--text-secondary)]">
            {navigation.map((item) => (
              <Link
                className="flex min-h-11 items-center rounded-md px-3 font-medium transition hover:bg-[var(--background)] hover:text-[var(--text-primary)]"
                href={item.href}
                key={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-[var(--border)] pt-3">
              <Link
                className="flex min-h-11 items-center justify-center rounded-md border border-[var(--border)] font-semibold text-[var(--text-primary)]"
                href="/en"
                onClick={() => setIsMenuOpen(false)}
              >
                EN
              </Link>
              <Link
                className="flex min-h-11 items-center justify-center rounded-md border border-[var(--border)] font-semibold text-[var(--text-primary)]"
                href="/"
                onClick={() => setIsMenuOpen(false)}
              >
                KO
              </Link>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
