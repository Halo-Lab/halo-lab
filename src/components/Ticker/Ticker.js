import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Ticker.module.scss';

const interval = 100;
let intervalId = null;

const Ticker = ({ items }) => {
  const list = useRef(null);
  const offset = useRef(null);
  const pseudoItems = [...items, ...items, ...items];

  useEffect(() => {
    const startPoint = getStartPoint();

    offset.current = startPoint;

    requestedAnimate({
      duration: 0,
    });
  }, []);

  const getStartPoint = (stepOver = 0) => {
    const fullWidth = list.current.scrollWidth;
    // return -(fullWidth / 3 + stepOver);
    return -(fullWidth / 3);
  };

  const getEndPoint = (stepOver = 0) => {
    const fullWidth = list.current.scrollWidth;
    const visibleWidth = list.current.offsetWidth;
    // return -(fullWidth / 3 + fullWidth / 3 - visibleWidth - stepOver);
    return -(fullWidth / 3 + fullWidth / 3 - visibleWidth);
  };

  const getBoundaries = () => {
    const fullWidth = list.current.scrollWidth;
    const visibleWidth = list.current.offsetWidth;
    const listLength = fullWidth / 3;
    const boundaryLeft = -(listLength - visibleWidth);
    const boundaryRight = -(listLength + listLength);

    return { left: boundaryLeft, right: boundaryRight };
  };

  const getStepOver = offset => {
    const boundaries = getBoundaries();
    const stepOverLeft = offset - boundaries.left;
    const stepOverRight = boundaries.right - offset;

    if (stepOverLeft > 0) {
      return getEndPoint(stepOverLeft);
    }

    if (stepOverRight > 0) {
      return getStartPoint(stepOverRight);
    }
  };

  const requestedAnimate = ({ duration = interval, animation = '' } = {}) => {
    // console.log('current', offset.current);

    const animate = () => {
      list.current.style.transform = `translate3d(${offset.current}px, 0px, 0px)`;
      list.current.style.transitionDuration = `${duration}ms`;
      list.current.style.transitionTimingFunction = animation;

      window.requestAnimationFrame(animate);
    };

    window.requestAnimationFrame(animate);
  };

  const onMouseEnter = ({ target }) => {
    const name = target.getAttribute('data-name');
    let step = name === 'right' ? -25 : 25;

    offset.current += step * 0.5;

    const stepOver = getStepOver(offset.current);

    if (stepOver) {
      offset.current = stepOver;

      requestedAnimate({
        duration: 0,
      });
    } else {
      requestedAnimate({
        // duration: 200,
        animation: 'ease-in',
      });
    }

    intervalId = setInterval(() => {
      offset.current += step;

      const stepOver = getStepOver(offset.current);

      if (stepOver) {
        offset.current = stepOver;

        requestedAnimate({
          duration: 0,
        });
      } else {
        requestedAnimate();
      }
    }, interval);
  };

  const onMouseLeave = ({ target }) => {
    const name = target.getAttribute('data-name');

    clearInterval(intervalId);
  };

  return (
    <div className={styles.container}>
      <ul ref={list} className={styles.list}>
        {pseudoItems.map(({ title }, index) => {
          return (
            <li key={index} className={styles.item}>
              <div className={styles.slide}>{title}</div>
            </li>
          );
        })}
      </ul>
      <div
        data-name="left"
        className={styles.fieldLeft}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        Left
      </div>
      <div
        data-name="right"
        className={styles.fieldRight}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        Right
      </div>
    </div>
  );
};

Ticker.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Ticker;
