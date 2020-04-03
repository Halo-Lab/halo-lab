import React from 'react';

import { useHomeHeroAssets } from '@hooks/queries';
import Info from './components/Info';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';

import styles from './Hero.module.scss';

const calc = (x, y) => [x, y];
const translatesm = (x, y) => `translate3d(${x / 80}px,${y / 40}px,0)`;
const translatemd = (x, y) => `translate3d(${x / 50}px,${y / 30}px,0)`;
const config = { mass: 20, tension: 550, friction: 140 };

const Hero = () => {
  // eslint-disable-next-line no-unused-vars
  const { quotes, ...infoAssets } = useHomeHeroAssets();
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: config,
  }));
  return (
    <section
      className={styles.container}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          <span className={styles.gradient}>Design-driven </span>
          <br />
          development of <span className={styles.mobile}>&nbsp;</span>
          <br />
          your <span className={styles.gradient}>web product</span> <br />
          for years
        </h2>
        <animated.div
          className={`${styles.circle} ${styles.circleSm1}`}
          style={{ transform: props.xy.interpolate(translatesm) }}
        />
        <animated.div
          className={`${styles.circle} ${styles.circleSm2}`}
          style={{ transform: props.xy.interpolate(translatemd) }}
        />
        <animated.div
          className={`${styles.circle} ${styles.circleMd}`}
          style={{ transform: props.xy.interpolate(translatemd) }}
        />
      </div>

      <Info {...infoAssets} />
    </section>
  );
};

Hero.propTypes = {
  xy: PropTypes.any,
};

export default Hero;
