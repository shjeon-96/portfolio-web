export type EditorLayerKind = 'frame' | 'text' | 'button' | 'media';

export type LiteralExpression = {
  type: 'Literal';
  value: string | number;
};

export type ObjectExpression = {
  type: 'ObjectExpression';
  properties: Record<string, LiteralExpression>;
};

export type TagTemplate = {
  type: 'TagTemplate';
  id: string;
  tag: 'section' | 'div' | 'span' | 'button';
  children: string[];
  meta: {
    name: string;
    kind: EditorLayerKind;
  };
  props: {
    text: LiteralExpression;
    style: ObjectExpression;
  };
};

export type EditorPrototypeAST = {
  type: 'EditorASTState';
  program: {
    rootTemplateId: string;
    templateOrder: string[];
    templatesById: Record<string, TagTemplate>;
  };
};

export type EditorLayerStyle = {
  background: string;
  borderColor: string;
  color: string;
  fontSize: number;
  fontWeight: number;
  radius: number;
  opacity: number;
};

export type EditorLayer = {
  id: string;
  name: string;
  kind: EditorLayerKind;
  x: number;
  y: number;
  width: number;
  height: number;
  text: string;
  parentId?: string;
  style: EditorLayerStyle;
};

export type EditorPrototypeCopy = {
  eyebrow: string;
  title: string;
  description: string;
  toolbarTitle: string;
  toolbarStatus: string;
  projectName: string;
  pageName: string;
  saveStatus: string;
  privacy: string;
  author: string;
  layerPanelTitle: string;
  canvasTitle: string;
  stylePanelTitle: string;
  styleTab: string;
  exportButton: string;
  previewTitle: string;
  previewDescription: string;
  mobileNotice: {
    title: string;
    description: string;
  };
  noSelection: string;
  controls: {
    fill: string;
    text: string;
    border: string;
    radius: string;
    fontSize: string;
    opacity: string;
  };
  selection: {
    selected: string;
    rendered: string;
    component: string;
  };
  badges: string[];
};

function literal(value: string | number): LiteralExpression {
  return { type: 'Literal', value };
}

function style(properties: Record<string, string | number>): ObjectExpression {
  return {
    type: 'ObjectExpression',
    properties: Object.fromEntries(
      Object.entries(properties).map(([key, value]) => [key, literal(value)]),
    ),
  };
}

function template(options: {
  id: string;
  name: string;
  kind: EditorLayerKind;
  tag: TagTemplate['tag'];
  children?: string[];
  text?: string;
  style: Record<string, string | number>;
}): TagTemplate {
  return {
    type: 'TagTemplate',
    id: options.id,
    tag: options.tag,
    children: options.children ?? [],
    meta: {
      kind: options.kind,
      name: options.name,
    },
    props: {
      text: literal(options.text ?? ''),
      style: style(options.style),
    },
  };
}

export const initialEditorAst: EditorPrototypeAST = {
  type: 'EditorASTState',
  program: {
    rootTemplateId: 'home',
    templateOrder: [
      'home',
      'main-header',
      'search',
      'featured-image',
      'grid',
      'grid-container',
      'grid-item-1',
      'grid-item-2',
      'grid-item-3',
      'grid-item-4',
      'product-copy',
    ],
    templatesById: {
      home: template({
        id: 'home',
        name: 'Home',
        kind: 'frame',
        tag: 'section',
        children: ['main-header', 'search', 'featured-image', 'grid'],
        style: {
          x: 0,
          y: 0,
          width: 1440,
          height: 900,
          background: '#ffffff',
          borderColor: '#e5e7eb',
          color: '#111827',
          fontSize: 16,
          fontWeight: 500,
          radius: 0,
          opacity: 1,
        },
      }),
      'main-header': template({
        id: 'main-header',
        name: 'Main header',
        kind: 'text',
        tag: 'span',
        text: 'Purudeon Farm',
        style: {
          x: 88,
          y: 36,
          width: 300,
          height: 42,
          background: 'transparent',
          borderColor: 'transparent',
          color: '#0ea51b',
          fontSize: 32,
          fontWeight: 800,
          radius: 0,
          opacity: 1,
        },
      }),
      search: template({
        id: 'search',
        name: 'Search input',
        kind: 'text',
        tag: 'span',
        text: 'Search product or collection',
        style: {
          x: 560,
          y: 35,
          width: 420,
          height: 44,
          background: '#ffffff',
          borderColor: '#22c55e',
          color: '#9ca3af',
          fontSize: 15,
          fontWeight: 500,
          radius: 999,
          opacity: 1,
        },
      }),
      'featured-image': template({
        id: 'featured-image',
        name: 'Featured image',
        kind: 'media',
        tag: 'div',
        text: 'Body',
        style: {
          x: 640,
          y: 130,
          width: 180,
          height: 132,
          background: '#e5e7eb',
          borderColor: '#e5e7eb',
          color: '#9ca3af',
          fontSize: 13,
          fontWeight: 600,
          radius: 0,
          opacity: 1,
        },
      }),
      grid: template({
        id: 'grid',
        name: 'Product grid',
        kind: 'frame',
        tag: 'div',
        children: ['grid-container'],
        style: {
          x: 72,
          y: 312,
          width: 1296,
          height: 348,
          background: 'transparent',
          borderColor: 'transparent',
          color: '#111827',
          fontSize: 16,
          fontWeight: 500,
          radius: 0,
          opacity: 1,
        },
      }),
      'grid-container': template({
        id: 'grid-container',
        name: 'grid-container',
        kind: 'frame',
        tag: 'div',
        children: ['grid-item-1', 'grid-item-2', 'grid-item-3', 'grid-item-4', 'product-copy'],
        style: {
          x: 0,
          y: 456,
          width: 1440,
          height: 224,
          background: '#eff6ff',
          borderColor: '#3b82f6',
          color: '#111827',
          fontSize: 16,
          fontWeight: 500,
          radius: 0,
          opacity: 0.72,
        },
      }),
      'grid-item-1': template({
        id: 'grid-item-1',
        name: 'grid-item',
        kind: 'media',
        tag: 'div',
        text: 'Body',
        style: {
          x: 136,
          y: 484,
          width: 188,
          height: 132,
          background: '#d1d5db',
          borderColor: '#d1d5db',
          color: '#9ca3af',
          fontSize: 13,
          fontWeight: 600,
          radius: 0,
          opacity: 1,
        },
      }),
      'grid-item-2': template({
        id: 'grid-item-2',
        name: 'grid-item',
        kind: 'media',
        tag: 'div',
        text: 'Body',
        style: {
          x: 456,
          y: 484,
          width: 188,
          height: 132,
          background: '#d1d5db',
          borderColor: '#d1d5db',
          color: '#9ca3af',
          fontSize: 13,
          fontWeight: 600,
          radius: 0,
          opacity: 1,
        },
      }),
      'grid-item-3': template({
        id: 'grid-item-3',
        name: 'grid-item',
        kind: 'media',
        tag: 'div',
        text: 'Body',
        style: {
          x: 776,
          y: 484,
          width: 188,
          height: 132,
          background: '#d1d5db',
          borderColor: '#d1d5db',
          color: '#9ca3af',
          fontSize: 13,
          fontWeight: 600,
          radius: 0,
          opacity: 1,
        },
      }),
      'grid-item-4': template({
        id: 'grid-item-4',
        name: 'grid-item',
        kind: 'media',
        tag: 'div',
        text: 'Body',
        style: {
          x: 1096,
          y: 484,
          width: 188,
          height: 132,
          background: '#d1d5db',
          borderColor: '#d1d5db',
          color: '#9ca3af',
          fontSize: 13,
          fontWeight: 600,
          radius: 0,
          opacity: 1,
        },
      }),
      'product-copy': template({
        id: 'product-copy',
        name: 'Body label',
        kind: 'text',
        tag: 'span',
        text: 'Body',
        style: {
          x: 150,
          y: 622,
          width: 156,
          height: 28,
          background: 'transparent',
          borderColor: 'transparent',
          color: '#6b7280',
          fontSize: 13,
          fontWeight: 500,
          radius: 0,
          opacity: 1,
        },
      }),
    },
  },
};

export const editorPrototypeCopyEn: EditorPrototypeCopy = {
  eyebrow: 'Interactive prototype',
  title: 'Lightweight visual editor engine',
  description:
    'A public-safe portfolio prototype inspired by AST-based editor work: layer selection, canvas rendering, style editing, and HTML preview/export in one compact flow.',
  toolbarTitle: 'Page editor',
  toolbarStatus: 'HTML output only',
  projectName: '312',
  pageName: 'Home',
  saveStatus: 'All changes saved',
  privacy: 'Private',
  author: 'Seunghun Jeon',
  layerPanelTitle: 'Layers',
  canvasTitle: 'Canvas',
  stylePanelTitle: 'Inspector',
  styleTab: 'Style',
  exportButton: 'Export HTML preview',
  previewTitle: 'HTML preview',
  previewDescription: 'The preview is generated from the same AST currently rendered on the canvas.',
  mobileNotice: {
    title: 'Desktop prototype',
    description:
      'This interactive editor uses a three-panel desktop canvas. Open it on a wider screen to inspect layers, canvas selection, style controls, and HTML preview export.',
  },
  noSelection: 'Select a layer from the left panel or canvas.',
  controls: {
    fill: 'Fill',
    text: 'Text',
    border: 'Border',
    radius: 'Radius',
    fontSize: 'Font size',
    opacity: 'Opacity',
  },
  selection: {
    selected: 'Selection',
    rendered: 'Rendered',
    component: 'Component',
  },
  badges: ['Layer tree', 'Canvas selection', 'Style inspector', 'HTML preview'],
};

export const editorPrototypeCopyKo: EditorPrototypeCopy = {
  eyebrow: '인터랙티브 프로토타입',
  title: '라이트 비주얼 에디터 엔진',
  description:
    'AST 기반 에디터 경험을 공개 가능한 포트폴리오용 축소판으로 재구성했습니다. 레이어 선택, 캔버스 렌더링, 스타일 편집, HTML preview/export 흐름을 한 화면에서 확인할 수 있습니다.',
  toolbarTitle: 'Page editor',
  toolbarStatus: 'HTML output only',
  projectName: '312',
  pageName: 'Home',
  saveStatus: '모든 변경 사항 저장됨',
  privacy: '비공개',
  author: '전승훈',
  layerPanelTitle: '레이어',
  canvasTitle: '캔버스',
  stylePanelTitle: '인스펙터',
  styleTab: '스타일',
  exportButton: 'HTML preview export',
  previewTitle: 'HTML 미리보기',
  previewDescription: '현재 캔버스에 렌더링된 AST를 기준으로 HTML preview를 생성합니다.',
  mobileNotice: {
    title: '데스크톱 프로토타입',
    description:
      '이 인터랙티브 에디터는 3패널 데스크톱 캔버스를 기준으로 동작합니다. 더 넓은 화면에서 레이어, 캔버스 선택, 스타일 컨트롤, HTML preview export 흐름을 확인할 수 있습니다.',
  },
  noSelection: '좌측 패널이나 캔버스에서 레이어를 선택하세요.',
  controls: {
    fill: '배경',
    text: '텍스트',
    border: '테두리',
    radius: 'Radius',
    fontSize: '글자 크기',
    opacity: 'Opacity',
  },
  selection: {
    selected: '선택',
    rendered: '렌더링',
    component: '컴포넌트',
  },
  badges: ['Layer tree', 'Canvas selection', 'Style inspector', 'HTML preview'],
};
