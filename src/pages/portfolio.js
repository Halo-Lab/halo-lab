import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import Head from '@components/Head';
import BackgroundStars from '@scenes/BackgroundStars';
import PortfolioPage from '@scenes/PortfolioPage';

const Portfolio = () => {
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head>
          <title>Portfolio - Halo Lab Blog</title>
        </Head>
        <PortfolioPage />
      </Layout>
    </Providers>
  );
};

export default Portfolio;
