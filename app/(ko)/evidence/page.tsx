import { GuidePanel } from '@/components/guide-panel';
import { HiringFitPanel } from '@/components/hiring-fit-panel';
import { ImplementationEvidenceBoard } from '@/components/implementation-evidence-board';
import { SectionHeading } from '@/components/section-heading';
import { hiringFitKo, implementationEvidenceKo } from '@/lib/data-ko';

export const metadata = {
  title: '구현 근거',
  description: '프론트엔드 개발자로서 판단 가능한 대표 구현 표면, 역할, 기술 신호, 검증 근거를 정리한 페이지입니다.',
};

export default function KoreanEvidencePage() {
  return (
    <main className="page-shell">
      <SectionHeading
        eyebrow="구현 근거"
        title="채용자가 실제 프론트엔드 역량을 판단할 수 있는 근거"
        description="설명만 읽히는 포트폴리오가 아니라, 어떤 제품 표면을 맡았고 어떤 프론트엔드 신호와 검증이 있었는지 바로 확인할 수 있게 정리했습니다."
      />
      <GuidePanel
        ariaLabel="구현 근거 읽는 기준"
        items={[
          { title: '제품 표면', body: '화면, 상태 모델, 산출물, 릴리즈 경계처럼 실제로 책임져야 했던 범위를 봅니다.' },
          { title: '프론트엔드 신호', body: 'React, Next.js, TypeScript, 상태 모델, 런타임 검증처럼 채용 판단에 필요한 기술 신호를 봅니다.' },
          { title: '검증 근거', body: '테스트, 빌드, 라우트, 생성 산출물 확인처럼 완료 판단에 사용한 근거를 봅니다.' },
        ]}
      />
      <HiringFitPanel fit={hiringFitKo} locale="ko" />
      <section className="mt-10">
        <ImplementationEvidenceBoard entries={implementationEvidenceKo} locale="ko" />
      </section>
    </main>
  );
}
