import React from 'react';

import Wrapper from '@components/Wrapper';
import Layout from '@components/Layout';
import BackgroundStars from '@components/BackgroundStars';
import Head from '@components/Head';

const Thanks = () => {
  return (
    <Wrapper>
      <BackgroundStars />
      <Layout>
        <Head>
          <title>Thanks - Halo Lab Blog</title>
        </Head>
        <div>Thanks</div>
      </Layout>
    </Wrapper>
  );
};

export default Thanks;
