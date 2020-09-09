import React from 'react';

import Head from '@components/Head';

import ServicesPage from '@scenes/ServicesPage';

const Services = () => {
  const title = 'Services - Halo Lab';
  const description = `We offer to get acquainted with tools that we use in our studio to create the wonders of the digital world.`;

  return (
    <>
      <Head title={title} description={description}></Head>
      <ServicesPage />
    </>
  );
};

export default Services;
