import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import BackgroundBlackHole from '@components/BackgroundBlackHole';
import Head from '@components/Head';
import Title from '@scenes/404/components/Title';

const NotFound = () => (
  <Providers>
    <BackgroundBlackHole />
    <Layout>
      <Head>
        <title>Not Found - Halo Lab Blog</title>
      </Head>
      <Title />
    </Layout>
  </Providers>
);

export default NotFound;
