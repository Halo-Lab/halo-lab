import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import BackgroundStars from '@components/BackgroundStars';
import Head from '@components/Head';
import MailUs from '@components/MailUs';
import Hero from '@scenes/Home/components/Hero';
import WhatWeDo from '@scenes/Home/components/WhatWeDo';
import Projects from '@scenes/Projects';
import Testimonials from '@scenes/Home/components/Testimonials';
import Gallery from '@scenes/Home/components/Gallery';
import Posts from '@scenes/Home/components/Posts';

import '@styles/index.scss';

const Home = () => {
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head>
          <title>Главная - Halo Lab Blog</title>
        </Head>
        <div className="main-home">
          <Hero />
          <WhatWeDo />
          <Projects />
          <Testimonials />
          <Gallery />
          <Posts />
          <MailUs />
        </div>
      </Layout>
    </Providers>
  );
};

export default Home;
