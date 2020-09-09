import React from 'react';
import PropTypes from 'prop-types';

import Projects from '@scenes/Projects';
import MailUs from '@scenes/MailUs';

import BackgroundStars from '@components/BackgroundStars';

import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Posts from './components/Posts';
import Works from './components/Works';

import styles from './HomePage.module.scss';

const HomePage = ({ animation }) => {
  return (
    <>
      <BackgroundStars animation={animation} />
      <div className={styles.container}>
        <div className="pageWrapper">
          <Hero animation={animation} />
          <WhatWeDo />
        </div>
        <Works />
        <div className="pageWrapper">
          <Projects title="Projects" navigation={true} />
        </div>
        <Testimonials />
        <Gallery />
        <div className="pageWrapper">
          <Posts />
        </div>
        <MailUs />
      </div>
    </>
  );
};

HomePage.propTypes = {
  animation: PropTypes.object.isRequired,
};

export default HomePage;
