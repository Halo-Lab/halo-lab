import React from 'react';
import PropTypes from 'prop-types';

import { useIsOpened } from '@hooks/index';

import styles from './ModalWrapper.module.scss';

const ModalWrapper = ({ children, button }) => {
  const { isOpened, handleTogglingIsOpened } = useIsOpened();
  const onWrapperClick = ({ target }) => {
    const isWrapper = target.getAttribute('data-name') === 'modalWrapper';

    if (isWrapper) {
      handleTogglingIsOpened();
    }
  };

  return (
    <>
      <button
        type="button"
        className={button.classes}
        onClick={handleTogglingIsOpened}
      >
        {button.title}
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
    </>
  );
};

ModalWrapper.propTypes = {
  button: PropTypes.shape({
    title: PropTypes.string,
    classes: PropTypes.string,
  }),
  children: PropTypes.node,
};

export default ModalWrapper;
