import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import BackgroundStars from '@components/BackgroundStars';
import Head from '@components/Head';
import Title from '@scenes/Thanks/components/Title';

const Thanks = () => {
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head>
          <title>Thanks - Halo Lab Blog</title>
        </Head>
        <Title />
      </Layout>
    </Providers>
  );
};

export default Thanks;
