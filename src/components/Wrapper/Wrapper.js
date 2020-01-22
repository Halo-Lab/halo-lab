import React from 'react';
import PropTypes from 'prop-types';

import { MenuContext, GlobalContext } from '@contexts';
import { StaticImagesService } from '@services';
import { useIsOpened, useQueryStaticImages } from '@hooks';

const Wrapper = ({ children }) => {
  const menuState = useIsOpened();
  const globalState = {
    imagesAPI: new StaticImagesService(useQueryStaticImages()),
  };

  return (
    <GlobalContext.Provider value={globalState}>
      <MenuContext.Provider value={menuState}>{children}</MenuContext.Provider>
    </GlobalContext.Provider>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
