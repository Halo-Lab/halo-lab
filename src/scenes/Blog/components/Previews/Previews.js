import React from 'react';

import List from './components/List';
import Switcher from './components/Switcher';
import { useGetBreakpoint } from '@hooks';
import { useWordpressPosts } from '@hooks/queries';

const Previews = () => {
  const { breakpoint } = useGetBreakpoint();
  const items = useWordpressPosts();
  console.log(items);

  return (
    <div className="">
      <div></div>
      {breakpoint !== 'mobile' ? (
        <Switcher items={items} />
      ) : (
        <List items={items} />
      )}
    </div>
  );
};

export default Previews;
