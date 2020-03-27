import React from 'react';
import PropTypes from 'prop-types';

import styles from './Title.module.scss';

const Title = ({ icon, signature }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recent works</h2>
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
    </div>
  );
};

Title.propTypes = {
  icon: PropTypes.object,
  signature: PropTypes.object,
};

export default Title;
