'use client';

import { useMemo, useState } from 'react';

import { Badge, BadgeList, Panel } from '@/components/ui';
import { cx, ds } from '@/lib/design-system';

type Locale = 'en' | 'ko';
type WorkMode = 'agent' | 'editor' | 'mobile';
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
    mobile: {
      artifact: 'Release readiness ties config, runtime, widgets, and store evidence',
      description: 'Mobile UI work is treated as part of release readiness, not only screen delivery.',
      output: 'Runtime config, native policy, and smoke evidence are evaluated together.',
      owner: 'Mobile release surface',
      title: 'Release gate surface',
      tokens: ['Expo config', 'runtime env', 'WidgetKit', 'store metadata'],
    },
  },
  ko: {
    agent: {
      artifact: '추적 가능한 마무리: 커밋, 배포 노트, 이슈 상태',
      description: '요청은 소유 경로, 증거, 검증이 맞을 때만 닫습니다.',
      output: 'AI 제안은 소유 경로 검토와 회귀 검증 뒤에 적용합니다.',
      owner: 'AI 보조 작업 흐름',
      title: '에이전트 검증 루프',
      tokens: ['요청 접수', 'repo 스캔', '증거 캡처', '좁은 수정'],
    },
    editor: {
      artifact: '미리보기와 생성 산출물이 같은 제품 계약을 읽음',
      description: '편집 상태, 런타임 동작, 생성 산출물을 하나의 계약에 맞춥니다.',
      output: 'Variant 상태는 미리보기나 export 전에 기준 모델을 통해 해석됩니다.',
      owner: '에디터 상태 모델',
      title: '상태/산출물 정합성',
      tokens: ['Variant 소유', '미리보기 상태', 'export 계약', '산출물 확인'],
    },
    mobile: {
      artifact: '설정, 런타임, 위젯, 스토어 근거가 릴리즈 준비로 연결됨',
      description: '모바일 UI 작업을 화면 구현이 아니라 릴리즈 준비의 일부로 봅니다.',
      output: '런타임 설정, 네이티브 정책, 스모크 근거를 함께 평가합니다.',
      owner: '모바일 릴리즈 표면',
      title: '릴리즈 게이트 표면',
      tokens: ['Expo 설정', '런타임 환경', 'WidgetKit', '스토어 메타데이터'],
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
    release: 'Release gate',
    statusReady: 'Ready to close',
    statusReview: 'Needs review',
    title: 'A small state-to-output console built into this portfolio',
  },
  ko: {
    artifact: '산출물',
    checks: '검증 항목',
    contract: '단일 계약',
    eyebrow: '라이브 프론트엔드 증거',
    mode: '모드',
    output: '계산된 출력',
    owner: '소유 경로',
    publicSafe: '공개 가능한 요약',
    regression: '회귀 검증',
    release: '릴리즈 게이트',
    statusReady: '닫을 수 있음',
    statusReview: '검토 필요',
    title: '포트폴리오 안에서 직접 동작하는 상태-산출물 콘솔',
  },
};

export function LiveEvidenceConsole({ locale }: Readonly<{ locale: Locale }>) {
  const [mode, setMode] = useState<WorkMode>('editor');
  const [toggles, setToggles] = useState<Record<ToggleKey, boolean>>({
    contract: true,
    publicSafe: true,
    regression: true,
    release: true,
  });
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
  const ready = toggles.contract && toggles.regression && toggles.publicSafe && (mode !== 'mobile' || toggles.release);

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
            {(Object.keys(modeCopy[locale]) as WorkMode[]).map((item) => (
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
            {(Object.keys(toggles) as ToggleKey[]).map((key) => (
              <label className="flex min-h-11 items-center justify-between gap-3 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3" key={key}>
                <span className="text-sm font-semibold text-[var(--text-primary)]">{label[key]}</span>
                <input
                  checked={toggles[key]}
                  className="size-5 accent-[var(--text-primary)]"
                  onChange={(event) => setToggles((current) => ({ ...current, [key]: event.target.checked }))}
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
      mobile: {
        contract: 'Config and runtime read one release model',
        contractMissing: '!Release model split across files',
        publicSafe: 'Store-facing copy is public-safe',
        publicSafeMissing: '!Store copy needs review',
        regression: 'Smoke evidence captured',
        regressionMissing: '!Smoke evidence missing',
        release: 'Release gate is complete',
        releaseQueued: '!Release gate still open',
      },
    },
    ko: {
      agent: {
        contract: '수정 전 소유 경로 확인',
        contractMissing: '!소유 경로가 아직 모호함',
        publicSafe: '비공개 이슈 세부사항 제거',
        publicSafeMissing: '!공개 가능한 문구 검토 필요',
        regression: '소스와 라우트 검사 통과',
        regressionMissing: '!회귀 검증 근거 없음',
        release: '커밋/배포 노트 연결',
        releaseQueued: '!검증 후 마무리 노트 대기',
      },
      editor: {
        contract: '미리보기와 export가 하나의 규칙 공유',
        contractMissing: '!미리보기/export 규칙이 분리됨',
        publicSafe: '근거가 익명화됨',
        publicSafeMissing: '!근거 문구 익명화 필요',
        regression: '생성 산출물 확인',
        regressionMissing: '!산출물 검토 누락',
        release: '라우트 표면 문서화',
        releaseQueued: '!라우트 문서화 대기',
      },
      mobile: {
        contract: '설정과 런타임이 하나의 릴리즈 모델 참조',
        contractMissing: '!릴리즈 모델이 여러 파일에 분리됨',
        publicSafe: '스토어 노출 문구가 공개 안전함',
        publicSafeMissing: '!스토어 문구 검토 필요',
        regression: '스모크 근거 캡처',
        regressionMissing: '!스모크 근거 누락',
        release: '릴리즈 게이트 완료',
        releaseQueued: '!릴리즈 게이트 열림',
      },
    },
  };

  return checks[locale][mode];
}
