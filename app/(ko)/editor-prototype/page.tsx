import { EditorPrototype } from '@/components/editor-prototype';
import { editorPrototypeCopyKo } from '@/lib/editor-prototype-data';

export const metadata = {
  title: '에디터 프로토타입',
  description:
    '레이어, 캔버스, 스타일 인스펙터, HTML preview export를 포함한 라이트 비주얼 에디터 포트폴리오 프로토타입.',
};

export default function KoreanEditorPrototypePage() {
  return (
    <main>
      <EditorPrototype copy={editorPrototypeCopyKo} />
    </main>
  );
}
