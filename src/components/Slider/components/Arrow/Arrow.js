import PropTypes from 'prop-types';
import React from 'react';

import styles from './Arrow.module.scss';

const Arrow = ({ onClick, children, direction }) => {
  const directionStyles =
    direction && direction === 'next' ? styles.next : styles.previous;

  return (
    <button
      className={`${styles.container} ${directionStyles}`}
      onClick={onClick}
      type="button"
    >
      {children}
      <span className={styles.titleHidden}>Arrow</span>
    </button>
  );
};

Arrow.defaultProps = {
  children: null,
  onClick: null,
};

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Arrow;
