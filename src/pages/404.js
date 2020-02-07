import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import Head from '@components/Head';
import BackgroundBlackHole from '@scenes/BackgroundBlackHole';
import NotFoundPage from '@scenes/NotFoundPage';

const NotFound = () => (
  <Providers>
    <BackgroundBlackHole />
    <Layout>
      <Head>
        <title>404 - Halo Lab Blog</title>
      </Head>
      <NotFoundPage />
    </Layout>
  </Providers>
);

export default NotFound;
