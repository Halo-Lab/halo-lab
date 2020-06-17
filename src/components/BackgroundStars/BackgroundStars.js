import React, { useEffect, useContext } from 'react';
import { useSpring, animated as a } from 'react-spring';
import PropTypes from 'prop-types';

import { MenuContext } from '@contexts';
import { useBackgroundsAssets } from '@hooks/queries';
import { checkBrowser } from '@helpers';

import styles from './BackgroundStars.module.scss';

const myConfig = { mass: 1, tension: 280, friction: 40 };

const iTranslateBig = y => `translate3d(0, ${y}%, 0)`;
const iTranslateSmall = y => `translate3d(0, ${y / 1.5}%, 0)`;
const iScale = value => `scale(${value})`;

const transition = (x, y) => `translate3d(${x / 50}px,${y / 50}px,0)`;

const BackgroundStars = ({ animation }) => {
  const animationStars = animation ? animation.xy.interpolate(transition) : '';
  const { starsBig, starsSmall } = useBackgroundsAssets();
  const { isOpened } = useContext(MenuContext);

  // disable parallax effect in Safari browser -->
  const { isSafari } = checkBrowser();

  if (isSafari) {
    return (
      <div
        style={{
          backgroundImage: `url(${starsSmall.publicURL})`,
        }}
        className={styles.containerStatic}
      />
    );
  }
  // <-- disable parallax effect in Safari browser

  const [layerProps, set] = useSpring(() => ({
    from: { y: 0 },
    config: myConfig,
  }));
  const hiddenStarsProps = useSpring({
    opacity: isOpened ? 1 : 0,
    scale: isOpened ? 1.4 : 0.8,
    config: myConfig,
  });
  const containerProps = useSpring({
    scale: isOpened ? 1.2 : 1,
  });

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
    <a.div
      className={styles.container}
      style={{
        transform: containerProps.scale.interpolate(iScale),
      }}
    >
      <a.div
        className={styles.hiddenStars}
        style={{
          opacity: hiddenStarsProps.opacity,
          transform: hiddenStarsProps.scale.interpolate(iScale),
          backgroundImage: `url(${starsSmall.publicURL})`,
        }}
      />
      <a.div
        className={styles.wrapper}
        style={{
          transform: layerProps.y.interpolate(iTranslateBig),
        }}
      >
        <a.div
          className={styles.layer}
          style={{
            backgroundImage: `url(${starsBig.publicURL})`,
            transform: animationStars,
          }}
        />
      </a.div>
      <a.div
        className={styles.wrapper}
        style={{
          transform: layerProps.y.interpolate(iTranslateSmall),
        }}
      >
        <a.div
          className={styles.layer}
          style={{
            backgroundImage: `url(${starsSmall.publicURL})`,
            transform: animationStars,
          }}
        />
      </a.div>
    </a.div>
  );
};

BackgroundStars.propTypes = {
  animation: PropTypes.any,
};

export default BackgroundStars;
