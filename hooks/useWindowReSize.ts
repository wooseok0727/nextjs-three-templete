import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';

interface WindowSize {
  width: number;
  height: number;
  scrollbarWidth: number;
  loaded: boolean;
}

const windowSize: WindowSize = {
  width: 0,
  height: 0,
  scrollbarWidth: 0,
  loaded: false,
};

export const useWindowReSize = () => {
  const [size, setSize] = useState<WindowSize>(windowSize);

  const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;

  const onResize = useCallback(() => {
    const newSize: WindowSize = {
      width: window.innerWidth,
      height: window.innerHeight,
      scrollbarWidth: getScrollbarWidth(),
      loaded: true,
    };

    setSize(newSize);
  }, []);

  useEffect(() => {
    const onResizeDebounced = debounce(onResize, 200);
    window.addEventListener('resize', onResizeDebounced);
    onResize();

    return () => {
      window.removeEventListener('resize', onResizeDebounced);
    };
  }, []);

  return { size };
};
