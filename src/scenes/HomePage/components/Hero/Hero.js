import React from 'react';

import { animated } from 'react-spring';
import { useHomeHeroAssets } from '@hooks/queries';
import { useInView } from 'react-intersection-observer';

import Info from './components/Info';
import Title from './images/headline.inline.svg';
import PropTypes from 'prop-types';

import styles from './Hero.module.scss';

const trans1 = (x, y) => `translate3d(${x / 60}px,${y / 60}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 40}px,${y / 40}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;

const Hero = ({ animation }) => {
  // eslint-disable-next-line no-unused-vars
  const { quotes, ...infoAssets } = useHomeHeroAssets();
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <section ref={ref} className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1 className={styles.titleText}>
            Design-driven development of your web product for years
          </h1>
          <Title className={styles.titleSvg} />
        </div>
        <animated.div
          style={{
            transform: inView ? animation.xy.interpolate(trans1) : 'none',
          }}
          className={`${styles.circleWrapper} ${styles.circleSm1Pos}`}
        >
          <div className={`${styles.circle} ${styles.circleSm1}`} />
        </animated.div>
        <animated.div
          style={{
            transform: inView ? animation.xy.interpolate(trans2) : 'none',
          }}
          className={`${styles.circleWrapper} ${styles.circleSm2Pos}`}
        >
          <div className={`${styles.circle} ${styles.circleSm2}`} />
        </animated.div>
        <animated.div
          style={{
            transform: inView ? animation.xy.interpolate(trans3) : 'none',
          }}
          className={`${styles.circleWrapper} ${styles.circleMdPos}`}
        >
          <div className={`${styles.circle} ${styles.circleMd}`} />
        </animated.div>
      </div>

      <Info {...infoAssets} />
    </section>
  );
};

Hero.propTypes = {
  animation: PropTypes.any,
};

export default Hero;
