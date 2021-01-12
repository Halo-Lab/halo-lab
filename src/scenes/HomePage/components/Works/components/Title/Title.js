/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import styles from './Title.module.scss';

const Title = ({ icon, signature }) => {
  const [dribbleTextTransform, setDribbleTextTransform] = useState(null);
  const handleScroll = () => {
    setDribbleTextTransform({
      transform: `rotate(${window.pageYOffset / 3}deg)`,
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return function remove() {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          className={styles.svg}
          style={dribbleTextTransform}
        />
      </a>
    </div>
  );
};

Title.propTypes = {
  icon: PropTypes.object.isRequired,
  signature: PropTypes.object.isRequired,
};

export default Title;
