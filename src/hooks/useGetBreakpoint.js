import { useState, useEffect } from 'react';

import { debounce, getBreakpoint } from '@helpers';

const useGetBreakpoint = () => {
  const initialWidth = document.documentElement.clientWidth;
  const [width, setWidth] = useState(initialWidth);

  const handleResize = () => {
    const newWidth = document.documentElement.clientWidth;
    setWidth(newWidth);
  };
  const handleResizeDebounce = debounce(handleResize, 250);

  useEffect(() => {
    window.addEventListener('resize', handleResizeDebounce);
    return () => window.removeEventListener('resize', handleResizeDebounce);
  }, []);

  return {
    width,
    breakpoint: getBreakpoint(width),
  };
};

export default useGetBreakpoint;
