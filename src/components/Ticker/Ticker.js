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
    const fullWidth = list.current.scrollWidth;

    offset.current = -(fullWidth / 3);

    requestedAnimate({
      offset: offset.current,
      duration: 0,
    });
  }, []);

  const check = offset => {
    const fullWidth = list.current.scrollWidth;
    const visibleWidth = list.current.offsetWidth;
    const originalLength = fullWidth / 3;
    const boundaryLeft = -(originalLength - visibleWidth);
    const boundaryRight = -(originalLength + originalLength);

    const startPoint = -(fullWidth / 3);
    const endPoint = -(fullWidth / 3 + fullWidth / 3);

    if (offset >= boundaryLeft) {
      console.log('to end', endPoint);
    }

    if (offset <= boundaryRight) {
      console.log('to start', startPoint);
      return true;
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

    offset.current += step;
    requestedAnimate();

    intervalId = setInterval(() => {
      offset.current += step;

      const options = check(offset.current);

      requestedAnimate();
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
