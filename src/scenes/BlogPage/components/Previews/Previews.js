import React from 'react';

import { useWordpressPosts } from '@/hooks/queries';

import Switcher from './components/Switcher';

const Previews = () => {
  const items = useWordpressPosts();

  return (
    <>
      <Switcher items={items} />
    </>
  );
};

export default Previews;
