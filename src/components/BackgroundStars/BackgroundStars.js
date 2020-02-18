import React, { useEffect, useContext } from 'react';
import { useSpring, animated as a, config } from 'react-spring';

import { GlobalContext } from '@contexts';

import styles from './BackgroundStars.module.scss';

const iTranslateBig = y => `translate3d(0, ${y}%, 0)`;
const iTranslateSmall = y => `translate3d(0, ${y / 2}%, 0)`;

const BackgroundStars = () => {
  const { imagesAPI } = useContext(GlobalContext);
  const images = imagesAPI.get([
    'backgrounds/big-stars.svg',
    'backgrounds/small-stars.svg',
  ]);

  const [props, set] = useSpring(() => ({
    from: { y: 0 },
    // config: { mass: 10, tension: 550, friction: 140 },
    config: config.slow,
  }));

  let scrollPercentage = null;

  const moveBackground = () => {
    scrollPercentage = Math.ceil(
      (100 / document.body.scrollHeight) * -window.pageYOffset
    );

    set({ y: scrollPercentage, immediate: false });
  };

  useEffect(() => {
    window.addEventListener('scroll', moveBackground);
    scrollPercentage = Math.ceil(
      (100 / document.body.scrollHeight) * -window.pageYOffset
    );

    set({ y: scrollPercentage, immediate: true });
    return () => window.removeEventListener('scroll', moveBackground);
  }, []);

  return (
    <div className={styles.container}>
      <a.div
        className={styles.layer}
        style={{
          transform: props.y.interpolate(iTranslateBig),
          backgroundImage: `url(${images['backgrounds/big-stars.svg'].url})`,
        }}
      ></a.div>
      <a.div
        className={styles.layer}
        style={{
          transform: props.y.interpolate(iTranslateSmall),
          backgroundImage: `url(${images['backgrounds/small-stars.svg'].url})`,
        }}
      ></a.div>
    </div>
  );
};

export default BackgroundStars;
