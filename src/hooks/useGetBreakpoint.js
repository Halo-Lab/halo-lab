import { useState, useEffect } from 'react';

import { debounce, getBreakpoint } from '@helpers';

const useGetBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(null);

  const handleResize = () => {
    const documentWidth = document.documentElement.clientWidth;
    const newBreakpoint = getBreakpoint(documentWidth);

    setBreakpoint(newBreakpoint);
  };
  const handleResizeDebounce = debounce(handleResize, 250);

  useEffect(() => {
    // initial invoke
    handleResize();

    window.addEventListener('resize', handleResizeDebounce);
    return () => window.removeEventListener('resize', handleResizeDebounce);
  }, []);

  return { breakpoint };
};

export default useGetBreakpoint;
