import React, { useContext } from 'react';

import { GlobalContext } from '@contexts';

import styles from './Info.module.scss';

const Info = () => {
  const { imagesAPI } = useContext(GlobalContext);
  const images = imagesAPI.get([
    'cards/upwork-logo.svg',
    'cards/dribbble-logo.svg',
    'cards/clutch-mini-logo.svg',
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.cardWrapper}>
        <a href="#" className={`${styles.card} ${styles.upwork}`}>
          <div className={styles.cardBody}>
            <img
              src={images['cards/upwork-logo.svg'].url}
              alt={images['cards/upwork-logo.svg'].name}
            />
            <div>
              Best
              <br />
              Design Agency
              <br />
              2018 in Ukraine
            </div>
          </div>
        </a>
      </div>

      <div className={styles.cardWrapper}>
        <a href="#" className={`${styles.card} ${styles.dribbble}`}>
          <div className={styles.cardBody}>
            <img
              src={images['cards/dribbble-logo.svg'].url}
              alt={images['cards/dribbble-logo.svg'].name}
            />
            <div>Top Trending Team with 3m Total Views</div>
          </div>
        </a>
      </div>

      <div className={styles.cardWrapper}>
        <a href="#" className={`${styles.card} ${styles.clutch}`}>
          <div className={styles.cardBody}>
            <img
              src={images['cards/clutch-mini-logo.svg'].url}
              alt={images['cards/clutch-mini-logo.svg'].name}
            />
            <div>
              4.9/5
              <br />
              Average Rating by Our Clients
            </div>
          </div>
        </a>
      </div>

      <div className={`${styles.circle} ${styles.circleSm1}`}></div>
      <div className={`${styles.circle} ${styles.circleSm2}`}></div>
      <div className={`${styles.circle} ${styles.circleMd}`}></div>
      <div className={`${styles.circle} ${styles.circleLg}`}></div>
    </div>
  );
};

export default Info;
