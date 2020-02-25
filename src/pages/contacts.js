import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import Head from '@components/Head';
import BackgroundStars from '@components/BackgroundStars';
import ContactsPage from '@scenes/ContactsPage';

const Contacts = () => {
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head>
          <title>Contacts - Halo Lab Blog</title>
        </Head>
        <ContactsPage />
      </Layout>
    </Providers>
  );
};

export default Contacts;
