import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import BackgroundStars from '@scenes/BackgroundStars';
import Head from '@components/Head';
import HomePage from '@scenes/HomePage';

import '@styles/index.scss';

const Home = () => {
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head>
          <title>Главная - Halo Lab Blog</title>
        </Head>
        <HomePage />
      </Layout>
    </Providers>
  );
};

export default Home;
