import React from 'react';

import BackgroundStars from '@/components/BackgroundStars';
import Head from '@/components/Head';
import Layout from '@/components/Layout';
import Providers from '@/components/Providers';
import ErrorPage from '@/scenes/ErrorPage';

const Error = () => {
  const title = `Error - Halo Lab`;
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head title={title} />
        <ErrorPage />
      </Layout>
    </Providers>
  );
};

export default Error;
