import React from 'react';

import Layout from '@components/Layout';
import Head from '@components/Head';
import Works from '@scenes/Portfolio/components/Works';

const Portfolio = () => {
  return (
    <Layout>
      <Head>
        <title>Portfolio - Halo Lab Blog</title>
      </Head>
      <div>Portfolio</div>
      <Works />
    </Layout>
  );
};

export default Portfolio;
