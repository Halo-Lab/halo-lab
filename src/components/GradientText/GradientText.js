import React from 'react';
import PropTypes from 'prop-types';

import styles from './GradientText.module.scss';

const gradientText = ({ text, background }) => {
  return (
    <span className={styles.text} style={{ backgroundImage: background }}>
      {text}
    </span>
  );
};

gradientText.propTypes = {
  text: PropTypes.string,
  background: PropTypes.string,
};

export default gradientText;
