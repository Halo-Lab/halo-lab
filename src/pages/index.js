import React from 'react';

import Layout from '@components/Layout';
import Head from '@components/Head';
import MailUs from '@components/MailUs';
import Hero from '@scenes/Home/components/Hero';
import WhatWeDo from '@scenes/Home/components/WhatWeDo';
import Projects from '@scenes/Home/components/Projects';

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
        <MailUs />
      </div>
    </Layout>
  );
};

export default Home;
