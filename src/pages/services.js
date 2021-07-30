import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import Head from '@components/Head';
import BackgroundStars from '@components/BackgroundStars';
import ServicesPage from '@scenes/ServicesPage';

const Services = () => {
  const title = 'Services | Web Design and Development Services | Halo Lab';
  const description = `We offer to get acquainted with tools that we use in our studio to create the wonders of the digital world.`;

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

export default Services;
