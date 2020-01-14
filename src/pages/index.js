import React from 'react';

import Layout from '@components/Layout';
import Head from '@components/Head';
import MailUs from '@components/MailUs';
import Hero from '@scenes/Home/components/Hero';
import WhatWeDo from '@scenes/Home/components/WhatWeDo';
import Projects from '@scenes/Home/components/Projects';
import Testimonials from '@scenes/Home/components/Testimonials';
// import Posts from '@scenes/Home/components/Posts';

import '@styles/index.scss';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Главная - Halo Lab Blog</title>
      </Head>
      <div className="main-home">
        <Hero />
        <WhatWeDo />
        <Projects />
        <Testimonials />
        {/* <Posts /> */}
        <MailUs />
      </div>
    </Layout>
  );
};

export default Home;
