import React from 'react';

import { usePortfolioWorksAssets } from '@hooks/queries';

import styles from './Title.module.scss';

const Title = () => {
  const { circledText, dribbbleRed } = usePortfolioWorksAssets();

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
          src={circledText.publicURL}
          alt="applications mobile illustrations websites"
        />
        <img
          className={styles.image}
          src={dribbbleRed.publicURL}
          alt="dribbble logotype"
        />
      </a>
    </h2>
  );
};

export default Title;
