import React, { useRef } from 'react';
import { useSpring, animated as a, config } from 'react-spring';

import styles from './MyComponent.module.scss';

const start = {
  mass: 10,
  tension: 60,
  friction: 10,
  clamp: true,
};

const configRun = {
  mass: 1,
  tension: 10,
  friction: 1,
  clamp: true,
};

const finish = {
  mass: 1,
  tension: 120,
  friction: 80,
  clamp: false,
};

const myConfig = {
  duration: 250,
};
const STEP = 25;

const Chain = () => {
  const running = useRef(true);

  const [props, set] = useSpring(() => {
    return {
      from: { transform: 0 },
      config: myConfig,
    };
  });

  const interpolateTransform = value => `translate3d(${value}px, 0, 0)`;

  // handlers

  const onStart = () => {
    running.current = true;

    set((...attrs) => {
      const [, controller] = attrs;

      return {
        to: async next => {
          next({
            transform:
              (controller.props.to || controller.props.from).transform + STEP,
            config: start,
          });

          while (running.current) {
            await next({
              transform:
                (controller.props.to || controller.props.from).transform + STEP,
              config: myConfig,
            });
          }

          next({
            transform:
              (controller.props.to || controller.props.from).transform + STEP,
            config: finish,
          });
        },
        // config: configRun,
      };
    });
  };

  const onFinish = () => {
    running.current = false;
  };

  const onMouseEnter = () => {
    setRunning(true);
  };

  const onMouseLeave = () => {
    setRunning(false);
  };

  return (
    <div>
      <div>Chain</div>
      <button onClick={onStart}>Start</button>
      <button onClick={onFinish}>Finish</button>
      <a.div
        style={{ transform: props.transform.interpolate(interpolateTransform) }}
      >
        Hello, world
      </a.div>
    </div>
  );
};

export default Chain;
