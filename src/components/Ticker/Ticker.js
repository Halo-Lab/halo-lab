import React, { useRef, useEffect } from 'react';
import { useSpring, animated as a, config } from 'react-spring';
import PropTypes from 'prop-types';

import styles from './Ticker.module.scss';

const STEP = 5;
const TIME = 1;
const NUMBER_OF_LISTS = 3;

const iTranslate = value => `translate3d(${value}px, 0, 0)`;

const Ticker = ({ images }) => {
  const isRunning = useRef(false);
  const container = useRef(null);
  const list = useRef(null);

  const items = [...images, ...images, ...images]; // NUMBER_OF_LISTS

  let fullWidth = null;
  let visibleWidth = null;
  let listWidth = null;
  let startPosition = null;
  let endPosition = null;
  let leftBorder = null;
  let rightBorder = null;

  useEffect(() => {
    fullWidth = list.current.scrollWidth;
    listWidth = fullWidth / NUMBER_OF_LISTS;
    visibleWidth = container.current.offsetWidth;

    startPosition = -listWidth;
    endPosition = -listWidth - listWidth + visibleWidth;
    leftBorder = -listWidth + visibleWidth;
    rightBorder = -listWidth - listWidth;

    set({ x: startPosition });
  }, []);

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
            immediate: false,
          });

          while (isRunning.current) {
            const x = controller.props.to.x + offset;

            if (x >= leftBorder) {
              await next({ x: endPosition, immediate: true });
            } else if (x <= rightBorder) {
              await next({ x: startPosition, immediate: true });
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
    <div ref={container} className={styles.container}>
      <a.ul
        ref={list}
        style={{ transform: props.x.interpolate(iTranslate) }}
        className={styles.list}
      >
        {items.map(({ title }, index) => {
          return (
            <li key={index} className={styles.item}>
              <div className={styles.card}>{title}</div>
            </li>
          );
        })}
      </a.ul>
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
  );
};

Ticker.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  x: PropTypes.any,
};

export default Ticker;
