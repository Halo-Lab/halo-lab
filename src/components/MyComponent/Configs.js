import React from 'react';
import { useSpring, animated as a, config } from 'react-spring';
import { easeQuadIn, easeQuadOut } from 'd3-ease';

import styles from './MyComponent.module.scss';

const Configs = () => {
  const props = useSpring({
    from: { transform: 0 },
    to: [
      {
        transform: 100,
        config: {
          duration: 1000,
          easing: easeQuadIn,
        },
      },
      { transform: 200, config: { duration: 1000 } },
      {
        transform: 300,
        config: {
          duration: 1000,
          easing: easeQuadOut,
        },
      },
    ],
  });

  const iTransform = value => `translate3d(${value}px, 0, 0)`;

  return (
    <div>
      <div className={styles.area}>Configs</div>
      <a.div style={{ transform: props.transform.interpolate(iTransform) }}>
        Hello, world
      </a.div>
    </div>
  );
};

export default Configs;
