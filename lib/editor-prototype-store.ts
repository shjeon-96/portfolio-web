import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import type { EditorLayerStyle, EditorPrototypeAST } from '@/lib/editor-prototype-data';
import { initialEditorAst } from '@/lib/editor-prototype-data';
import {
  evaluateAstToLayers,
  getIntersectingLayerIds,
  moveTemplateBefore,
  resizeTemplate,
  translateTemplate,
  updateTemplateGeometry,
  updateTemplateStyle,
} from '@/lib/editor-prototype-engine';

type SelectionMode = 'replace' | 'add' | 'toggle';
type ResizeHandle = 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw';

type EditorPrototypeStore = {
  ast: EditorPrototypeAST;
  selectedLayerIds: string[];
  revision: number;
  moveLayer: (layerId: string, deltaX: number, deltaY: number) => void;
  moveLayerBeforeTarget: (sourceLayerId: string, targetLayerId: string) => void;
  resizeLayer: (layerId: string, handle: ResizeHandle, deltaX: number, deltaY: number) => void;
  rubberbandSelect: (bounds: { height: number; width: number; x: number; y: number }, mode?: SelectionMode) => void;
  selectLayer: (layerId: string, mode?: SelectionMode) => void;
  updateSelectedGeometry: (key: 'x' | 'y' | 'width' | 'height', value: number) => void;
  updateSelectedStyle: <Key extends keyof EditorLayerStyle>(
    key: Key,
    value: EditorLayerStyle[Key],
  ) => void;
};

export function selectOrderedLayers(ast: EditorPrototypeAST) {
  return evaluateAstToLayers(ast);
}

function applySelection(currentIds: string[], layerId: string, mode: SelectionMode) {
  if (mode === 'add') {
    return currentIds.includes(layerId) ? currentIds : [...currentIds, layerId];
  }

  if (mode === 'toggle') {
    return currentIds.includes(layerId)
      ? currentIds.filter((selectedId) => selectedId !== layerId)
      : [...currentIds, layerId];
  }

  return [layerId];
}

function applySelectedSet(currentIds: string[], nextIds: string[], mode: SelectionMode) {
  if (mode === 'add') {
    return Array.from(new Set([...currentIds, ...nextIds]));
  }

  if (mode === 'toggle') {
    const next = new Set(currentIds);
    for (const nextId of nextIds) {
      if (next.has(nextId)) {
        next.delete(nextId);
      } else {
        next.add(nextId);
      }
    }
    return Array.from(next);
  }

  return nextIds;
}

export const useEditorPrototypeStore = create<EditorPrototypeStore>()(
  immer((set) => ({
    ast: initialEditorAst,
    selectedLayerIds: ['grid-container'],
    revision: 0,
    moveLayer: (layerId, deltaX, deltaY) => {
      set((state) => {
        translateTemplate({
          ast: state.ast,
          deltaX,
          deltaY,
          templateId: layerId,
        });
        state.revision += 1;
      });
    },
    moveLayerBeforeTarget: (sourceLayerId, targetLayerId) => {
      set((state) => {
        moveTemplateBefore({
          ast: state.ast,
          sourceTemplateId: sourceLayerId,
          targetTemplateId: targetLayerId,
        });
        state.revision += 1;
      });
    },
    resizeLayer: (layerId, handle, deltaX, deltaY) => {
      set((state) => {
        resizeTemplate({
          ast: state.ast,
          deltaX,
          deltaY,
          handle,
          templateId: layerId,
        });
        state.revision += 1;
      });
    },
    rubberbandSelect: (bounds, mode = 'replace') => {
      set((state) => {
        const nextIds = getIntersectingLayerIds({
          bounds,
          layers: evaluateAstToLayers(state.ast),
        });
        state.selectedLayerIds = applySelectedSet(state.selectedLayerIds, nextIds, mode);
        state.revision += 1;
      });
    },
    selectLayer: (layerId, mode = 'replace') => {
      set((state) => {
        if (!state.ast.program.templatesById[layerId]) {
          return;
        }

        state.selectedLayerIds = applySelection(state.selectedLayerIds, layerId, mode);
        state.revision += 1;
      });
    },
    updateSelectedGeometry: (key, value) => {
      set((state) => {
        const primaryLayerId = state.selectedLayerIds[0];
        if (!primaryLayerId) {
          return;
        }

        updateTemplateGeometry({
          ast: state.ast,
          key,
          templateId: primaryLayerId,
          value,
        });
        state.revision += 1;
      });
    },
    updateSelectedStyle: (key, value) => {
      set((state) => {
        for (const selectedLayerId of state.selectedLayerIds) {
          updateTemplateStyle({
            ast: state.ast,
            key,
            templateId: selectedLayerId,
            value,
          });
        }
        state.revision += 1;
      });
    },
  })),
);
