import { EditorPrototype } from '@/components/editor-prototype';
import { editorPrototypeCopyEn } from '@/lib/editor-prototype-data';

export const metadata = {
  title: 'Editor Prototype',
  description:
    'Interactive portfolio prototype for a lightweight visual editor with layers, canvas, style inspector, and HTML preview export.',
};

export default function EditorPrototypePage() {
  return (
    <main>
      <EditorPrototype copy={editorPrototypeCopyEn} />
    </main>
  );
}
