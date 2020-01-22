import React from 'react';

import Wrapper from '@components/Wrapper';
import Layout from '@components/Layout';
import BackgroundBlackHole from '@components/BackgroundBlackHole';
import Head from '@components/Head';
import Title from '@scenes/404/components/Title';

const NotFound = () => (
  <Wrapper>
    <BackgroundBlackHole />
    <Layout>
      <Head>
        <title>Not Found - Halo Lab Blog</title>
      </Head>
      <Title />
    </Layout>
  </Wrapper>
);

export default NotFound;
