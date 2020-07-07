import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import Head from '@components/Head';
import BackgroundStars from '@components/BackgroundStars';
import ServicesPage from '@scenes/ServicesPage';
import PropTypes from 'prop-types';

const Services = ({ title, description }) => {
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head title={title} description={description}></Head>
        <ServicesPage />
      </Layout>
    </Providers>
  );
};

Services.defaultProps = {
  title: `Services - Halo Lab`,
  description: `We offer to get acquainted with tools that we use in our studio to create the wonders of the digital world.`,
};

Services.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Services;
