import { GuidePanel } from '@/components/guide-panel';
import { HiringFitPanel } from '@/components/hiring-fit-panel';
import { ImplementationEvidenceBoard } from '@/components/implementation-evidence-board';
import { LiveEvidenceConsole } from '@/components/live-evidence-console';
import { SectionHeading } from '@/components/section-heading';
import { hiringFitKo, implementationEvidenceKo } from '@/lib/data-ko';
import { createPageMetadata } from '@/lib/page-metadata';

export const metadata = createPageMetadata({
  locale: 'ko',
  routeId: 'evidence',
  title: '구현 사례',
  description: '제품 프론트엔드 개발자로서 실제로 다룬 제품 영역, 문제, 역할, 접근, 결과, 검증 흐름을 정리한 페이지입니다.',
});

export default function KoreanEvidencePage() {
  return (
    <main className="page-shell">
      <SectionHeading
        eyebrow="구현 사례"
        title="제품 화면, 맡은 범위, 검증 근거"
        description="비공개·공개 프로젝트를 그대로 나열하지 않고, 어떤 제품 화면을 맡았는지, 어떤 프론트엔드 기준을 맞춰야 했는지, 결과를 어떻게 확인했는지로 정리했습니다."
      />
      <GuidePanel
        ariaLabel="구현 근거 읽는 기준"
        items={[
          { title: '제품 화면', body: '빌더, 운영 콘솔, 릴리즈 경로, 개발자 도구처럼 실제로 책임진 화면과 경계를 먼저 봅니다.' },
          { title: '맡은 범위', body: '상태 소유권, API 계약, 마이그레이션 경계, 생성 결과물, 런타임 설정처럼 맞춰야 했던 기준을 봅니다.' },
          { title: '검증 경로', body: '테스트, 빌드, 라우트, 생성 산출물, 스모크 근거, 공개 저장소 확인처럼 완료를 판단한 근거를 봅니다.' },
        ]}
      />
      <LiveEvidenceConsole locale="ko" />
      <HiringFitPanel fit={hiringFitKo} locale="ko" />
      <section className="mt-10">
        <ImplementationEvidenceBoard entries={implementationEvidenceKo} locale="ko" />
      </section>
    </main>
  );
}
