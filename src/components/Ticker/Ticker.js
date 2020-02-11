import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Ticker.module.scss';

const interval = 100;
let intervalId = null;

const Ticker = ({ items }) => {
  const list = useRef(null);
  const offset = useRef(null);

  useEffect(() => {
    const fullWidth = list.current.scrollWidth;
    const visibleWidth = list.current.offsetWidth;

    offset.current = -(fullWidth / 2 - visibleWidth / 2);

    requestedAnimate({
      offset: offset.current,
      duration: 0,
    });
  }, []);

  const calculateOffset = (value, size) => {
    const boundaryLeft = 0;
    const boundaryRight = 0;

    let result = value + size;

    if (result > boundaryLeft) {
    }
    if (result < boundaryRight) {
    }

    return result;
  };

  const requestedAnimate = ({ duration = interval, animation = '' }) => {
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
    requestedAnimate({});

    intervalId = setInterval(() => {
      offset.current += step;
      requestedAnimate({});
    }, interval);
  };

  const onMouseLeave = ({ target }) => {
    const name = target.getAttribute('data-name');

    clearInterval(intervalId);
  };

  return (
    <div className={styles.container}>
      <ul ref={list} className={styles.list}>
        {items.map(({ id, title }) => {
          return (
            <li key={id} className={styles.item}>
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
