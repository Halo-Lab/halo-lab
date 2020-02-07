import React from 'react';
import PropTypes from 'prop-types';

import styles from './Arrow.module.scss';

const Arrow = ({ onClick, children, direction }) => {
  const directionStyles =
    direction && direction === 'next' ? styles.next : styles.previous;

  return (
    <button
      className={`${styles.container} ${directionStyles}`}
      onClick={onClick}
    >
      {children}
      <span className={styles.titleHidden}>Arrow</span>
    </button>
  );
};

Arrow.propTypes = {
  direction: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Arrow;
