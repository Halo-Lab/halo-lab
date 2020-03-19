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
          src={signature.publicURL}
          alt="applications mobile illustrations websites"
          loading="lazy"
          className={styles.icon}
        />
        <img
          src={icon.publicURL}
          alt="dribbble logotype"
          loading="lazy"
          className={styles.image}
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
