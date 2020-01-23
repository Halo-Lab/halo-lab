import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import BackgroundStars from '@components/BackgroundStars';
import Head from '@components/Head';
import Clients from '@scenes/Portfolio/components/Clients';
import Works from '@scenes/Portfolio/components/Works';

const Portfolio = () => {
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head>
          <title>Portfolio - Halo Lab Blog</title>
        </Head>
        <Clients />
        <Works />
      </Layout>
    </Providers>
  );
};

export default Portfolio;
