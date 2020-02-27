import React from 'react';
import PropTypes from 'prop-types';

import { MenuContext } from '@contexts';
import { useIsOpened } from '@hooks';

const Providers = ({ children }) => {
  const menuState = useIsOpened();

  return (
    <MenuContext.Provider value={menuState}>{children}</MenuContext.Provider>
  );
};

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Providers;
