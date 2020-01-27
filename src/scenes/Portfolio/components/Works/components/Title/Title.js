import React, { useContext } from 'react';

import { GlobalContext } from '@contexts';

import styles from './Title.module.scss';

const Title = () => {
  const { imagesAPI } = useContext(GlobalContext);
  const images = imagesAPI.get([
    'dribbble-badge.svg',
    'dribbble-badge-text.svg',
  ]);

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
          src={images['dribbble-badge.svg'].url}
          alt={images['dribbble-badge.svg'].name}
        />
        <img
          className={styles.image}
          src={images['dribbble-badge-text.svg'].url}
          alt={images['dribbble-badge-text.svg'].name}
        />
      </a>
    </h2>
  );
};

export default Title;
