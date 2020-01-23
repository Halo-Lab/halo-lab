import React, { useContext } from 'react';

import { GlobalContext } from '@contexts';

import styles from './Works.module.scss';

const Works = () => {
  const { imagesAPI } = useContext(GlobalContext);
  const images = imagesAPI.get([
    'dribbble-badge.svg',
    'dribbble-badge-text.svg',
  ]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Design that inspires
        <a
          className={styles.titleLink}
          href="https://dribbble.com/halolab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.titleIcon}
            src={images['dribbble-badge.svg'].url}
            alt={images['dribbble-badge.svg'].name}
          />
          <img
            className={styles.titleImage}
            src={images['dribbble-badge-text.svg'].url}
            alt={images['dribbble-badge-text.svg'].name}
          />
        </a>
      </h2>
    </div>
  );
};

export default Works;
