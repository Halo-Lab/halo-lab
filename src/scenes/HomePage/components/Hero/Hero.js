import React from 'react';

import { useHomeHeroAssets } from '@hooks/queries';
import Info from './components/Info';

import styles from './Hero.module.scss';

const Hero = () => {
  // eslint-disable-next-line no-unused-vars
  const { quotes, ...infoAssets } = useHomeHeroAssets();

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          <span>Design-driven </span>
          <br />
          development of <span className={styles.mobile}>&nbsp;</span>
          <br />
          your <span>web product</span> <br />
          for years
        </h2>
        <div className={`${styles.circle} ${styles.circleSm1}`}></div>
        <div className={`${styles.circle} ${styles.circleSm2}`}></div>
        <div className={`${styles.circle} ${styles.circleMd}`}></div>
      </div>

      <Info {...infoAssets} />
    </section>
  );
};

export default Hero;
