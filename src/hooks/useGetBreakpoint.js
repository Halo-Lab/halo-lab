import { useState, useEffect } from 'react';

import { debounce } from '@helpers';

// TODO: move to helpers -->
const getBreakpoint = function(width) {
  if (width >= 992) {
    return 'desktop';
  }

  if (width >= 768) {
    return 'tablet';
  }

  return 'mobile';
};

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
