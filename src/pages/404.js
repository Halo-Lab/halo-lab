import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import Head from '@components/Head';
import BackgroundBlackHole from '@components/BackgroundBlackHole';
import NotFoundPage from '@scenes/NotFoundPage';

const NotFound = () => {
  const title = `404 - Halo Lab`;
  const description = `Oops, it seems like something went wrong, and you found a black hole. We'll try to fix it.`;
  return (
    <Providers>
      <BackgroundBlackHole />
      <Layout>
        <Head title={title} description={description}></Head>
        <NotFoundPage />
      </Layout>
    </Providers>
  );
};

export default NotFound;
