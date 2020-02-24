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

const Ticker = ({ images, leftArrow, rightArrow }) => {
  const isRunning = useRef(false);
  const container = useRef(null);
  const list = useRef(null);

  const items = [...images, ...images, ...images]; // NUMBER_OF_LISTS

  // metrics calculation

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

  // animation initialize -->

  const [props, set] = useSpring(() => ({
    from: { x: 0 },
    config: configDefault,
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
          // await next({
          //   x:
          //     (controller.props.to || controller.props.from).x +
          //     offset * STEP_COEFFICIENT,
          //   config: configStart,
          //   immediate: false,
          // });

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

          // await next({
          //   x: controller.props.to.x + offset * STEP_COEFFICIENT,
          //   config: configFinish,
          // });
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
        data-direction="forward"
        style={{ cursor: `url('${leftArrow.url}'), auto` }}
        className={styles.asideLeft}
        onMouseEnter={go}
        onMouseLeave={stop}
      />
      <div
        data-direction="back"
        style={{ cursor: `url('${rightArrow.url}'), auto` }}
        className={styles.asideRight}
        onMouseEnter={go}
        onMouseLeave={stop}
      />
    </div>
  );
};

Ticker.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  leftArrow: PropTypes.object,
  rightArrow: PropTypes.object,
  x: PropTypes.any,
};

export default Ticker;
