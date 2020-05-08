import React from 'react';

import { useHomeHeroAssets } from '@hooks/queries';
import Info from './components/Info';
import Title from './images/title.inline.svg';

import styles from './Hero.module.scss';

const Hero = () => {
  // eslint-disable-next-line no-unused-vars
  const { quotes, ...infoAssets } = useHomeHeroAssets();
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2 className={styles.titleText}>
            development of your web product for years
          </h2>
          <Title className={styles.titleSvg} />
        </div>
        <div className={`${styles.circle} ${styles.circleSm1}`} />
        <div className={`${styles.circle} ${styles.circleSm2}`} />
        <div className={`${styles.circle} ${styles.circleMd}`} />
      </div>

      <Info {...infoAssets} />
    </section>
  );
};

export default Hero;
