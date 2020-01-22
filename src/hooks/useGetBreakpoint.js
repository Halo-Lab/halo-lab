import { useState, useEffect } from 'react';

import { debounce, getBreakpoint } from '@helpers';

const useGetBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(null);

  const handleResize = () => {
    const documentWidth = document.documentElement.clientWidth;
    const newBreakpoint = getBreakpoint(documentWidth);

    setBreakpoint(newBreakpoint);
  };
  const handleResizeDebounced = debounce(handleResize, 250);

  useEffect(() => {
    // initial invoke
    handleResize();

    window.addEventListener('resize', handleResizeDebounced);
    return () => window.removeEventListener('resize', handleResizeDebounced);
  }, []);

  return { breakpoint };
};

export default useGetBreakpoint;
