import React, { Fragment } from 'react';

import List from './components/List';
import Switcher from './components/Switcher';
import { useBreakpoints, BREAKPOINTS } from '@hooks';
import { useWordpressPosts } from '@hooks/queries';

const Previews = () => {
  const { breakpoint } = useBreakpoints();
  const items = useWordpressPosts();

  return (
    <Fragment>
      {breakpoint !== BREAKPOINTS.MOBILE ? (
        <Switcher items={items} />
      ) : (
        <List items={items} />
      )}
    </Fragment>
  );
};

export default Previews;
