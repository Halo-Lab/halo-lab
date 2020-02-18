import React from 'react';
import { useSpring, animated as a, config } from 'react-spring';

import styles from './MyComponent.module.scss';

const myConfig = {
  mass: 1,
  tension: 180,
  friction: 12,
  clamp: true,
};

const start = {
  mass: 60,
  tension: 120,
  friction: 1,
  clamp: true,
};

const running = {
  mass: 1,
  tension: 10,
  friction: 1,
  clamp: true,
};

const finish = {
  mass: 1,
  tension: 100,
  friction: 80,
  clamp: false,
};

const Three = () => {
  const [props, set] = useSpring(() => ({
    from: {
      transform: 0,
    },
    to: {
      transform: 100,
    },
    config: running,
    // config: config.wobbly,
    onRest: () => console.log('finished'),
  }));

  const interpolateTransform = value => `translate3d(${value}px, 0, 0)`;

  const onMouseEnter = () => {
    set({ transform: 0, config: start, immediate: false });
  };
  const onMouseLeave = () => {
    set({ transform: 100, config: finish });
  };

  return (
    <div>
      <div>Three</div>
      <a.div
        style={{ transform: props.transform.interpolate(interpolateTransform) }}
      >
        Hello, world!
      </a.div>
      <div
        className={styles.area}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        Area
      </div>
    </div>
  );
};

export default Three;
