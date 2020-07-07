import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import Head from '@components/Head';
import BackgroundStars from '@components/BackgroundStars';
import PortfolioPage from '@scenes/PortfolioPage';
import PropTypes from 'prop-types';

const Portfolio = ({ title, description }) => {
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

Portfolio.defaultProps = {
  title: `Projects - Halo Lab`,
  description: `A destination of aesthetic pleasure, here you will get your dose of inspiration, as well as find a possible way to implement your business idea.`,
};

Portfolio.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Portfolio;
