import { useState, useEffect } from 'react';

import { debounce } from '@helpers';

const useDesktopStatus = (width = 992) => {
  const [isDesktop, setIsDesktop] = useState(false);

  const handleResize = () => {
    if (document.documentElement.clientWidth >= width) {
      return void setIsDesktop(true);
    }

    setIsDesktop(false);
  };

  const handleResizeDebounced = debounce(handleResize, 300);

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResizeDebounced);

    return () => window.removeEventListener('resize', handleResizeDebounced);
  }, []);

  return { isDesktop };
};

export default useDesktopStatus;
