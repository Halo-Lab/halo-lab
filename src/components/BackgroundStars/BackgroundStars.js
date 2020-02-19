import React, { useEffect, useContext } from 'react';
import { useSpring, animated as a, config } from 'react-spring';

import { GlobalContext } from '@contexts';

import styles from './BackgroundStars.module.scss';

const iTranslateBig = y => `translate3d(0, ${y}%, 0)`;
const iTranslateSmall = y => `translate3d(0, ${y / 1.5}%, 0)`;

const BackgroundStars = () => {
  const { imagesAPI } = useContext(GlobalContext);

  const images = imagesAPI.get([
    'backgrounds/big-stars.svg',
    'backgrounds/small-stars.svg',
  ]);

  const [props, set] = useSpring(() => ({
    from: { y: 0 },
    config: { mass: 1, tension: 280, friction: 40 },
  }));

  let scrollPercentage = null;

  const moveBackground = ({ isImmediate = false }) => {
    scrollPercentage = Math.ceil(
      (100 / document.body.scrollHeight) * -window.pageYOffset
    );

    set({ y: scrollPercentage, immediate: isImmediate });
  };

  useEffect(() => {
    window.addEventListener('scroll', moveBackground);
    moveBackground({ isImmediate: true });

    return () => window.removeEventListener('scroll', moveBackground);
  }, []);

  return (
    <div className={styles.container}>
      <a.div
        className={styles.wrapper}
        style={{ transform: props.y.interpolate(iTranslateBig) }}
      >
        <a.div
          className={styles.layer}
          style={{
            backgroundImage: `url(${images['backgrounds/big-stars.svg'].url})`,
          }}
        />
      </a.div>
      <a.div
        className={styles.wrapper}
        style={{ transform: props.y.interpolate(iTranslateSmall) }}
      >
        <a.div
          className={styles.layer}
          style={{
            backgroundImage: `url(${images['backgrounds/small-stars.svg'].url})`,
          }}
        />
      </a.div>
    </div>
  );
};

export default BackgroundStars;
