import React from 'react';

import Layout from '@components/Layout';
import Head from '@components/Head';

import Hero from '@scenes/Home/components/Hero';

import '@styles/index.scss';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Главная - Halo Lab Blog</title>
      </Head>
      <div className="main-home">
        <Hero />
      </div>
    </Layout>
  );
};

export default Home;
