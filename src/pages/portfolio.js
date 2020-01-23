import React from 'react';

import Layout from '@components/Layout';
import Head from '@components/Head';
import Clients from '@scenes/Portfolio/components/Clients';
import Works from '@scenes/Portfolio/components/Works';

const Portfolio = () => {
  return (
    <Layout>
      <Head>
        <title>Portfolio - Halo Lab Blog</title>
      </Head>
      <Clients />
      <Works />
    </Layout>
  );
};

export default Portfolio;
