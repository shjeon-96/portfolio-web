import { SectionHeading } from '@/components/section-heading';

export const metadata = {
  title: '소개',
  description: '전승훈의 제품 프론트엔드 포지셔닝과 연락 링크입니다.',
};

export default function KoreanAboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading
        eyebrow="About"
        title="복잡한 프론트엔드 제품 시스템을 구조화합니다"
        description="에디터 엔진, 운영 도구, 배포 산출물, AI 에이전트 기반 개발 워크플로우가 현재 가장 강한 축입니다."
      />
      <section className="mt-10 grid gap-4">
        <article className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Profile</h2>
          <p className="mt-4 leading-8 text-[var(--text-secondary)]">
            저는 복잡한 제품 인터페이스를 구조화하는 프론트엔드 개발자입니다. 최근에는 AST 기반 비주얼 에디터 엔진,
            컴포넌트 Variant, 캔버스 조작, 데이터 바인딩, export/deploy 파이프라인을 다뤘습니다. 이전에는 관리자
            대시보드, AI 리뷰 운영, 결제·정산 흐름, 실시간 운영 화면, 백오피스 마이그레이션을 개발했습니다.
          </p>
        </article>
        <article className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Current focus</h2>
          <p className="mt-4 leading-8 text-[var(--text-secondary)]">
            B2B SaaS, Product Engineering, Visual Builder, 운영 도구, AI 에이전트를 실제 개발 방식에 녹여 쓰는 팀에
            관심이 많습니다.
          </p>
        </article>
        <article className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Links</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              className="rounded-md bg-[var(--text-primary)] px-4 py-2 text-sm font-semibold text-white"
              href="https://github.com/shjeon-96"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold"
              href="https://github.com/shjeon-96/portfolio-web"
              rel="noreferrer"
              target="_blank"
            >
              Portfolio repository
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
