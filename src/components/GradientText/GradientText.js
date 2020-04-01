import React from 'react';
import PropTypes from 'prop-types';

import styles from './GradientText.module.scss';

const GradientText = ({ text, background }) => {
  return (
    <span className={styles.text} style={{ backgroundImage: background }}>
      {text}
    </span>
  );
};

GradientText.propTypes = {
  text: PropTypes.string,
  background: PropTypes.string,
};

export default GradientText;
