import React from 'react';

import { useGetBreakpoint } from '@hooks';

const Test = () => {
  const { breakpoint } = useGetBreakpoint();

  return <div>{breakpoint}</div>;
};

export default Test;
