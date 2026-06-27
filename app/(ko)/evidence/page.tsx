import { GuidePanel } from '@/components/guide-panel';
import { HiringFitPanel } from '@/components/hiring-fit-panel';
import { ImplementationEvidenceBoard } from '@/components/implementation-evidence-board';
import { LiveEvidenceConsole } from '@/components/live-evidence-console';
import { SectionHeading } from '@/components/section-heading';
import { hiringFitKo, implementationEvidenceKo } from '@/lib/data-ko';

export const metadata = {
  title: '구현 근거',
  description: '제품 프론트엔드 개발자로서 실제로 다룬 제품 영역, 역할, 기술 신호, 검증 흐름을 정리한 페이지입니다.',
};

export default function KoreanEvidencePage() {
  return (
    <main className="page-shell">
      <SectionHeading
        eyebrow="구현 근거"
        title="내가 책임진 제품 화면과 검증 흐름"
        description="프로젝트 이름을 나열하기보다, 어떤 제품 영역을 맡았고 어떤 기준으로 구조화하고 검증했는지 보여줍니다."
      />
      <GuidePanel
        ariaLabel="구현 근거 읽는 기준"
        items={[
          { title: '제품 영역', body: '화면, 상태 모델, 결과물, 릴리즈 기준처럼 실제로 책임져야 했던 범위를 봅니다.' },
          { title: '프론트엔드 신호', body: 'React, Next.js, TypeScript, 상태 모델, 런타임 검증처럼 반복해서 다룬 기술 기준을 봅니다.' },
          { title: '검증 근거', body: '테스트, 빌드, 라우트, 생성 결과물 확인처럼 완료 판단에 사용한 근거를 봅니다.' },
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
