import React from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';

import Arrow from './components/Arrow';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = ({ children, settings }) => {
  const defaultSettings = {
    nextArrpw: <Arrow />,
    prevArrow: <Arrow />,
    ...settings,
  };

  return <Slick {...defaultSettings}>{children}</Slick>;
};

Slider.propTypes = {
  children: PropTypes.node.isRequired,
  settings: PropTypes.object,
};

export default Slider;
