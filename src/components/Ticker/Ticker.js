import React, { useRef, useEffect } from 'react';
import { useSpring, animated as a } from 'react-spring';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import styles from './Ticker.module.scss';

const STEP = 5;
const TIME = 1;
const NUMBER_OF_LISTS = 3;

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
    config: { duration: TIME, precision: 0 },
  }));

  // handlers -->

  const go = ({ target }) => {
    isRunning.current = true;

    const direction = target.getAttribute('data-direction');
    const offset = direction === 'forward' ? STEP : -STEP;

    set({
      to: async next => {
        await next({
          x: props.x.lastPosition + offset,
          immediate: false,
        });

        while (isRunning.current) {
          const x = props.x.lastPosition + offset;

          if (x >= leftBorder) {
            await next({ x: endPosition, immediate: true });
          } else if (x <= rightBorder) {
            await next({ x: startPosition, immediate: true });
          } else {
            await next({ x: x, immediate: false });
          }
        }

        await next({
          x: props.x.lastPosition + offset,
        });
      },
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
