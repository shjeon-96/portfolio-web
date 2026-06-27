import { SectionHeading } from '@/components/section-heading';
import { SkillContextCard } from '@/components/skill-context-card';
import { skillsKo } from '@/lib/data-ko';

export const metadata = {
  title: '스킬',
  description: '기술 스택을 실제 제품 맥락과 함께 정리한 한국어 페이지입니다.',
};

export default function KoreanSkillsPage() {
  return (
    <main className="page-shell">
      <SectionHeading
        eyebrow="Skills"
        title="기술 스택은 사용 맥락과 함께 보여줍니다"
        description="단순 아이콘 나열이 아니라, 각 기술을 어떤 제품 시스템과 검증 흐름에서 사용했는지 중심으로 정리했습니다."
      />
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {skillsKo.map((skill) => (
          <SkillContextCard key={skill.group} skill={skill} />
        ))}
      </section>
    </main>
  );
}
