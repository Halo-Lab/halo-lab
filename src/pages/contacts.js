import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import BackgroundStars from '@components/BackgroundStars';
import Head from '@components/Head';
import Description from '../scenes/Contacts/components/Decription';
import Map from '../scenes/Contacts/components/Map';
import Form from '../scenes/Contacts/components/Form';

const Contacts = () => {
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head>
          <title>Contacts - Halo Lab Blog</title>
        </Head>
        <div className="pageWrapper contacts-container">
          <Description />
          <Form />
          <Map />
        </div>
      </Layout>
    </Providers>
  );
};

export default Contacts;
