import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import Head from '@components/Head';
import BackgroundBlackHole from '@components/BackgroundBlackHole';
import NotFoundPage from '@scenes/NotFoundPage';

const NotFound = () => {
  const title = `404 - Halo Lab`;
  return (
    <Providers>
      <BackgroundBlackHole />
      <Layout>
        <Head title={title}></Head>
        <NotFoundPage />
      </Layout>
    </Providers>
  );
};

export default NotFound;
