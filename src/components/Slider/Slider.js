import PropTypes from 'prop-types';
import React from 'react';
import Slick from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import Arrow from './components/Arrow';

import styles from './Slider.module.scss';

const Slider = ({ children, settings, instance }) => {
  const defaultSettings = {
    prevArrow: <Arrow direction="previous" />,
    nextArrow: <Arrow direction="next" />,
    dotsClass: styles.dots,
    customPaging: function customDot(i) {
      return (
        <button className={styles.button}>
          <span className={styles.title}>{i}</span>
        </button>
      );
    },
    lazyLoad: true,
    ...settings,
  };

  return (
    <Slick {...defaultSettings} ref={instance}>
      {children}
    </Slick>
  );
};

Slider.propTypes = {
  children: PropTypes.node.isRequired,
  settings: PropTypes.object,
  instance: PropTypes.any,
};

export default Slider;
