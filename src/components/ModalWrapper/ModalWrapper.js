import React from 'react';
import PropTypes from 'prop-types';

import { useIsOpened } from '@hooks/index';

import styles from './ModalWrapper.module.scss';

const ModalWrapper = ({ children }) => {
  const { isOpened, handleTogglingIsOpened } = useIsOpened();
  const onWrapperClick = ({ target }) => {
    const isWrapper = target.getAttribute('data-name') === 'modalWrapper';

    if (isWrapper) {
      handleTogglingIsOpened();
    }
  };

  return (
    <div>
      <button type="button" onClick={handleTogglingIsOpened}>
        Toggle
      </button>
      {isOpened ? (
        <div
          className={styles.wrapper}
          data-name="modalWrapper"
          onClick={onWrapperClick}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
};

ModalWrapper.propTypes = {
  children: PropTypes.node,
};

export default ModalWrapper;
