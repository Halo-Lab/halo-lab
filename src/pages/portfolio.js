import React from 'react';

import BackgroundStars from '@/components/BackgroundStars';
import Head from '@/components/Head';
import Layout from '@/components/Layout';
import Providers from '@/components/Providers';
import PortfolioPage from '@/scenes/PortfolioPage';

const Portfolio = () => {
  const title = 'Projects - Halo Lab';
  const description = `A destination of aesthetic pleasure, here you will get your dose of inspiration, as well as find a possible way to implement your business idea.`;

  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head title={title} description={description} />
        <PortfolioPage />
      </Layout>
    </Providers>
  );
};

export default Portfolio;
