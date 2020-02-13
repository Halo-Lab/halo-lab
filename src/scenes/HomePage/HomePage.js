import React from 'react';

import Projects from '@scenes/Projects';
import MailUs from '@scenes/MailUs';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Posts from './components/Posts';

import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className="pageWrapper">
        <Hero />
        <WhatWeDo />
        <Projects title="Projects" navigation={true} />
        <Testimonials />
      </div>
      <Gallery />
      <div style={{ paddingTop: '0' }} className="pageWrapper">
        <Posts />
        <MailUs />
      </div>
    </div>
  );
};

export default HomePage;
