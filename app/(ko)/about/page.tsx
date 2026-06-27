import { SectionHeading } from '@/components/section-heading';

export const metadata = {
  title: '소개',
  description: '전승훈의 제품 프론트엔드 포지셔닝과 연락 링크입니다.',
};

export default function KoreanAboutPage() {
  return (
    <main className="page-shell page-narrow">
      <SectionHeading
        eyebrow="About"
        title="복잡한 프론트엔드 제품 시스템을 구조화합니다"
        description="에디터 엔진, 운영 도구, 배포 산출물, AI 에이전트 기반 개발 워크플로우가 현재 가장 강한 축입니다."
      />
      <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
        <article className="surface-panel p-6">
          <p className="eyebrow">Profile</p>
          <div className="mt-4 space-y-5 text-copy">
            <p>
            저는 복잡한 제품 인터페이스를 구조화하는 프론트엔드 개발자입니다. 최근에는 AST 기반 비주얼 에디터 엔진,
            컴포넌트 Variant, 캔버스 조작, 데이터 바인딩, export/deploy 파이프라인을 다뤘습니다. 이전에는 관리자
            대시보드, AI 리뷰 운영, 결제·정산 흐름, 실시간 운영 화면, 백오피스 마이그레이션을 개발했습니다.
            </p>
            <p>
              복잡한 제품 UI를 단순 화면 구현으로 끝내지 않고 상태 모델, 검증 루프, 릴리즈 경계까지 함께 봅니다.
              B2B SaaS, 에디터/빌더 제품, 모바일 제품 플랫폼, AI 개발 워크플로우처럼 여러 경계가 맞물리는 제품을 다뤄왔습니다.
            </p>
          </div>
        </article>
        <aside className="surface-panel p-6">
          <p className="eyebrow">Current focus</p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--text-secondary)]">
            <li>B2B SaaS와 제품 엔지니어링</li>
            <li>Visual Builder와 운영 도구</li>
            <li>AI 에이전트를 실제 개발 방식에 녹이는 팀</li>
          </ul>
          <div className="mt-6 border-t border-[var(--border)] pt-5">
            <h2 className="font-semibold">Links</h2>
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
          </div>
        </aside>
      </section>
    </main>
  );
}
