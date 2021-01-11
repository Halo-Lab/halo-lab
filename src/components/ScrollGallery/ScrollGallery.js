import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

import { springDebounce } from '@/helpers';

import styles from './Styles.module.scss';

const Gallery = ({ children, step }) => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', springDebounce(handleScroll));
    return () => window.removeEventListener('scroll', springDebounce(handleScroll));
  }, [springDebounce]);

  const [{ springscrollY }, springsetScrollY] = useSpring(() => ({
    springscrollY: 0,
  }));
  const STEP = step;
  springsetScrollY({ springscrollY: scrollY });
  const interpHeader = springscrollY.interpolate(
    (o) => `translateX(-${o / STEP}px)`,
  );

  return (
    <animated.div className={styles.items} style={{ transform: interpHeader }}>
      {children}
    </animated.div>
  );
};

Gallery.propTypes = {
  step: PropTypes.number,
  children: PropTypes.array,
};

export default Gallery;
