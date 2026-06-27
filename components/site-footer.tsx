'use client';

import { usePathname } from 'next/navigation';

export function SiteFooter() {
  const pathname = usePathname();
  const isEditorPrototype = pathname === '/editor-prototype' || pathname === '/en/editor-prototype';

  if (isEditorPrototype) {
    return null;
  }

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-strong)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-[var(--text-secondary)] md:flex-row md:items-center md:justify-between">
        <p className="font-mono uppercase tracking-[0.14em]">Product Console Portfolio</p>
        <p>Public-safe case studies, changelog, and AI workflow.</p>
      </div>
    </footer>
  );
}
