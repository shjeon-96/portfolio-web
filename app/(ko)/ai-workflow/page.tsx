import { AiWorkflowMap } from '@/components/ai-workflow-map';
import { SectionHeading } from '@/components/section-heading';
import { aiWorkflowStepsKo } from '@/lib/data-ko';

export const metadata = {
  title: 'AI 개발 흐름',
  description: '실제 Codex 세션에서 반복된 요청 접수, repo 스캔, 증거 캡처, 검증, 커밋/배포 흐름입니다.',
};

const sessionGroups = [
  {
    title: '이슈 실행',
    description: 'PRD나 GitHub 이슈에서 시작해 repo 기준으로 구현 범위를 좁히는 세션입니다.',
    items: ['PRD 확인', 'GitHub 이슈', 'repo 스캔', '커밋/푸시'],
    result: '요구사항과 실제 코드 변경, 검증 결과가 한 커밋 또는 이슈 상태로 연결됩니다.',
  },
  {
    title: '화면 감사',
    description: '포트폴리오와 제품 화면을 스크린샷, DOM, 라우트 응답으로 점검하는 세션입니다.',
    items: ['Playwright', '스크린샷', 'DOM 체크', 'public safety'],
    result: '화면 깨짐, 링크, 공개 안전성, 반응형 문제를 근거와 함께 수정합니다.',
  },
  {
    title: '릴리즈 디버그',
    description: '빌드/런타임 로그와 외부 콘솔 경계를 분리해 릴리즈 차단 원인을 찾는 세션입니다.',
    items: ['빌드 로그', '런타임 로그', '스토어 경계', '외부 콘솔'],
    result: 'repo에서 해결할 일과 수동 콘솔 작업을 분리해 완료 기준을 명확히 남깁니다.',
  },
];

export default function KoreanAiWorkflowPage() {
  return (
    <main className="page-shell">
      <SectionHeading
        eyebrow="AI 개발 흐름"
        title="요청을 검증 가능한 변경으로 닫는 AI 개발 흐름"
        description="실제 Codex 세션에서 반복된 흐름을 공개 가능한 수준으로 정리했습니다. PRD/이슈 접수, repo 맥락 스캔, 화면·로그 증거 캡처, 좁은 수정, 검증, 커밋/배포 기록이 하나의 루프로 이어집니다."
      />

      <AiWorkflowMap
        introEyebrow="작업 모델"
        introTitle="실제 사용 흐름은 세션을 닫는 방식에서 드러납니다"
        introDescription="단순히 어떤 AI 도구를 썼는지가 아니라, 요청을 어떤 증거로 확인하고 어떤 완료 상태로 남겼는지를 중심으로 정리합니다."
        signals={[
          { label: '입력', value: 'PRD/이슈/로그' },
          { label: '작업 루프', value: '스캔/수정/검증' },
          { label: '산출물', value: '커밋/배포/노트' },
        ]}
        steps={aiWorkflowStepsKo}
        sessionEyebrow="관찰된 세션"
        sessionTitle="반복된 세션 유형을 기준으로 묶었습니다"
        sessionDescription="포트폴리오 세션, 모바일 릴리즈 세션, 화면 감사 세션에서 공통으로 나타난 흐름만 공개 가능한 단어로 다시 썼습니다."
        sessionGroups={sessionGroups}
        outputLabel="산출물"
        sessionResultLabel="결과"
      />

      <section className="surface-panel mt-10 p-6">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent-amber)]">기준</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Boundary title="제안은 바로 적용하지 않습니다" body="AI 제안은 실제 소유 경로와 테스트 기준으로 확인한 뒤 적용합니다." />
          <Boundary title="증상을 가리지 않습니다" body="임시 분기보다 문제를 설명하는 제품 계약과 소유 경계를 고칩니다." />
          <Boundary title="검증을 먼저 봅니다" body="생성 산출물, 테스트, 사용자에게 보이는 동작이 완료 기준입니다." />
        </div>
      </section>
    </main>
  );
}

function Boundary({ title, body }: Readonly<{ title: string; body: string }>) {
  return (
    <div className="rounded-lg bg-[var(--surface-strong)] p-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{body}</p>
    </div>
  );
}
