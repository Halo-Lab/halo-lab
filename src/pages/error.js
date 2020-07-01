import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import Head from '@components/Head';
import BackgroundStars from '@components/BackgroundStars';
import ErrorPage from '@scenes/ErrorPage';

const Error = () => {
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head>
          <title>Error - Halo Lab</title>
        </Head>
        <ErrorPage />
      </Layout>
    </Providers>
  );
};

export default Error;
