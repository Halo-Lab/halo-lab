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
      <Hero />
      <WhatWeDo />
      <Projects title="Projects" navigation={true} />
      <Testimonials />
      <Gallery />
      <Posts />
      <MailUs />
    </div>
  );
};

export default HomePage;
