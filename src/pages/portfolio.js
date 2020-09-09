import React from 'react';

import Head from '@components/Head';

import PortfolioPage from '@scenes/PortfolioPage';

const Portfolio = () => {
  const title = 'Projects - Halo Lab';
  const description =
    'A destination of aesthetic pleasure, here you will get your dose of inspiration, as well as find a possible way to implement your business idea.';

  return (
    <>
      <Head title={title} description={description}></Head>
      <PortfolioPage />
    </>
  );
};

export default Portfolio;
