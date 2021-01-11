import React, { Fragment } from 'react';

import { useWordpressPosts } from '@/hooks/queries';

import Switcher from './components/Switcher';

const Previews = () => {
  const items = useWordpressPosts();

  return (
    <Fragment>
      <Switcher items={items} />
    </Fragment>
  );
};

export default Previews;
