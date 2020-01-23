import React from 'react';

import Layout from '@components/Layout';
import Head from '@components/Head';
import Clients from '@scenes/Portfolio/components/Clients';

const Portfolio = () => {
  return (
    <Layout>
      <Head>
        <title>Portfolio - Halo Lab Blog</title>
      </Head>
      <div>Portfolio</div>
      <Clients />
    </Layout>
  );
};

export default Portfolio;
