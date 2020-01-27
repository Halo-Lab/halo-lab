import { useState, useEffect } from 'react';

import { debounce, getBreakpoint } from '@helpers';

const useGetBreakpoint = () => {
  const [width, setWidth] = useState(0);

  const handleResize = () => {
    const newWidth = document.documentElement.clientWidth;
    setWidth(newWidth);
  };
  const handleResizeDebounce = debounce(handleResize, 250);

  useEffect(() => {
    handleResize(); // initial call

    window.addEventListener('resize', handleResizeDebounce);
    return () => window.removeEventListener('resize', handleResizeDebounce);
  }, []);

  return {
    width,
    breakpoint: getBreakpoint(width),
  };
};

export default useGetBreakpoint;
