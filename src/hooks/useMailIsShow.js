import { useEffect, useState } from 'react';

const useMailIsShow = elRef => {
  const [topPosition, setTopPosition] = useState({});

  useEffect(() => {
    const handleResize = () => {
      const elParams = elRef.current.getBoundingClientRect();
      setTopPosition(elParams.top);
    };

    window.addEventListener('scroll', handleResize);
    return () => window.removeEventListener('scroll', handleResize);
  }, []);
  return { topPosition };
};

export default useMailIsShow;
