import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import Head from '@components/Head';
import BackgroundStars from '@components/BackgroundStars';
import ThanksPage from '@scenes/ThanksPage';

const Thanks = () => {
  const title = `Thanks - Halo Lab`;
  const description = `Let us say thank you for your cosmic request on this page. We can't wait anymore to reply to it through our Universe`;
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head title={title} description={description}></Head>
        <ThanksPage />
      </Layout>
    </Providers>
  );
};

export default Thanks;
