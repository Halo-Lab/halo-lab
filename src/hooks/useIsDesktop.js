import { useState, useEffect } from 'react';

import { debounce, getBreakpoint } from '@helpers';

const useDesktopStatus = breakpoint => {
  const [isDesktop, setIsDesktop] = useState(false);

  const handleResize = () => {
    if (document.documentElement.clientWidth >= getBreakpoint(breakpoint)) {
      return void setIsDesktop(true);
    }

    setIsDesktop(false);
  };

  const handleResizeDebounced = debounce(handleResize, 250);

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResizeDebounced);

    return () => window.removeEventListener('resize', handleResizeDebounced);
  }, []);

  return { isDesktop };
};

export default useDesktopStatus;
