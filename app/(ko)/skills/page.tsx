import { GuidePanel } from '@/components/guide-panel';
import { SectionHeading } from '@/components/section-heading';
import { SkillContextCard } from '@/components/skill-context-card';
import { skillsKo } from '@/lib/data-ko';

export const metadata = {
  title: '기술',
  description: '기술 스택을 제품 경험, 상태 모델, 검증 흐름과 함께 정리한 페이지입니다.',
};

export default function KoreanSkillsPage() {
  return (
    <main className="page-shell">
      <SectionHeading
        eyebrow="기술"
        title="기술 스택은 실제로 쓴 제품 경험과 함께 보여줍니다"
        description="단순 아이콘 나열이 아니라, 각 기술을 어떤 제품 시스템과 검증 흐름에서 사용했는지 중심으로 정리했습니다."
      />
      <GuidePanel
        ariaLabel="기술 페이지 읽는 기준"
        items={[
          { title: '제품 맥락', body: '기술 이름보다 어떤 제품 문제를 풀 때 사용했는지 먼저 봅니다.' },
          { title: '상태와 기준', body: '복잡한 UI, 데이터 흐름, 결과물 기준을 어떻게 안정화했는지 봅니다.' },
          { title: '검증 경로', body: '테스트, 릴리즈 게이트, 배포 확인까지 연결되는 기술 경험을 봅니다.' },
        ]}
      />
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {skillsKo.map((skill) => (
          <SkillContextCard key={skill.group} skill={skill} />
        ))}
      </section>
    </main>
  );
}
