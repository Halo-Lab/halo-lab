import React from 'react';

import { animated } from 'react-spring'
import { useHomeHeroAssets } from '@hooks/queries';
import Info from './components/Info';
import Title from './images/headline.inline.svg';

import styles from './Hero.module.scss';

const trans1 = (x, y) => `translate3d(${x / 40}px,${y / 40}px,0)`
const trans2 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`
const trans3 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
// const trans1 = (x, y) => `translate3d(${x / 30}px,${y / 10}px,0)`
// const trans2 = (x, y) => `translate3d(${x / 25 - 27}px,${y / 30}px,0)`
// const trans3 = (x, y) => `translate3d(${x /  30 }px,${y / 30 - 0}px,0)`

const Hero = ({animation}) => {

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
        <animated.div style={{ transform: animation.xy.interpolate(trans1) }} className={`${styles.circleWrapper} ${styles.circleSm1Pos}`}>
          <div className={`${styles.circle} ${styles.circleSm1}`} />
        </animated.div>
        <animated.div style={{ transform: animation.xy.interpolate(trans2) }} className={`${styles.circleWrapper} ${styles.circleSm2Pos}`}>
          <div className={`${styles.circle} ${styles.circleSm2}`} />
        </animated.div>
        <animated.div style={{ transform: animation.xy.interpolate(trans3) }} className={`${styles.circleWrapper} ${styles.circleMdPos}`}>
          <div className={`${styles.circle} ${styles.circleMd}`} />
        </animated.div>
      </div>

      <Info {...infoAssets} />
    </section>
  );
};

export default Hero;
