import { useState } from 'react';

const useToggleOpenedStatus = () => {
  const [isOpened, setIsOpened] = useState(false);
  const handleTogglingOpenedStatus = () => {
    setIsOpened(!isOpened);
  };

  return {
    isOpened,
    handleTogglingOpenedStatus,
  };
};

export default useToggleOpenedStatus;
