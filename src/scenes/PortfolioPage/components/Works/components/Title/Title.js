/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';

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
  icon: PropTypes.object.isRequired,
  signature: PropTypes.object.isRequired,
};

export default Title;
