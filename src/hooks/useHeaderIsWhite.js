import { useState, useEffect } from 'react';

import { scrollEffect } from '@/src/helpers/utils';

const useHeaderIsWhite = (contentRef) => {
  const [headerIsWhite, setHeaderIsWhite] = useState(false);

  useEffect(() => scrollEffect(contentRef, setHeaderIsWhite), []);

  return headerIsWhite;
};

export default useHeaderIsWhite;
