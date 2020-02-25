import React from 'react';

import List from './components/List';
import Switcher from './components/Switcher';
import { useBreakpoints, BREAKPOINTS } from '@hooks';
import { useWordpressPosts } from '@hooks/queries';

const Previews = () => {
  const { breakpoint } = useBreakpoints();
  const items = useWordpressPosts();

  return (
    <div className="">
      <div></div>
      {breakpoint !== BREAKPOINTS.MOBILE ? (
        <Switcher items={items} />
      ) : (
        <List items={items} />
      )}
    </div>
  );
};

export default Previews;
