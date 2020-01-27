import { useState } from 'react';

const useIsOpened = () => {
  const [isOpened, setIsOpened] = useState(false);
  const handleTogglingIsOpened = () => {
    setIsOpened(!isOpened);
  };

  return {
    isOpened,
    handleTogglingIsOpened,
  };
};

export default useIsOpened;
