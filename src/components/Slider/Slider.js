import React from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';

import Arrow from './components/Arrow';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Slider.module.scss';

const Slider = ({ children, settings, instance }) => {
  const defaultSettings = {
    prevArrow: <Arrow direction="previous" />,
    nextArrow: <Arrow direction="next" />,
    dotsClass: styles.dots,
    customPaging: function customDot(i) {
      return <div>{i}</div>;
    },
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
