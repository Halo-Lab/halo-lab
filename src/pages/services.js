import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import Head from '@components/Head';
import BackgroundStars from '@components/BackgroundStars';
import ServicesPage from '@scenes/ServicesPage';

const Services = () => {
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head>
          <title>Services - Halo Lab Blog</title>
        </Head>
        <ServicesPage />
      </Layout>
    </Providers>
  );
};

export default Services;
