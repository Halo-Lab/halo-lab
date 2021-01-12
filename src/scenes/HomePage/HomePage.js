import PropTypes from 'prop-types';
import React from 'react';

import MailUs from '@/scenes/MailUs';
import Projects from '@/scenes/Projects';

import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Posts from './components/Posts';
import Testimonials from './components/Testimonials';
import WhatWeDo from './components/WhatWeDo';
import Works from './components/Works';

import styles from './HomePage.module.scss';

const HomePage = ({ animation }) => {
  return (
    <div className={styles.container}>
      <div className="pageWrapper">
        <Hero animation={animation} />
        <WhatWeDo />
      </div>
      <Works />
      <div className="pageWrapper">
        <Projects title="Projects" navigation />
      </div>
      <Testimonials />
      <Gallery />
      <div className="pageWrapper">
        <Posts />
      </div>
      <MailUs />
    </div>
  );
};

HomePage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  animation: PropTypes.any.isRequired,
};

export default HomePage;
