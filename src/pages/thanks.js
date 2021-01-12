import React from 'react';

import BackgroundStars from '@/components/BackgroundStars';
import Head from '@/components/Head';
import Layout from '@/components/Layout';
import Providers from '@/components/Providers';
import ThanksPage from '@/scenes/ThanksPage';

const Thanks = () => {
  const title = `Thanks - Halo Lab`;
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head title={title} />
        <ThanksPage />
      </Layout>
    </Providers>
  );
};

export default Thanks;
