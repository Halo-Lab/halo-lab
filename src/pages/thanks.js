import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import Head from '@components/Head';
import BackgroundStars from '@components/BackgroundStars';
import ThanksPage from '@scenes/ThanksPage';

const Thanks = () => {
  const title = `Thanks | Web Design and Development Services | Halo Lab`;
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head title={title}></Head>
        <ThanksPage />
      </Layout>
    </Providers>
  );
};

export default Thanks;
