import React, { useRef, useEffect } from 'react';
import { useSpring, animated as a } from 'react-spring';
import { easeQuadIn, easeQuadOut, easeLinear } from 'd3-ease';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

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

const iTranslate = value => `translate3d(${value}px, 0, 0)`;

const Ticker = ({ images, arrowLeft, arrowRight }) => {
  const isRunning = useRef(false);
  const container = useRef(null);
  const ticker = useRef(null);

  const items = [...images, ...images, ...images]; // NUMBER_OF_LISTS

  // metrics calculation

  let containerWidth = null;
  let tickerWidth = null;
  let listWidth = null; // width of original list
  let startPosition = null; // the point where the list moves after crossing the right border
  let endPosition = null; // the point where the list moves after crossing the left border
  let leftBorder = null; // the point after which the list should quickly move to end position to simulate an infinite line
  let rightBorder = null; // the point after which the list should quickly move to start position to simulate an infinite line

  useEffect(() => {
    containerWidth = container.current.offsetWidth;
    tickerWidth = ticker.current.scrollWidth;
    listWidth = tickerWidth / NUMBER_OF_LISTS;

    startPosition = -listWidth;
    endPosition = -listWidth - listWidth + containerWidth;
    leftBorder = -listWidth + containerWidth;
    rightBorder = -listWidth - listWidth;

    set({ x: startPosition });
  }, []);

  // animation initialize -->

  const [props, set] = useSpring(() => ({
    from: { x: 0 },
    config: configDefault,
  }));

  // animation engine -->

  const move = offset => {
    set((...attrs) => {
      const [, controller] = attrs;

      return {
        to: async next => {
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

  const go = ({ target }) => {
    if (isRunning.current) {
      isRunning.current = false;
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
        {items.map(({ childImageSharp }, index) => {
          return (
            <li key={index} className={styles.item}>
              <div className={styles.card}>
                <Img fluid={childImageSharp.fluid} draggable={false} />
              </div>
            </li>
          );
        })}
      </a.ul>
      <div
        data-direction={DIRECTIONS.FORWARD}
        style={{ cursor: `url('${arrowLeft.publicURL}'), auto` }}
        className={styles.asideLeft}
        onMouseEnter={go}
        onMouseLeave={stop}
      />
      <div
        data-direction={DIRECTIONS.BACKWARD}
        style={{ cursor: `url('${arrowRight.publicURL}'), auto` }}
        className={styles.asideRight}
        onMouseEnter={go}
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
