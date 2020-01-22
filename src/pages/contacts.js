import React from 'react';

import Wrapper from '@components/Wrapper';
import Layout from '@components/Layout';
import BackgroundStars from '@components/BackgroundStars';
import Head from '@components/Head';

const Contacts = () => {
  return (
    <Wrapper>
      <BackgroundStars />
      <Layout>
        <Head>
          <title>Contacts - Halo Lab Blog</title>
        </Head>
        <div>Contacts</div>
      </Layout>
    </Wrapper>
  );
};

export default Contacts;
