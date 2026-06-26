import type {
  EditorLayer,
  EditorLayerStyle,
  EditorPrototypeAST,
  LiteralExpression,
  ObjectExpression,
  TagTemplate,
} from '@/lib/editor-prototype-data';

export const editorCanvasFrame = {
  width: 1440,
  height: 900,
} as const;

type GeometryKey = 'x' | 'y' | 'width' | 'height';
type ResizeHandle = 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw';

export function evaluateAstToLayers(ast: EditorPrototypeAST) {
  return ast.program.templateOrder
    .map((templateId) => ast.program.templatesById[templateId])
    .filter((template): template is TagTemplate => Boolean(template))
    .map((template) => templateToLayer(template, ast));
}

export function templateToLayer(template: TagTemplate, ast: EditorPrototypeAST): EditorLayer {
  const evaluatedStyle = evaluateStyleObject(template.props.style);

  return {
    id: template.id,
    kind: template.meta.kind,
    name: template.meta.name,
    parentId: findParentTemplateId(ast, template.id),
    text: String(evaluateLiteral(template.props.text) ?? ''),
    x: numberFromStyle(evaluatedStyle.x, 0),
    y: numberFromStyle(evaluatedStyle.y, 0),
    width: numberFromStyle(evaluatedStyle.width, 1),
    height: numberFromStyle(evaluatedStyle.height, 1),
    style: {
      background: stringFromStyle(evaluatedStyle.background, 'transparent'),
      borderColor: stringFromStyle(evaluatedStyle.borderColor, 'transparent'),
      color: stringFromStyle(evaluatedStyle.color, '#111827'),
      fontSize: numberFromStyle(evaluatedStyle.fontSize, 16),
      fontWeight: numberFromStyle(evaluatedStyle.fontWeight, 500),
      opacity: numberFromStyle(evaluatedStyle.opacity, 1),
      radius: numberFromStyle(evaluatedStyle.radius, 0),
    },
  };
}

export function evaluateStyleObject(style: ObjectExpression): Record<string, string | number> {
  return Object.fromEntries(
    Object.entries(style.properties).map(([key, expression]) => [key, evaluateLiteral(expression)]),
  );
}

export function writeTemplateStyleValue(
  template: TagTemplate,
  key: keyof EditorLayerStyle | GeometryKey,
  value: string | number,
) {
  template.props.style.properties[key] = {
    type: 'Literal',
    value,
  };
}

export function translateTemplate(options: {
  ast: EditorPrototypeAST;
  templateId: string;
  deltaX: number;
  deltaY: number;
}) {
  const { ast, templateId, deltaX, deltaY } = options;
  const movingIds = [templateId, ...getDescendantTemplateIds(ast, templateId)];

  for (const movingId of movingIds) {
    const template = ast.program.templatesById[movingId];
    if (!template) {
      continue;
    }

    const layer = templateToLayer(template, ast);
    writeTemplateStyleValue(template, 'x', Math.round(layer.x + deltaX));
    writeTemplateStyleValue(template, 'y', Math.round(layer.y + deltaY));
  }
}

export function updateTemplateGeometry(options: {
  ast: EditorPrototypeAST;
  templateId: string;
  key: GeometryKey;
  value: number;
}) {
  const { ast, templateId, key, value } = options;
  const template = ast.program.templatesById[templateId];

  if (!template) {
    return;
  }

  const layer = templateToLayer(template, ast);

  if (key === 'x' || key === 'y') {
    translateTemplate({
      ast,
      deltaX: key === 'x' ? value - layer.x : 0,
      deltaY: key === 'y' ? value - layer.y : 0,
      templateId,
    });
    return;
  }

  writeTemplateStyleValue(template, key, Math.max(1, Math.round(value)));
}

export function resizeTemplate(options: {
  ast: EditorPrototypeAST;
  templateId: string;
  handle: ResizeHandle;
  deltaX: number;
  deltaY: number;
}) {
  const { ast, templateId, handle, deltaX, deltaY } = options;
  const template = ast.program.templatesById[templateId];

  if (!template) {
    return;
  }

  const layer = templateToLayer(template, ast);
  const next = {
    height: layer.height,
    width: layer.width,
    x: layer.x,
    y: layer.y,
  };

  if (handle.includes('e')) {
    next.width = Math.max(24, layer.width + deltaX);
  }
  if (handle.includes('s')) {
    next.height = Math.max(24, layer.height + deltaY);
  }
  if (handle.includes('w')) {
    const width = Math.max(24, layer.width - deltaX);
    next.x = layer.x + (layer.width - width);
    next.width = width;
  }
  if (handle.includes('n')) {
    const height = Math.max(24, layer.height - deltaY);
    next.y = layer.y + (layer.height - height);
    next.height = height;
  }

  writeTemplateStyleValue(template, 'x', Math.round(next.x));
  writeTemplateStyleValue(template, 'y', Math.round(next.y));
  writeTemplateStyleValue(template, 'width', Math.round(next.width));
  writeTemplateStyleValue(template, 'height', Math.round(next.height));
}

export function updateTemplateStyle<Key extends keyof EditorLayerStyle>(options: {
  ast: EditorPrototypeAST;
  templateId: string;
  key: Key;
  value: EditorLayerStyle[Key];
}) {
  const template = options.ast.program.templatesById[options.templateId];

  if (!template) {
    return;
  }

  writeTemplateStyleValue(template, options.key, options.value);
}

export function moveTemplateBefore(options: {
  ast: EditorPrototypeAST;
  sourceTemplateId: string;
  targetTemplateId: string;
}) {
  const { ast, sourceTemplateId, targetTemplateId } = options;

  if (sourceTemplateId === targetTemplateId) {
    return;
  }

  const sourceIndex = ast.program.templateOrder.indexOf(sourceTemplateId);
  const targetIndex = ast.program.templateOrder.indexOf(targetTemplateId);

  if (sourceIndex < 0 || targetIndex < 0) {
    return;
  }

  ast.program.templateOrder.splice(sourceIndex, 1);
  const nextTargetIndex = ast.program.templateOrder.indexOf(targetTemplateId);
  ast.program.templateOrder.splice(nextTargetIndex, 0, sourceTemplateId);
}

export function getLayerDepth(layer: EditorLayer, layers: EditorLayer[]) {
  let depth = 0;
  let parentId = layer.parentId;

  while (parentId) {
    depth += 1;
    parentId = layers.find((candidate) => candidate.id === parentId)?.parentId;
  }

  return depth;
}

export function buildLayerPath(layer: EditorLayer, layers: EditorLayer[]) {
  const path = [layer.name];
  let parentId = layer.parentId;

  while (parentId) {
    const parentLayer = layers.find((candidate) => candidate.id === parentId);
    if (!parentLayer) {
      break;
    }

    path.unshift(parentLayer.name);
    parentId = parentLayer.parentId;
  }

  return path;
}

export function buildHtmlPreview(ast: EditorPrototypeAST) {
  const layers = evaluateAstToLayers(ast);
  const body = layers
    .map((layer) => {
      const content = layer.kind === 'frame' ? '' : escapeHtml(layer.text);
      const display = layer.kind === 'frame' ? 'block' : 'grid';
      const placeItems = layer.kind === 'text' ? 'center start' : 'center';
      const padding = layer.kind === 'text' ? 12 : 0;

      return `<div class="layer ${layer.kind}" data-layer-id="${escapeHtml(layer.id)}" style="left:${layer.x}px;top:${layer.y}px;width:${layer.width}px;height:${layer.height}px;background:${layer.style.background};border-color:${layer.style.borderColor};color:${layer.style.color};font-size:${layer.style.fontSize}px;font-weight:${layer.style.fontWeight};border-radius:${layer.style.radius}px;opacity:${layer.style.opacity};display:${display};place-items:${placeItems};padding:${padding}px;">${content}</div>`;
    })
    .join('\n      ');

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Portfolio editor HTML preview</title>
    <style>
      * { box-sizing: border-box; }
      body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #f3f4f6; font-family: Arial, sans-serif; }
      .stage { position: relative; width: ${editorCanvasFrame.width}px; height: ${editorCanvasFrame.height}px; overflow: hidden; background: white; border: 1px solid #e5e7eb; }
      .layer { position: absolute; border: 1px solid; line-height: 1.15; white-space: pre-wrap; }
      .media { background-image: linear-gradient(135deg, #d1d5db, #f3f4f6); }
    </style>
  </head>
  <body>
    <main class="stage">
      ${body}
    </main>
  </body>
</html>`;
}

export function getIntersectingLayerIds(options: {
  bounds: { height: number; width: number; x: number; y: number };
  layers: EditorLayer[];
}) {
  const { bounds, layers } = options;

  return layers
    .filter((layer) => layer.id !== 'home')
    .filter((layer) =>
      layer.x < bounds.x + bounds.width &&
      layer.x + layer.width > bounds.x &&
      layer.y < bounds.y + bounds.height &&
      layer.y + layer.height > bounds.y,
    )
    .map((layer) => layer.id);
}

function evaluateLiteral(expression: LiteralExpression) {
  return expression.value;
}

function findParentTemplateId(ast: EditorPrototypeAST, templateId: string) {
  return Object.values(ast.program.templatesById).find((template) => template.children.includes(templateId))?.id;
}

function getDescendantTemplateIds(ast: EditorPrototypeAST, templateId: string) {
  const descendants: string[] = [];
  const pending = [templateId];

  while (pending.length > 0) {
    const currentId = pending.pop();
    if (!currentId) {
      continue;
    }

    const template = ast.program.templatesById[currentId];
    if (!template) {
      continue;
    }

    for (const childId of template.children) {
      descendants.push(childId);
      pending.push(childId);
    }
  }

  return descendants;
}

function numberFromStyle(value: string | number | undefined, fallback: number) {
  if (typeof value === 'number') {
    return value;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function stringFromStyle(value: string | number | undefined, fallback: string) {
  return value === undefined ? fallback : String(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
