import { useState, useEffect } from 'react';
import { useEffectScroll } from '@src/helpers/utils';

const useHeaderIsWhite = contentRef => {
  const [headerIsWhite, setHeaderIsWhite] = useState(false);

  useEffect(() => useEffectScroll(contentRef, setHeaderIsWhite), []);

  return headerIsWhite;
};

export default useHeaderIsWhite;
