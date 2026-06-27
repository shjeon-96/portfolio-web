import { SectionHeading } from '@/components/section-heading';
import { ActionLink, Panel, TextLink } from '@/components/ui';
import { cx, ds } from '@/lib/design-system';
import { GITHUB_PROFILE_URL, PORTFOLIO_REPOSITORY_URL } from '@/lib/site-links';

export const metadata = {
  title: '소개',
  description: '전승훈의 제품 프론트엔드 작업 방식, 관심 영역, 공개 가능한 근거를 정리한 소개 페이지입니다.',
};

export default function KoreanAboutPage() {
  return (
    <main className="page-shell page-narrow">
      <SectionHeading
        eyebrow="소개"
        title="제품 상태와 릴리즈 기준을 끝까지 맞추는 프론트엔드 개발자"
        description="에디터 엔진, 운영 도구, 모바일 제품 플랫폼, AI 에이전트를 활용한 개발 흐름처럼 여러 기준이 쉽게 어긋나는 제품을 구조화합니다."
      />
      <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
        <Panel as="article" className="p-6">
          <p className={ds.text.eyebrow}>프로필</p>
          <div className="mt-4 space-y-5 text-copy">
            <p>
              저는 복잡한 제품 인터페이스를 구조화하는 프론트엔드 개발자입니다. 최근에는 AST 기반 비주얼 에디터 엔진,
              컴포넌트 변형, 캔버스 조작, 데이터 바인딩, 내보내기와 배포 파이프라인처럼 편집 상태와 실제 결과물이
              함께 맞아야 하는 영역을 다뤘습니다.
            </p>
            <p>
              이전에는 관리자 대시보드, AI 리뷰 운영, 결제·정산 흐름, 실시간 운영 화면, 백오피스 마이그레이션을
              개발했습니다. 화면 구현만 분리해서 보지 않고 상태 모델, 검증 흐름, 릴리즈 기준까지 함께 봅니다.
            </p>
          </div>
          <div className="mt-6 border-t border-[var(--border)] pt-5">
            <h2 className="font-semibold">작업 기준</h2>
            <ul className={cx('mt-3 grid gap-3 md:grid-cols-3', ds.text.bodySmall)}>
              <li>원인 모듈과 담당 범위를 먼저 확인합니다.</li>
              <li>중복 판단은 공통 규칙과 검증 경로로 묶습니다.</li>
              <li>공개 가능한 근거만 남기고 민감한 운영 정보는 제거합니다.</li>
            </ul>
          </div>
        </Panel>
        <Panel as="aside" className="p-6">
          <p className={ds.text.eyebrow}>현재 관심 영역</p>
          <ul className={cx('mt-4 space-y-3', ds.text.bodySmall)}>
            <li>B2B SaaS와 제품 엔지니어링</li>
            <li>비주얼 빌더와 운영 도구</li>
            <li>모바일 릴리즈와 네이티브 제품 구조</li>
            <li>AI 에이전트를 실제 개발 방식에 녹이는 팀</li>
          </ul>
          <div className="mt-6 border-t border-[var(--border)] pt-5">
            <h2 className="font-semibold">볼 만한 근거</h2>
            <ul className={cx('mt-3 space-y-3', ds.text.bodySmall)}>
              <li>
                <TextLink href="/evidence">
                  대표 구현 근거와 검증 기록
                </TextLink>
              </li>
              <li>
                <TextLink external href="https://github.com/shjeon-96/codex-lsp-bridge">
                  공개 저장소와 재사용 가능한 도구 작업
                </TextLink>
              </li>
              <li>
                <TextLink href="/changelog">
                  월별 엔지니어링 체인지로그
                </TextLink>
              </li>
            </ul>
          </div>
          <div className="mt-6 border-t border-[var(--border)] pt-5">
            <h2 className="font-semibold">링크</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <ActionLink external href={GITHUB_PROFILE_URL} variant="primary">
                GitHub
              </ActionLink>
              <ActionLink external href={PORTFOLIO_REPOSITORY_URL}>
                포트폴리오 저장소
              </ActionLink>
            </div>
          </div>
        </Panel>
      </section>
    </main>
  );
}
