import React, { useContext } from 'react';

import { GlobalContext } from '@contexts';

import styles from './Hero.module.scss';

const Hero = () => {
  const { imagesAPI } = useContext(GlobalContext);

  const images = imagesAPI.get([
    'cards/upwork-logo.svg',
    'cards/dribbble-logo.svg',
    'cards/clutch-mini-logo.svg',
  ]);

  return (
    <section className={styles.container}>
      <div>
        <h2 className={styles.title}>
          <span>Design driven </span>
          <br />
          development of your <br />
          <span>web product</span> for years.
        </h2>
        <div className={styles.subtitle}>
          Design is not just what it looks like. Design is how it works!” —
          Steve Jobs
        </div>
      </div>

      <div className={styles.info}>
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
    </section>
  );
};

export default Hero;
