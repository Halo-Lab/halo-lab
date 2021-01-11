import PropTypes from 'prop-types';
import React from 'react';

import styles from './GradientText.module.scss';

const GradientText = ({ text, background }) => {
  return (
    <span className={styles.text} style={{ backgroundImage: background }}>
      {text}
    </span>
  );
};

GradientText.defaultProps = {
  background:
    'linear-gradient(137.81deg, #e7a28f 3.52%, #f9d6ac 41.89%, #fbfefc 96.77%)',
};

GradientText.propTypes = {
  text: PropTypes.string,
  background: PropTypes.string,
};

export default GradientText;
