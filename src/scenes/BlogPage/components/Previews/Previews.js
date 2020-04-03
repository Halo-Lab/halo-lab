import React, { Fragment } from 'react';

// import List from './components/List';
import Switcher from './components/Switcher';
// import { useBreakpoints, BREAKPOINTS } from '@hooks';
import { useWordpressPosts } from '@hooks/queries';

const Previews = () => {
  // const { breakpoint } = useBreakpoints();
  const items = useWordpressPosts();

  return (
    <Fragment>
      <Switcher items={items} />
      {/* {breakpoint !== BREAKPOINTS.MOBILE ? (
      ) : (
        <List items={items} />
      )} */}
    </Fragment>
  );
};

export default Previews;
