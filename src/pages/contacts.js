import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import BackgroundStars from '@scenes/BackgroundStars';
import Head from '@components/Head';

const Contacts = () => {
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head>
          <title>Contacts - Halo Lab Blog</title>
        </Head>
        <div>Contacts</div>
      </Layout>
    </Providers>
  );
};

export default Contacts;
