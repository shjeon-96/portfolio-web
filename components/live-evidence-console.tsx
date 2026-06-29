'use client';

import { useMemo } from 'react';

import { Badge, BadgeList, Panel } from '@/components/ui';
import { cx, ds } from '@/lib/design-system';
import { useUrlQueryListState, useUrlQueryState } from '@/lib/use-url-query-state';

type Locale = 'en' | 'ko';
type WorkMode = 'agent' | 'editor' | 'ops';
type ToggleKey = 'contract' | 'publicSafe' | 'regression' | 'release';

type ModeCopy = {
  artifact: string;
  description: string;
  output: string;
  owner: string;
  title: string;
  tokens: string[];
};

const modeCopy: Record<Locale, Record<WorkMode, ModeCopy>> = {
  en: {
    agent: {
      artifact: 'Traceable finish: commit, deploy note, or issue state',
      description: 'A request is closed only when source ownership, evidence, and verification agree.',
      output: 'Agent suggestion is accepted after owner-path review and regression checks.',
      owner: 'AI-assisted workflow',
      title: 'Agent verification loop',
      tokens: ['request intake', 'repo scan', 'evidence capture', 'narrow patch'],
    },
    editor: {
      artifact: 'Preview and generated output read the same product contract',
      description: 'Editable state, runtime behavior, and generated output stay on one contract.',
      output: 'Variant state resolves through the canonical model before preview or export.',
      owner: 'Editor state model',
      title: 'State/output parity',
      tokens: ['variant owner', 'preview state', 'export contract', 'artifact check'],
    },
    ops: {
      artifact: 'Workflow state ties UI, API contracts, permissions, and deployment evidence',
      description: 'Operational UI work is treated as workflow state, not only forms and tables.',
      output: 'Approval, settlement, notification, and permission paths are reviewed through one operations contract.',
      owner: 'B2B operations console',
      title: 'Workflow-state console',
      tokens: ['approval flow', 'API contract', 'permissions', 'migration path'],
    },
  },
  ko: {
    agent: {
      artifact: '추적 가능한 마무리: 커밋, 배포 노트, 이슈 상태',
      description: '요청은 담당 코드 경로, 근거, 검증이 맞을 때만 완료합니다.',
      output: 'AI 제안은 담당 경로 검토와 회귀 검증 뒤에 적용합니다.',
      owner: 'AI 보조 작업 흐름',
      title: '에이전트 검증 루프',
      tokens: ['요청 접수', '저장소 스캔', '증거 캡처', '좁은 수정'],
    },
    editor: {
      artifact: '미리보기와 생성 결과물이 같은 제품 기준을 따름',
      description: '편집 상태, 런타임 동작, 생성 결과물을 하나의 기준에 맞춥니다.',
      output: 'Variant 상태는 미리보기나 내보내기 전에 기준 모델로 해석됩니다.',
      owner: '에디터 상태 모델',
      title: '상태와 결과물 일관성',
      tokens: ['Variant 책임', '미리보기 상태', '내보내기 기준', '결과물 확인'],
    },
    ops: {
      artifact: '업무 상태가 UI, API 계약, 권한, 배포 근거와 연결됨',
      description: '운영 UI 작업을 폼과 테이블 구현이 아니라 업무 상태로 봅니다.',
      output: '승인, 정산, 알림, 권한 경로를 하나의 운영 기준으로 검토합니다.',
      owner: 'B2B 운영 콘솔',
      title: '업무 상태 콘솔',
      tokens: ['승인 흐름', 'API 계약', '권한', '마이그레이션 경로'],
    },
  },
};

const labels = {
  en: {
    artifact: 'Artifact',
    checks: 'Verification Checks',
    contract: 'Single contract',
    eyebrow: 'Live Front-End Proof',
    mode: 'Mode',
    output: 'Computed Output',
    owner: 'Owner',
    publicSafe: 'Public-safe summary',
    regression: 'Regression coverage',
    release: 'Release/deploy check',
    statusReady: 'Ready to close',
    statusReview: 'Needs review',
    title: 'A small state-to-output console built into this portfolio',
  },
  ko: {
    artifact: '결과물',
    checks: '검증 항목',
    contract: '공통 기준',
    eyebrow: '실시간 프론트엔드 근거',
    mode: '모드',
    output: '확인된 결과',
    owner: '담당 경로',
    publicSafe: '공개 가능한 요약',
    regression: '회귀 검증',
    release: '릴리즈/배포 확인',
    statusReady: '완료 가능',
    statusReview: '검토 필요',
    title: '포트폴리오 안에서 직접 동작하는 상태-결과물 콘솔',
  },
};

const workModes = ['agent', 'editor', 'ops'] as const satisfies readonly WorkMode[];
const toggleKeys = ['contract', 'publicSafe', 'regression', 'release'] as const satisfies readonly ToggleKey[];

export function LiveEvidenceConsole({ locale }: Readonly<{ locale: Locale }>) {
  const [mode, setMode] = useUrlQueryState<WorkMode>({
    defaultValue: 'editor',
    key: 'evidenceMode',
    values: workModes,
  });
  const [enabledToggles, setToggleEnabled] = useUrlQueryListState<ToggleKey>({
    defaultValues: toggleKeys,
    key: 'evidenceChecks',
    values: toggleKeys,
  });
  const toggles = useMemo<Record<ToggleKey, boolean>>(
    () => ({
      contract: enabledToggles.has('contract'),
      publicSafe: enabledToggles.has('publicSafe'),
      regression: enabledToggles.has('regression'),
      release: enabledToggles.has('release'),
    }),
    [enabledToggles],
  );
  const copy = modeCopy[locale][mode];
  const label = labels[locale];

  const verificationChecks = useMemo(() => {
    const modeChecks = getModeChecks(locale, mode);
    return [
      toggles.contract ? modeChecks.contract : modeChecks.contractMissing,
      toggles.regression ? modeChecks.regression : modeChecks.regressionMissing,
      toggles.publicSafe ? modeChecks.publicSafe : modeChecks.publicSafeMissing,
      toggles.release ? modeChecks.release : modeChecks.releaseQueued,
    ];
  }, [locale, mode, toggles]);
  const ready = toggles.contract && toggles.regression && toggles.publicSafe && toggles.release;

  return (
    <Panel as="section" className="mt-10 overflow-hidden">
      <div className="border-b border-[var(--border)] bg-[var(--surface-strong)] px-5 py-5 md:flex md:items-end md:justify-between md:gap-8">
        <div>
          <p className={ds.text.eyebrow}>{label.eyebrow}</p>
          <h2 className="mt-2 text-2xl font-semibold">{label.title}</h2>
        </div>
        <Badge className="mt-3 md:mt-0" variant={ready ? 'strong' : 'surface'}>
          {ready ? label.statusReady : label.statusReview}
        </Badge>
      </div>

      <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
        <div className="border-b border-[var(--border)] p-5 lg:border-b-0 lg:border-r">
          <p className={ds.text.eyebrowMuted}>{label.mode}</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3" role="group" aria-label={label.mode}>
            {workModes.map((item) => (
              <button
                aria-pressed={mode === item}
                className={cx(
                  'min-h-11 rounded-md border px-3 text-left text-sm font-semibold transition',
                  mode === item
                    ? 'border-[var(--text-primary)] bg-[var(--text-primary)] text-white'
                    : 'border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] hover:bg-[var(--surface-strong)]',
                )}
                key={item}
                onClick={() => setMode(item)}
                type="button"
              >
                {modeCopy[locale][item].title}
              </button>
            ))}
          </div>

          <div className="mt-5 grid gap-3">
            {toggleKeys.map((key) => (
              <label className="flex min-h-11 items-center justify-between gap-3 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3" key={key}>
                <span className="text-sm font-semibold text-[var(--text-primary)]">{label[key]}</span>
                <input
                  checked={toggles[key]}
                  className="size-5 accent-[var(--text-primary)]"
                  onChange={(event) => setToggleEnabled(key, event.target.checked)}
                  type="checkbox"
                />
              </label>
            ))}
          </div>
        </div>

        <div className="p-5">
          <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className={ds.text.eyebrowMuted}>{label.owner}</p>
              <h3 className="mt-2 text-xl font-semibold">{copy.owner}</h3>
              <p className={cx('mt-2', ds.text.bodySmall)}>{copy.description}</p>
              <BadgeList className="mt-4" items={copy.tokens} variant="strong" />
            </div>
            <div className="rounded-md border border-[var(--border)] bg-[var(--background)] p-4">
              <p className={ds.text.eyebrowMuted}>{label.output}</p>
              <p className={cx('mt-3', ds.text.primarySmall)}>{copy.output}</p>
              <div className="mt-4 border-t border-[var(--border)] pt-4">
                <p className={ds.text.eyebrowMuted}>{label.artifact}</p>
                <p className={cx('mt-2', ds.text.bodySmall)}>{copy.artifact}</p>
              </div>
            </div>
          </div>

          <div className="mt-5 border-t border-[var(--border)] pt-4">
            <p className={ds.text.eyebrowMuted}>{label.checks}</p>
            <div className="mt-3 grid gap-2 md:grid-cols-2">
              {verificationChecks.map((check) => (
                <div className="flex items-start gap-2 rounded-md bg-[var(--surface-strong)] px-3 py-2" key={check}>
                  <span className={cx('mt-1 size-2 shrink-0 rounded-full', check.includes('!') ? 'bg-[var(--accent-amber)]' : 'bg-[var(--accent-green)]')} />
                  <span className="text-sm leading-6 text-[var(--text-secondary)]">{check.replace('!', '')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Panel>
  );
}

function getModeChecks(locale: Locale, mode: WorkMode) {
  const checks = {
    en: {
      agent: {
        contract: 'Owner path confirmed before patch',
        contractMissing: '!Owner path still ambiguous',
        publicSafe: 'Summary avoids private issue details',
        publicSafeMissing: '!Public-safe wording not reviewed',
        regression: 'Source and route checks passed',
        regressionMissing: '!Regression evidence missing',
        release: 'Commit/deploy note attached',
        releaseQueued: '!Ship note queued after verification',
      },
      editor: {
        contract: 'Preview and export share one rule',
        contractMissing: '!Preview/export rule split',
        publicSafe: 'Evidence is anonymized',
        publicSafeMissing: '!Evidence copy needs anonymization',
        regression: 'Generated artifact checked',
        regressionMissing: '!Artifact review missing',
        release: 'Route surface documented',
        releaseQueued: '!Route documentation queued',
      },
      ops: {
        contract: 'Workflow state and API contract agree',
        contractMissing: '!Workflow rule split across UI and API',
        publicSafe: 'Operations details are anonymized',
        publicSafeMissing: '!Operations copy needs anonymization',
        regression: 'Route and state checks passed',
        regressionMissing: '!Operational state review missing',
        release: 'Deploy path is documented',
        releaseQueued: '!Deploy path still queued',
      },
    },
    ko: {
      agent: {
        contract: '수정 전 담당 경로 확인',
        contractMissing: '!담당 경로가 아직 모호함',
        publicSafe: '비공개 이슈 세부사항 제거',
        publicSafeMissing: '!공개 가능한 문구 검토 필요',
        regression: '소스와 라우트 검사 통과',
        regressionMissing: '!회귀 검증 근거 없음',
        release: '커밋/배포 노트 연결',
        releaseQueued: '!검증 후 마무리 노트 대기',
      },
      editor: {
        contract: '미리보기와 내보내기가 하나의 규칙 공유',
        contractMissing: '!미리보기/내보내기 규칙이 분리됨',
        publicSafe: '근거 문구 익명화 완료',
        publicSafeMissing: '!근거 문구 익명화 필요',
        regression: '생성 결과물 확인',
        regressionMissing: '!결과물 검토 누락',
        release: '라우트 화면 문서화',
        releaseQueued: '!라우트 문서화 대기',
      },
      ops: {
        contract: '업무 상태와 API 계약이 같은 기준 사용',
        contractMissing: '!업무 규칙이 UI와 API에 분리됨',
        publicSafe: '운영 세부사항 익명화 완료',
        publicSafeMissing: '!운영 문구 익명화 필요',
        regression: '라우트와 상태 검사 통과',
        regressionMissing: '!운영 상태 검토 누락',
        release: '배포 경로 문서화',
        releaseQueued: '!배포 경로 정리 대기',
      },
    },
  };

  return checks[locale][mode];
}
