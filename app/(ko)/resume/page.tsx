import { SectionHeading } from '@/components/section-heading';
import { ActionLink, BadgeList, Panel } from '@/components/ui';
import { projectHighlightsKo, skillsKo } from '@/lib/data-ko';
import { cx, ds } from '@/lib/design-system';
import { createPageMetadata } from '@/lib/page-metadata';
import { getRoutePath } from '@/lib/routes';
import { GITHUB_PROFILE_URL, PORTFOLIO_REPOSITORY_URL } from '@/lib/site-links';

export const metadata = createPageMetadata({
  locale: 'ko',
  routeId: 'resume',
  title: '공개 이력서',
  description: '전승훈의 제품 프론트엔드 공개 이력서입니다. 공개 가능한 프로젝트, 기술, 검증 중심 작업 방식을 요약합니다.',
});

export default function KoreanResumePage() {
  const featuredProjects = projectHighlightsKo.filter((project) => project.featured).slice(0, 4);
  const evidenceHref = getRoutePath('evidence', 'ko');

  return (
    <main className="page-shell page-narrow">
      <SectionHeading
        eyebrow="공개 이력서"
        title="제품 프론트엔드 개발자"
        description="복잡한 제품 상태, 운영 흐름, 배포 산출물, 검증 기준을 하나의 제품 계약으로 맞추는 작업에 집중합니다."
      />

      <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
        <Panel as="article" className="p-6">
          <p className={ds.text.eyebrow}>요약</p>
          <div className={cx('mt-4 space-y-4', ds.text.bodySmall)}>
            <p>
              노코드 웹 빌더, B2B 운영 콘솔, 모바일 릴리즈 경계에서 상태 모델과 사용자에게 전달되는 산출물 기준을 함께 다뤘습니다.
            </p>
            <p>
              화면 구현만 분리하지 않고 API 계약, 권한 상태, 테스트, 라우트 검사, 공개 안전성까지 완료 기준에 포함합니다.
            </p>
          </div>
          <div className="mt-6 border-t border-[var(--border)] pt-5">
            <p className={ds.text.eyebrowMuted}>핵심 역량</p>
            <BadgeList className="mt-3" items={['Product front-end', 'State model', 'B2B console', 'Release verification', 'AI workflow']} variant="strong" />
          </div>
        </Panel>

        <Panel as="aside" className="p-6">
          <p className={ds.text.eyebrow}>링크</p>
          <div className="mt-4 grid gap-3">
            <ActionLink external href={GITHUB_PROFILE_URL} variant="primary">
              GitHub
            </ActionLink>
            <ActionLink external href={PORTFOLIO_REPOSITORY_URL}>
              포트폴리오 저장소
            </ActionLink>
            <ActionLink href={evidenceHref}>
              구현 사례 보기
            </ActionLink>
          </div>
        </Panel>
      </section>

      <section className="mt-10">
        <div className={ds.layout.sectionHeader}>
          <div>
            <p className={ds.text.eyebrowAccent}>대표 근거</p>
            <h2 className="mt-2 text-2xl font-semibold">공개 가능한 프로젝트 신호</h2>
          </div>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Panel as="article" className="p-5" key={project.title}>
              <p className={ds.text.eyebrowMuted}>{project.label}</p>
              <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
              <p className={cx('mt-2', ds.text.bodySmall)}>{project.summary}</p>
              <BadgeList className="mt-4" items={project.stack} />
            </Panel>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <p className={ds.text.eyebrowAccent}>기술 맥락</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {skillsKo.map((skill) => (
            <Panel as="article" className="p-5" key={skill.group}>
              <h3 className="text-lg font-semibold">{skill.group}</h3>
              <BadgeList className="mt-3" items={skill.tools} variant="muted" />
              <p className={cx('mt-3', ds.text.bodySmall)}>{skill.context}</p>
            </Panel>
          ))}
        </div>
      </section>
    </main>
  );
}
