import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import Head from '@components/Head';
import BackgroundStars from '@scenes/BackgroundStars';
import ThanksPage from '@scenes/ThanksPage';

const Thanks = () => {
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head>
          <title>Thanks - Halo Lab Blog</title>
        </Head>
        <ThanksPage />
      </Layout>
    </Providers>
  );
};

export default Thanks;
