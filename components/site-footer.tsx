'use client';

import { usePathname } from 'next/navigation';

export function SiteFooter() {
  const pathname = usePathname();
  const isKorean = !pathname.startsWith('/en');

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-strong)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-[var(--text-secondary)] md:flex-row md:items-center md:justify-between">
        <p className="font-mono uppercase tracking-[0.14em]">{isKorean ? '제품 시스템 포트폴리오' : 'Product Console Portfolio'}</p>
        <p>{isKorean ? '공개 가능한 사례, 변경 기록, AI 개발 흐름.' : 'Public-safe case studies, changelog, and AI workflow.'}</p>
      </div>
    </footer>
  );
}
