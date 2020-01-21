import { useState, useEffect } from 'react';

const useDesktopStatus = (width = 992) => {
  const [isDesktop, setIsDesktop] = useState(false);

  const handleResize = () => {
    if (document.documentElement.clientWidth >= width) {
      return void setIsDesktop(true);
    }

    setIsDesktop(false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isDesktop };
};

export default useDesktopStatus;
