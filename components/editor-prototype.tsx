'use client';

import { useMemo, useRef, useState } from 'react';
import type { CSSProperties, PointerEvent } from 'react';
import {
  CheckCircle2,
  Code2,
  Eye,
  Frame,
  ImageIcon,
  Layers,
  Lock,
  MousePointer2,
  Move,
  PanelRight,
  PenLine,
  Plus,
  Rocket,
  Square,
  Type,
  X,
} from 'lucide-react';
import type { EditorLayer, EditorLayerStyle, EditorPrototypeCopy } from '@/lib/editor-prototype-data';
import {
  buildHtmlPreview,
  buildLayerPath,
  editorCanvasFrame,
  getLayerDepth,
} from '@/lib/editor-prototype-engine';
import { selectOrderedLayers, useEditorPrototypeStore } from '@/lib/editor-prototype-store';

type EditorPrototypeProps = {
  copy: EditorPrototypeCopy;
};

type SelectionMode = 'replace' | 'add' | 'toggle';
type ResizeHandle = 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw';

const desktopScale = 0.58;

export function EditorPrototype({ copy }: EditorPrototypeProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const ast = useEditorPrototypeStore((state) => state.ast);
  const selectedLayerIds = useEditorPrototypeStore((state) => state.selectedLayerIds);
  const selectLayer = useEditorPrototypeStore((state) => state.selectLayer);
  const moveLayer = useEditorPrototypeStore((state) => state.moveLayer);
  const moveLayerBeforeTarget = useEditorPrototypeStore((state) => state.moveLayerBeforeTarget);
  const resizeLayer = useEditorPrototypeStore((state) => state.resizeLayer);
  const rubberbandSelect = useEditorPrototypeStore((state) => state.rubberbandSelect);
  const updateSelectedGeometry = useEditorPrototypeStore((state) => state.updateSelectedGeometry);
  const updateSelectedStyle = useEditorPrototypeStore((state) => state.updateSelectedStyle);

  const layers = useMemo(() => selectOrderedLayers(ast), [ast]);
  const selectedLayerId = selectedLayerIds[0] ?? '';
  const selectedLayer = layers.find((layer) => layer.id === selectedLayerId) ?? null;
  const exportedHtml = useMemo(() => buildHtmlPreview(ast), [ast]);

  return (
    <>
      <h1 className="sr-only">{copy.title}</h1>
      <main className="min-h-screen bg-[var(--background)] px-5 py-10 text-[var(--text-primary)] lg:hidden">
        <section className="mx-auto max-w-md rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent-blue)]">{copy.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight">{copy.title}</h2>
          <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">{copy.description}</p>
          <div className="mt-6 rounded-lg border border-[var(--border)] bg-[var(--background)] p-4">
            <p className="font-semibold">{copy.mobileNotice.title}</p>
            <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
              {copy.mobileNotice.description}
            </p>
          </div>
          <div className="mt-6 grid gap-3">
            {copy.badges.map((badge) => (
              <span className="rounded-md border border-[var(--border)] px-3 py-2 text-sm text-[var(--text-secondary)]" key={badge}>
                {badge}
              </span>
            ))}
          </div>
        </section>
      </main>
      <main className="hidden h-screen overflow-hidden bg-[#e5e5e5] text-[var(--text-primary)] lg:block">
        <EditorTopBar copy={copy} isPreviewOpen={isPreviewOpen} onPreviewToggle={() => setIsPreviewOpen((current) => !current)} />
        <div className="grid h-[calc(100vh-56px)] grid-cols-[280px_minmax(0,1fr)_320px]">
          <LayerPanel
            copy={copy}
            layers={layers}
            onMoveLayerBefore={moveLayerBeforeTarget}
            selectedLayerIds={selectedLayerIds}
            onSelect={selectLayer}
          />
          <CanvasPanel
            copy={copy}
            layers={layers}
            onMoveLayer={moveLayer}
            onResizeLayer={resizeLayer}
            onRubberbandSelect={rubberbandSelect}
            selectedLayerIds={selectedLayerIds}
            onSelect={selectLayer}
          />
          <StylePanel
            copy={copy}
            layers={layers}
            selectedCount={selectedLayerIds.length}
            selectedLayer={selectedLayer}
            updateSelectedGeometry={updateSelectedGeometry}
            updateSelectedStyle={updateSelectedStyle}
          />
        </div>
        {isPreviewOpen ? (
          <PreviewOverlay copy={copy} exportedHtml={exportedHtml} onClose={() => setIsPreviewOpen(false)} />
        ) : null}
      </main>
    </>
  );
}

function EditorTopBar({
  copy,
  isPreviewOpen,
  onPreviewToggle,
}: Readonly<{
  copy: EditorPrototypeCopy;
  isPreviewOpen: boolean;
  onPreviewToggle: () => void;
}>) {
  return (
    <header className="grid h-14 grid-cols-[280px_minmax(0,1fr)_320px] border-b border-[#d7d7d7] bg-white">
      <div className="flex items-center gap-3 border-r border-[#e5e7eb] px-4">
        <div className="grid size-7 place-items-center rounded bg-[#4f46e5] text-white">
          <Frame size={16} strokeWidth={2.4} />
        </div>
        <div className="text-lg font-black">Page</div>
        <div className="h-6 w-px bg-[#e5e7eb]" />
        <div className="text-sm font-semibold">{copy.projectName}</div>
      </div>
      <div className="flex min-w-0 items-center justify-between gap-4 px-4">
        <div className="mx-auto flex min-w-[360px] items-center justify-center gap-2 rounded-full border border-[#e5e7eb] px-4 py-1.5 text-xs text-[#6b7280]">
          <Lock size={14} />
          <span className="truncate">{copy.toolbarStatus}</span>
          <span className="rounded-full bg-[#f3f4f6] px-2 py-0.5 font-semibold text-[#111827]">{copy.privacy}</span>
        </div>
      </div>
      <div className="flex items-center justify-end gap-3 px-4">
        <div className="text-right text-xs leading-4">
          <p className="flex items-center justify-end gap-1 font-semibold text-[#16a34a]">
            <CheckCircle2 size={13} />
            {copy.saveStatus}
          </p>
          <p className="text-[#6b7280]">{copy.author}</p>
        </div>
        <button
          aria-label={isPreviewOpen ? 'Close HTML preview' : 'Open HTML preview'}
          className="inline-flex min-h-11 items-center rounded-md border border-[#e5e7eb] bg-white px-3 py-2 text-sm font-semibold transition hover:bg-[#f9fafb]"
          onClick={onPreviewToggle}
          type="button"
        >
          {isPreviewOpen ? <X size={16} /> : <Eye size={16} />}
          <span className="ml-1.5">{isPreviewOpen ? copy.canvasTitle : copy.exportButton}</span>
        </button>
        <button
          aria-label="Deploy prototype"
          className="inline-flex min-h-11 items-center gap-1.5 rounded-md bg-[#4f46e5] px-3 py-2 text-sm font-semibold text-white"
          type="button"
        >
          <Rocket size={16} />
          Deploy
        </button>
      </div>
    </header>
  );
}

function LayerPanel({
  copy,
  layers,
  onMoveLayerBefore,
  selectedLayerIds,
  onSelect,
}: Readonly<{
  copy: EditorPrototypeCopy;
  layers: EditorLayer[];
  onMoveLayerBefore: (sourceLayerId: string, targetLayerId: string) => void;
  selectedLayerIds: string[];
  onSelect: (layerId: string, mode?: 'replace' | 'add' | 'toggle') => void;
}>) {
  const [draggingLayerId, setDraggingLayerId] = useState<string | null>(null);

  return (
    <aside className="min-h-0 border-r border-[#e5e7eb] bg-white">
      <div className="flex h-11 items-center justify-between border-b border-[#e5e7eb] px-4">
        <h2 className="flex items-center gap-2 text-sm font-semibold">
          <Layers size={16} />
          {copy.layerPanelTitle}
        </h2>
        <button aria-label="Add layer" className="grid size-11 place-items-center rounded-md text-[#6b7280] hover:bg-[#f3f4f6]" type="button">
          <Plus size={16} />
        </button>
      </div>
      <div className="border-b border-[#e5e7eb] px-4 py-3">
        <div className="rounded-lg bg-[#f3f4ff] px-3 py-3 text-sm font-semibold">{copy.pageName}</div>
      </div>
      <div className="h-[calc(100%-92px)] overflow-auto px-3 py-4">
        {layers.map((layer) => (
          <button
            className={`mb-1 flex min-h-11 w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition ${
              selectedLayerIds.includes(layer.id)
                ? 'bg-[#eef2ff] text-[#111827]'
                : 'text-[#4b5563] hover:bg-[#f9fafb] hover:text-[#111827]'
            } ${draggingLayerId === layer.id ? 'opacity-40' : ''}`}
            aria-label={`Select layer ${layer.name}`}
            draggable
            key={layer.id}
            onClick={(event) => onSelect(layer.id, event.metaKey || event.ctrlKey ? 'toggle' : event.shiftKey ? 'add' : 'replace')}
            onDragEnd={() => setDraggingLayerId(null)}
            onDragOver={(event) => event.preventDefault()}
            onDragStart={(event) => {
              event.dataTransfer.effectAllowed = 'move';
              event.dataTransfer.setData('text/plain', layer.id);
              setDraggingLayerId(layer.id);
              onSelect(layer.id);
            }}
            onDrop={(event) => {
              event.preventDefault();
              const sourceLayerId = event.dataTransfer.getData('text/plain');
              if (!sourceLayerId) {
                return;
              }
              onMoveLayerBefore(sourceLayerId, layer.id);
              setDraggingLayerId(null);
            }}
            style={{ paddingLeft: 12 + getLayerDepth(layer, layers) * 18 }}
            type="button"
          >
            <span className="flex min-w-0 items-center gap-2">
              <LayerKindIcon kind={layer.kind} />
              <span className="truncate">{layer.name}</span>
            </span>
            {selectedLayerIds.includes(layer.id) ? <span className="size-1.5 rounded-full bg-[#4f46e5]" /> : null}
          </button>
        ))}
      </div>
    </aside>
  );
}

function CanvasPanel({
  copy,
  layers,
  onMoveLayer,
  onResizeLayer,
  onRubberbandSelect,
  selectedLayerIds,
  onSelect,
}: Readonly<{
  copy: EditorPrototypeCopy;
  layers: EditorLayer[];
  onMoveLayer: (layerId: string, deltaX: number, deltaY: number) => void;
  onResizeLayer: (layerId: string, handle: ResizeHandle, deltaX: number, deltaY: number) => void;
  onRubberbandSelect: (
    bounds: { height: number; width: number; x: number; y: number },
    mode?: 'replace' | 'add' | 'toggle',
  ) => void;
  selectedLayerIds: string[];
  onSelect: (layerId: string, mode?: 'replace' | 'add' | 'toggle') => void;
}>) {
  return (
    <section className="relative min-w-0 overflow-hidden bg-[#e5e5e5]">
      <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-md bg-white/90 px-3 py-2 text-xs font-semibold text-[#4b5563] shadow-sm">
        <span>58%</span>
        <span className="h-4 w-px bg-[#d1d5db]" />
        <span>{copy.canvasTitle}</span>
      </div>
      <div className="h-full overflow-auto">
        <div className="flex min-h-[980px] w-max px-20 pb-24 pt-32">
          <FramePreview
            label="Desktop 1440 x 900"
            layers={layers}
            onMoveLayer={onMoveLayer}
            onResizeLayer={onResizeLayer}
            onRubberbandSelect={onRubberbandSelect}
            onSelect={onSelect}
            selectedLayerIds={selectedLayerIds}
            scale={desktopScale}
          />
        </div>
      </div>
      <CanvasToolPalette />
    </section>
  );
}

function FramePreview({
  cropWidth = editorCanvasFrame.width,
  label,
  layers,
  onMoveLayer,
  onResizeLayer,
  onRubberbandSelect,
  selectedLayerIds,
  scale,
  onSelect,
}: Readonly<{
  cropWidth?: number;
  label: string;
  layers: EditorLayer[];
  onMoveLayer: (layerId: string, deltaX: number, deltaY: number) => void;
  onResizeLayer: (layerId: string, handle: ResizeHandle, deltaX: number, deltaY: number) => void;
  onRubberbandSelect: (
    bounds: { height: number; width: number; x: number; y: number },
    mode?: 'replace' | 'add' | 'toggle',
  ) => void;
  selectedLayerIds: string[];
  scale: number;
  onSelect: (layerId: string, mode?: 'replace' | 'add' | 'toggle') => void;
}>) {
  const [rubberband, setRubberband] = useState<{
    currentX: number;
    currentY: number;
    mode: 'replace' | 'add' | 'toggle';
    originX: number;
    originY: number;
    pointerId: number;
  } | null>(null);

  const rubberbandBounds = rubberband
    ? {
        height: Math.abs(rubberband.currentY - rubberband.originY),
        width: Math.abs(rubberband.currentX - rubberband.originX),
        x: Math.min(rubberband.currentX, rubberband.originX),
        y: Math.min(rubberband.currentY, rubberband.originY),
      }
    : null;

  return (
    <div>
      <div className="mb-2 flex items-center gap-2 text-sm">
        <span className="font-semibold text-[#2563eb]">{label.split(' ')[0]}</span>
        <span className="text-[#6b7280]">{label.replace(label.split(' ')[0], '').trim()}</span>
      </div>
      <div style={{ height: editorCanvasFrame.height * scale, width: cropWidth * scale }}>
        <div
          className="relative origin-top-left overflow-hidden border border-[#d1d5db] bg-white shadow-sm"
          onPointerDown={(event) => {
            if (event.target !== event.currentTarget) {
              return;
            }

            const rect = event.currentTarget.getBoundingClientRect();
            const originX = (event.clientX - rect.left) / scale;
            const originY = (event.clientY - rect.top) / scale;

            event.currentTarget.setPointerCapture(event.pointerId);
            setRubberband({
              currentX: originX,
              currentY: originY,
              mode: event.metaKey || event.ctrlKey ? 'toggle' : event.shiftKey ? 'add' : 'replace',
              originX,
              originY,
              pointerId: event.pointerId,
            });
          }}
          onPointerMove={(event) => {
            setRubberband((current) => {
              if (!current || current.pointerId !== event.pointerId) {
                return current;
              }

              const rect = event.currentTarget.getBoundingClientRect();
              return {
                ...current,
                currentX: (event.clientX - rect.left) / scale,
                currentY: (event.clientY - rect.top) / scale,
              };
            });
          }}
          onPointerUp={(event) => {
            if (!rubberband || rubberband.pointerId !== event.pointerId || !rubberbandBounds) {
              return;
            }

            onRubberbandSelect(rubberbandBounds, rubberband.mode);
            event.currentTarget.releasePointerCapture(event.pointerId);
            setRubberband(null);
          }}
          style={{ height: editorCanvasFrame.height, transform: `scale(${scale})`, width: cropWidth }}
        >
          <div className="absolute inset-0 bg-white" />
          {layers.map((layer) => (
            <CanvasLayer
              isSelected={selectedLayerIds.includes(layer.id)}
              key={`${label}:${layer.id}`}
              layer={layer}
              onMoveLayer={onMoveLayer}
              onResizeLayer={onResizeLayer}
              onSelect={onSelect}
              scale={scale}
            />
          ))}
          {rubberbandBounds ? (
            <div
              className="pointer-events-none absolute z-50 border border-[#3b82f6] bg-[#3b82f6]/10"
              style={rubberbandBounds}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

function CanvasLayer({
  isSelected,
  layer,
  onMoveLayer,
  onResizeLayer,
  onSelect,
  scale,
}: Readonly<{
  isSelected: boolean;
  layer: EditorLayer;
  onMoveLayer: (layerId: string, deltaX: number, deltaY: number) => void;
  onResizeLayer: (layerId: string, handle: ResizeHandle, deltaX: number, deltaY: number) => void;
  onSelect: (layerId: string, mode?: SelectionMode) => void;
  scale: number;
}>) {
  const dragSessionRef = useRef<{
    lastClientX: number;
    lastClientY: number;
    pointerId: number;
  } | null>(null);
  const resizeSessionRef = useRef<{
    handle: ResizeHandle;
    lastClientX: number;
    lastClientY: number;
    pointerId: number;
  } | null>(null);

  const style: CSSProperties = {
    background: layer.style.background,
    borderColor: layer.style.borderColor,
    borderRadius: layer.style.radius,
    color: layer.style.color,
    fontSize: layer.style.fontSize,
    fontWeight: layer.style.fontWeight,
    height: layer.height,
    left: layer.x,
    opacity: layer.style.opacity,
    top: layer.y,
    width: layer.width,
  };

  return (
    <button
      aria-label={`Select canvas layer ${layer.name}`}
      className={`absolute z-10 border text-left transition ${
        isSelected ? 'outline outline-2 outline-[#3b82f6]' : 'hover:outline hover:outline-1 hover:outline-[#93c5fd]'
      } ${layer.kind === 'text' ? 'flex items-center px-3 leading-tight' : 'grid place-items-center'}`}
      onClick={(event) => onSelect(layer.id, event.metaKey || event.ctrlKey ? 'toggle' : event.shiftKey ? 'add' : 'replace')}
      onPointerDown={(event) => {
        event.preventDefault();
        event.currentTarget.setPointerCapture(event.pointerId);
        dragSessionRef.current = {
          lastClientX: event.clientX,
          lastClientY: event.clientY,
          pointerId: event.pointerId,
        };
        onSelect(layer.id, event.metaKey || event.ctrlKey ? 'toggle' : event.shiftKey ? 'add' : 'replace');
      }}
      onPointerMove={(event) => {
        const dragSession = dragSessionRef.current;
        if (!dragSession || dragSession.pointerId !== event.pointerId) {
          return;
        }

        const deltaX = (event.clientX - dragSession.lastClientX) / scale;
        const deltaY = (event.clientY - dragSession.lastClientY) / scale;

        dragSessionRef.current = {
          ...dragSession,
          lastClientX: event.clientX,
          lastClientY: event.clientY,
        };

        onMoveLayer(layer.id, deltaX, deltaY);
      }}
      onPointerUp={(event) => {
        if (dragSessionRef.current?.pointerId === event.pointerId) {
          dragSessionRef.current = null;
          event.currentTarget.releasePointerCapture(event.pointerId);
        }
      }}
      style={style}
      type="button"
    >
      {layer.kind === 'frame' ? <span className="sr-only">{layer.name}</span> : null}
      {layer.kind === 'media' ? <MediaLayerContent text={layer.text} /> : null}
      {layer.kind === 'text' || layer.kind === 'button' ? layer.text : null}
      {isSelected ? (
        <ResizeHandles
          onResizeEnd={(event) => {
            if (resizeSessionRef.current?.pointerId === event.pointerId) {
              resizeSessionRef.current = null;
              event.currentTarget.releasePointerCapture(event.pointerId);
            }
          }}
          onResizeMove={(event) => {
            const session = resizeSessionRef.current;
            if (!session || session.pointerId !== event.pointerId) {
              return;
            }

            const deltaX = (event.clientX - session.lastClientX) / scale;
            const deltaY = (event.clientY - session.lastClientY) / scale;
            resizeSessionRef.current = {
              ...session,
              lastClientX: event.clientX,
              lastClientY: event.clientY,
            };
            onResizeLayer(layer.id, session.handle, deltaX, deltaY);
          }}
          onResizeStart={(event, handle) => {
            event.preventDefault();
            event.stopPropagation();
            event.currentTarget.setPointerCapture(event.pointerId);
            resizeSessionRef.current = {
              handle,
              lastClientX: event.clientX,
              lastClientY: event.clientY,
              pointerId: event.pointerId,
            };
          }}
        />
      ) : null}
    </button>
  );
}

function MediaLayerContent({ text }: Readonly<{ text: string }>) {
  return (
    <span className="grid size-full place-items-center bg-[linear-gradient(135deg,#d1d5db,#f3f4f6)] text-xs text-[#6b7280]">
      <span className="grid size-10 place-items-center rounded-md bg-white/75 text-[#94a3b8]">
        <ImageIcon size={20} />
      </span>
      <span className="absolute mt-20 text-xs text-[#6b7280]">{text}</span>
    </span>
  );
}

function ResizeHandles({
  onResizeEnd,
  onResizeMove,
  onResizeStart,
}: Readonly<{
  onResizeEnd: (event: PointerEvent<HTMLSpanElement>) => void;
  onResizeMove: (event: PointerEvent<HTMLSpanElement>) => void;
  onResizeStart: (event: PointerEvent<HTMLSpanElement>, handle: ResizeHandle) => void;
}>) {
  const handles: Array<{ className: string; cursor: string; handle: ResizeHandle }> = [
    { className: '-top-1.5 left-1/2 -translate-x-1/2', cursor: 'ns-resize', handle: 'n' },
    { className: '-bottom-1.5 left-1/2 -translate-x-1/2', cursor: 'ns-resize', handle: 's' },
    { className: '-right-1.5 top-1/2 -translate-y-1/2', cursor: 'ew-resize', handle: 'e' },
    { className: '-left-1.5 top-1/2 -translate-y-1/2', cursor: 'ew-resize', handle: 'w' },
    { className: '-right-1.5 -top-1.5', cursor: 'nesw-resize', handle: 'ne' },
    { className: '-left-1.5 -top-1.5', cursor: 'nwse-resize', handle: 'nw' },
    { className: '-right-1.5 -bottom-1.5', cursor: 'nwse-resize', handle: 'se' },
    { className: '-left-1.5 -bottom-1.5', cursor: 'nesw-resize', handle: 'sw' },
  ];

  return (
    <>
      {handles.map((item) => (
        <span
          className={`absolute z-30 size-3 rounded-full border border-[#2563eb] bg-white ${item.className}`}
          key={item.handle}
          onPointerDown={(event) => onResizeStart(event, item.handle)}
          onPointerMove={onResizeMove}
          onPointerUp={onResizeEnd}
          style={{ cursor: item.cursor }}
        />
      ))}
    </>
  );
}

function CanvasToolPalette() {
  const tools = [
    { icon: MousePointer2, label: 'Select' },
    { icon: Frame, label: 'Frame' },
    { icon: Type, label: 'Text' },
    { icon: ImageIcon, label: 'Image' },
    { icon: Square, label: 'Shape' },
    { icon: PenLine, label: 'Pen' },
    { icon: Move, label: 'Move' },
  ];

  return (
    <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-[0_8px_28px_rgba(15,23,42,0.18)]">
      {tools.map((tool, index) => {
        const Icon = tool.icon;

        return (
        <button
          aria-label={tool.label}
          className={`grid size-11 place-items-center rounded-lg ${index === 0 ? 'bg-[#4f46e5] text-white' : 'text-[#4b5563] hover:bg-[#f3f4f6]'}`}
          key={tool.label}
          type="button"
        >
          <Icon size={18} />
        </button>
        );
      })}
    </div>
  );
}

function LayerKindIcon({ kind }: Readonly<{ kind: EditorLayer['kind'] }>) {
  const Icon = kind === 'text' ? Type : kind === 'media' ? ImageIcon : kind === 'button' ? MousePointer2 : Frame;

  return (
    <span className="grid size-4 shrink-0 place-items-center text-[#10b981]">
      <Icon size={14} />
    </span>
  );
}

function StylePanel({
  copy,
  layers,
  selectedCount,
  selectedLayer,
  updateSelectedGeometry,
  updateSelectedStyle,
}: Readonly<{
  copy: EditorPrototypeCopy;
  layers: EditorLayer[];
  selectedCount: number;
  selectedLayer: EditorLayer | null;
  updateSelectedGeometry: (key: 'x' | 'y' | 'width' | 'height', value: number) => void;
  updateSelectedStyle: <Key extends keyof EditorLayerStyle>(
    key: Key,
    value: EditorLayerStyle[Key],
  ) => void;
}>) {
  return (
    <aside className="min-h-0 border-l border-[#e5e7eb] bg-white">
      <div className="flex h-11 items-center justify-between border-b border-[#e5e7eb] px-4">
        <h2 className="flex items-center gap-2 text-sm font-semibold">
          <PanelRight size={16} />
          {copy.stylePanelTitle}
        </h2>
      </div>
      <div className="h-[calc(100%-44px)] overflow-auto">
        {selectedLayer ? (
          <>
            <section className="border-b border-[#e5e7eb] p-4">
              <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-[#eef2ff] text-[#4f46e5]">
                <Square size={22} />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm font-bold">{selectedLayer.name}</p>
                <p className="mt-1 text-xs text-[#6b7280]">
                  {copy.selection.component} · {selectedCount} selected
                </p>
              </div>
            </section>
            <section className="border-b border-[#e5e7eb] p-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b7280]">{copy.selection.selected}</p>
              <div className="grid gap-2 text-xs text-[#4b5563]">
                <InfoRow label="Path" value={buildLayerPath(selectedLayer, layers).join(' / ')} />
                <InfoRow label={copy.selection.rendered} value={`${selectedLayer.width} x ${selectedLayer.height}`} />
              </div>
            </section>
            <section className="p-4">
              <div className="mb-4 flex rounded-lg bg-[#f3f4f6] p-1">
                <button aria-pressed="true" className="min-h-11 flex-1 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-sm" type="button">
                  {copy.styleTab}
                </button>
              </div>
              <div className="grid gap-5">
                <div className="grid grid-cols-2 gap-2">
                  <NumberControl label="X" value={selectedLayer.x} onChange={(value) => updateSelectedGeometry('x', value)} />
                  <NumberControl label="Y" value={selectedLayer.y} onChange={(value) => updateSelectedGeometry('y', value)} />
                  <NumberControl label="W" value={selectedLayer.width} onChange={(value) => updateSelectedGeometry('width', value)} />
                  <NumberControl label="H" value={selectedLayer.height} onChange={(value) => updateSelectedGeometry('height', value)} />
                </div>
                <ColorControl
                  label={copy.controls.fill}
                  value={normalizeColorValue(selectedLayer.style.background)}
                  onChange={(value) => updateSelectedStyle('background', value)}
                />
                <ColorControl
                  label={copy.controls.text}
                  value={selectedLayer.style.color}
                  onChange={(value) => updateSelectedStyle('color', value)}
                />
                <ColorControl
                  label={copy.controls.border}
                  value={normalizeColorValue(selectedLayer.style.borderColor)}
                  onChange={(value) => updateSelectedStyle('borderColor', value)}
                />
                <RangeControl
                  label={copy.controls.radius}
                  max={40}
                  min={0}
                  onChange={(value) => updateSelectedStyle('radius', value)}
                  value={selectedLayer.style.radius}
                />
                <RangeControl
                  label={copy.controls.fontSize}
                  max={44}
                  min={10}
                  onChange={(value) => updateSelectedStyle('fontSize', value)}
                  value={selectedLayer.style.fontSize}
                />
                <RangeControl
                  label={copy.controls.opacity}
                  max={1}
                  min={0.35}
                  onChange={(value) => updateSelectedStyle('opacity', value)}
                  step={0.05}
                  value={selectedLayer.style.opacity}
                />
              </div>
            </section>
          </>
        ) : (
          <p className="p-4 text-sm leading-6 text-[#6b7280]">{copy.noSelection}</p>
        )}
      </div>
    </aside>
  );
}

function InfoRow({ label, value }: Readonly<{ label: string; value: string }>) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-md bg-[#f9fafb] px-3 py-2">
      <span>{label}</span>
      <span className="truncate font-semibold text-[#111827]">{value}</span>
    </div>
  );
}

function PreviewOverlay({
  copy,
  exportedHtml,
  onClose,
}: Readonly<{
  copy: EditorPrototypeCopy;
  exportedHtml: string;
  onClose: () => void;
}>) {
  return (
    <section className="absolute inset-x-8 bottom-8 top-20 z-30 grid overflow-hidden rounded-2xl border border-[#d1d5db] bg-white shadow-2xl lg:grid-cols-[minmax(0,1fr)_440px]">
      <div className="min-w-0 border-r border-[#e5e7eb]">
        <div className="flex h-12 items-center justify-between border-b border-[#e5e7eb] px-4">
          <div>
            <h2 className="text-sm font-semibold">{copy.previewTitle}</h2>
            <p className="text-xs text-[#6b7280]">{copy.previewDescription}</p>
          </div>
          <button
            aria-label="Close HTML preview"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-md border border-[#e5e7eb] px-3 py-1.5 text-sm font-semibold"
            onClick={onClose}
            type="button"
          >
            <X size={15} />
            Close
          </button>
        </div>
        <iframe
          className="h-[calc(100%-48px)] w-full bg-white"
          sandbox=""
          srcDoc={exportedHtml}
          title={copy.previewTitle}
        />
      </div>
      <pre className="m-0 h-full overflow-auto bg-[#111827] p-4 text-xs leading-5 text-white">
        <Code2 className="mb-3 text-white/70" size={16} />
        <code>{exportedHtml}</code>
      </pre>
    </section>
  );
}

function ColorControl({
  label,
  value,
  onChange,
}: Readonly<{
  label: string;
  value: string;
  onChange: (value: string) => void;
}>) {
  return (
    <label className="grid gap-2 text-sm font-medium">
      <span>{label}</span>
      <span className="flex items-center gap-2">
        <input
          aria-label={label}
          className="h-11 w-12 rounded border border-[#e5e7eb] bg-white"
          onChange={(event) => onChange(event.target.value)}
          type="color"
          value={value}
        />
        <span className="rounded-md border border-[#e5e7eb] bg-white px-2 py-1 text-xs text-[#6b7280]">
          {value}
        </span>
      </span>
    </label>
  );
}

function NumberControl({
  label,
  value,
  onChange,
}: Readonly<{
  label: string;
  value: number;
  onChange: (value: number) => void;
}>) {
  return (
    <label className="grid gap-1 text-xs font-semibold text-[#4b5563]">
      <span>{label}</span>
      <input
        aria-label={label}
        className="h-11 rounded-md border border-[#e5e7eb] bg-white px-2 text-sm font-medium text-[#111827]"
        onChange={(event) => onChange(Number(event.target.value))}
        type="number"
        value={value}
      />
    </label>
  );
}

function RangeControl({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
}: Readonly<{
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}>) {
  return (
    <label className="grid gap-2 text-sm font-medium">
      <span className="flex items-center justify-between gap-3">
        <span>{label}</span>
        <span className="text-xs text-[#6b7280]">{formatControlValue(value)}</span>
      </span>
      <input
        aria-label={label}
        className="min-h-11 w-full accent-[#4f46e5]"
        max={max}
        min={min}
        onChange={(event) => onChange(Number(event.target.value))}
        step={step}
        type="range"
        value={value}
      />
    </label>
  );
}

function normalizeColorValue(value: string) {
  return value === 'transparent' ? '#ffffff' : value;
}

function formatControlValue(value: number) {
  return Number.isInteger(value) ? value.toString() : value.toFixed(2);
}
