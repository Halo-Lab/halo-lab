import React from 'react';
import Projects from '@scenes/Projects';
import MailUs from '@scenes/MailUs';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Posts from './components/Posts';
import Works from './components/Works';

import PropTypes from 'prop-types';

import styles from './HomePage.module.scss';

const HomePage = ({ animation }) => {
  return (
    <div className={styles.container}>
      <Gallery />
    </div>
  );
};

HomePage.propTypes = {
  animation: PropTypes.any,
};

export default HomePage;
