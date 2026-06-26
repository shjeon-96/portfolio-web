'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigationEn = [
  { href: '/', label: 'Home' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/editor-prototype', label: 'Prototype' },
  { href: '/changelog', label: 'Changelog' },
  { href: '/ai-workflow', label: 'AI Workflow' },
  { href: '/skills', label: 'Skills' },
  { href: '/about', label: 'About' },
];

const navigationKo = [
  { href: '/ko', label: '홈' },
  { href: '/ko/case-studies', label: '케이스 스터디' },
  { href: '/ko/editor-prototype', label: '프로토타입' },
  { href: '/ko/changelog', label: '체인지로그' },
  { href: '/ko/ai-workflow', label: 'AI 워크플로우' },
  { href: '/ko/skills', label: '스킬' },
  { href: '/ko/about', label: '소개' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isEditorPrototype = pathname === '/editor-prototype' || pathname === '/ko/editor-prototype';
  const isKorean = pathname === '/ko' || pathname.startsWith('/ko/');
  const navigation = isKorean ? navigationKo : navigationEn;

  if (isEditorPrototype) {
    return null;
  }

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_88%,white)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4">
        <Link className="flex items-center gap-3 font-semibold text-[var(--text-primary)]" href={isKorean ? '/ko' : '/'}>
          <span className="flex size-8 items-center justify-center rounded-md bg-[var(--text-primary)] text-sm text-white">
            SJ
          </span>
          <span className="hidden sm:inline">Seunghun Jeon</span>
        </Link>
        <nav className="flex items-center gap-1 overflow-x-auto text-sm text-[var(--text-secondary)]">
          {navigation.map((item) => (
            <Link
              className="whitespace-nowrap rounded-md px-3 py-2 transition hover:bg-[var(--surface)] hover:text-[var(--text-primary)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
          <span className="mx-1 h-4 w-px shrink-0 bg-[var(--border)]" />
          <Link
            className="whitespace-nowrap rounded-md px-3 py-2 transition hover:bg-[var(--surface)] hover:text-[var(--text-primary)]"
            href="/"
          >
            EN
          </Link>
          <Link
            className="whitespace-nowrap rounded-md px-3 py-2 transition hover:bg-[var(--surface)] hover:text-[var(--text-primary)]"
            href="/ko"
          >
            KO
          </Link>
        </nav>
      </div>
    </header>
  );
}
