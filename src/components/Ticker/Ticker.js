import React, { useRef } from 'react';
import { useSpring, animated as a, config } from 'react-spring';
import PropTypes from 'prop-types';

import styles from './Ticker.module.scss';

const STEP = 2.5;
const TIME = 1;

const iTranslate = value => `translate3d(${value}px, 0, 0)`;

const Ticker = () => {
  const isRunning = useRef(false);

  // animation configs -->

  const [props, set] = useSpring(() => ({
    x: 0,
    config: { duration: TIME, precision: 0 },
  }));

  // handlers -->

  const go = ({ target }) => {
    isRunning.current = true;

    const direction = target.getAttribute('data-direction');
    const offset = direction === 'forward' ? STEP : -STEP;

    set((...attrs) => {
      const [, controller] = attrs;

      return {
        to: async next => {
          await next({
            x: (controller.props.to || controller.props.from).x + offset,
          });

          while (isRunning.current) {
            const x = controller.props.to.x + offset;

            if (x >= 500) {
              await next({ x: 0, immediate: true });
            } else if (x <= -10) {
              await next({ x: 490, immediate: true });
            } else {
              await next({ x: x, immediate: false });
            }
          }

          await next({
            x: controller.props.to.x + offset,
          });
        },
      };
    });
  };

  const stop = () => {
    isRunning.current = false;
  };

  return (
    <div>
      <div>Ticker</div>
      <a.div style={{ transform: props.x.interpolate(iTranslate) }}>
        Hello, world!
      </a.div>
      <div className={styles.container}>
        <div
          data-direction="back"
          className={styles.asideLeft}
          onMouseEnter={go}
          onMouseLeave={stop}
        />
        <div
          data-direction="forward"
          className={styles.asideRight}
          onMouseEnter={go}
          onMouseLeave={stop}
        />
      </div>
    </div>
  );
};

Ticker.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  x: PropTypes.any,
};

export default Ticker;
