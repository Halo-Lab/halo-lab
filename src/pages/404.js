import React from 'react';

import BackgroundBlackHole from '@/components/BackgroundBlackHole';
import Head from '@/components/Head';
import Layout from '@/components/Layout';
import Providers from '@/components/Providers';
import NotFoundPage from '@/scenes/NotFoundPage';

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
