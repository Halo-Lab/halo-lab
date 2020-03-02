import React from 'react';
import PropTypes from 'prop-types';

import styles from './Title.module.scss';

const Title = ({ icon, signature }) => {
  return (
    <h2 className={styles.container}>
      Design that inspires
      <a
        className={styles.link}
        href="https://dribbble.com/halolab"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={styles.icon}
          src={signature.publicURL}
          alt="applications mobile illustrations websites"
        />
        <img
          className={styles.image}
          src={icon.publicURL}
          alt="dribbble logotype"
        />
      </a>
    </h2>
  );
};

Title.propTypes = {
  icon: PropTypes.object,
  signature: PropTypes.object,
};

export default Title;
