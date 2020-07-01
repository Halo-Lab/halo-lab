import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import Head from '@components/Head';
import BackgroundStars from '@components/BackgroundStars';
import PortfolioPage from '@scenes/PortfolioPage';

const Portfolio = () => {
  const title = 'Projects - Halo Lab';
  const description = `A destination of aesthetic pleasure, here you will get your dose of inspiration, as well as find a possible way to implement your business idea.`;

  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head title={title} description={description}></Head>
        <PortfolioPage />
      </Layout>
    </Providers>
  );
};

export default Portfolio;
