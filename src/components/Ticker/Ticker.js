import { easeQuadIn, easeQuadOut, easeLinear } from 'd3-ease';
import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useSpring, animated as a } from 'react-spring';
import useBreakpoints from 'use-breakpoints-width';

import styles from './Ticker.module.scss';

const STEP = 5;
const STEP_COEFFICIENT = 20;
const TIME = 1;
const TIME_INCREASED = 750;
const NUMBER_OF_LISTS = 3;

const DIRECTIONS = {
  BACKWARD: 'backward',
  FORWARD: 'forward',
};

const configStart = {
  duration: TIME_INCREASED,
  precision: 0,
  easing: easeQuadIn,
};
const configFinish = {
  duration: TIME_INCREASED,
  precision: 0,
  easing: easeQuadOut,
};
const configDefault = { duration: TIME, precision: 0, easing: easeLinear };

const iTranslate = (value) => `translate3d(${value}px, 0, 0)`;

const Ticker = ({ images, arrowLeft, arrowRight }) => {
  const isRunning = useRef(false);
  const isFinished = useRef(true);
  const container = useRef(null);
  const ticker = useRef(null);
  const initialMetrics = {
    containerWidth: 0,
    tickerWidth: 0,
    listWidth: 0, // width of original list
    startPosition: 0, // the point where the list moves after crossing the right border
    endPosition: 0, // the point where the list moves after crossing the left border
    leftBorder: 0, // the point after which the list should quickly move to end position to simulate an infinite line
    rightBorder: 0, // the point after which the list should quickly move to start position to simulate an infinite line
  };
  const [
    { startPosition, endPosition, leftBorder, rightBorder },
    setMetrics,
  ] = useState(initialMetrics);
  const { width } = useBreakpoints();
  const items = [...images, ...images, ...images].map(({ name, element }, index) => {
    return {
      name: name + index,
      element,
    };
  }); // NUMBER_OF_LISTS

  // metrics calculation

  const updatedMetrics = () => {
    const containerWidth = container.current.offsetWidth;
    const tickerWidth = ticker.current.scrollWidth;
    const listWidth = tickerWidth / NUMBER_OF_LISTS;

    const startPosition = -listWidth;
    const endPosition = -listWidth - listWidth + containerWidth;
    const leftBorder = -listWidth + containerWidth;
    const rightBorder = -listWidth - listWidth;

    setMetrics({ startPosition, endPosition, leftBorder, rightBorder });
    set({ x: startPosition, immediate: true });
  };

  useEffect(() => {
    updatedMetrics();
  }, [width]);

  // animation initialize -->

  const [props, set] = useSpring(() => ({
    from: { x: 0 },
    config: configDefault,
  }));

  // animation engine -->

  const move = (offset) => {
    set((...attrs) => {
      const [, controller] = attrs;

      return {
        to: async (next) => {
          isFinished.current = false;

          // start
          await next({
            x:
              (controller.props.to || controller.props.from).x +
              offset * STEP_COEFFICIENT,
            config: configStart,
            immediate: false,
          });

          // running
          while (isRunning.current) {
            const x = controller.props.to.x + offset;

            if (x >= leftBorder) {
              await next({ x: endPosition, immediate: true });
            } else if (x <= rightBorder) {
              await next({ x: startPosition, immediate: true });
            } else {
              await next({ x: x, config: configDefault, immediate: false });
            }
          }

          isFinished.current = true;

          // finish
          await next({
            x: controller.props.to.x + offset * STEP_COEFFICIENT,
            config: configFinish,
          });
        },
      };
    });
  };

  // handlers -->

  const run = ({ target }) => {
    if (!isFinished.current || isRunning.current) {
      return;
    }

    isRunning.current = true;

    const direction = target.getAttribute('data-direction');
    const offset = direction === DIRECTIONS.FORWARD ? STEP : -STEP;

    move(offset);
  };

  const stop = () => {
    isRunning.current = false;
  };
  return (
    <div ref={container} className={styles.container}>
      <a.ul
        ref={ticker}
        style={{ transform: props.x.interpolate(iTranslate) }}
        className={styles.ticker}
      >
        {items.map(({ name, element }) => {
          return <Fragment key={name}>{element}</Fragment>;
        })}
      </a.ul>
      <div
        data-direction={DIRECTIONS.FORWARD}
        style={{ cursor: `url('${arrowLeft.publicURL}'), auto` }}
        className={styles.asideLeft}
        onMouseEnter={run}
        onMouseLeave={stop}
      />
      <div
        data-direction={DIRECTIONS.BACKWARD}
        style={{ cursor: `url('${arrowRight.publicURL}'), auto` }}
        className={styles.asideRight}
        onMouseEnter={run}
        onMouseLeave={stop}
      />
    </div>
  );
};

Ticker.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  arrowLeft: PropTypes.object,
  arrowRight: PropTypes.object,
  x: PropTypes.any,
};

export default Ticker;
