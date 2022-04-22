import type { CanvasApp } from 'classes/CanvasApp';
import type { NextRouter } from 'next/router';

interface GlobalState {
  canvasApp: CanvasApp | null;
  isCanvasAppInit: boolean;
  router: NextRouter | null;
}

export const globalState: GlobalState = {
  canvasApp: null,
  isCanvasAppInit: false,
  router: null,
};
