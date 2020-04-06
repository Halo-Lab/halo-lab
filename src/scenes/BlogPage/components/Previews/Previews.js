import React, { Fragment } from 'react';

import Switcher from './components/Switcher';
import { useWordpressPosts } from '@hooks/queries';

const Previews = () => {
  const items = useWordpressPosts();

  return (
    <Fragment>
      <Switcher items={items} />
    </Fragment>
  );
};

export default Previews;
