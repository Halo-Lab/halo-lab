import React from 'react';

import Wrapper from '@components/Wrapper';
import Layout from '@components/Layout';
import BackgroundStars from '@components/BackgroundStars';
import Head from '@components/Head';

const Portfolio = () => {
  return (
    <Wrapper>
      <BackgroundStars />
      <Layout>
        <Head>
          <title>Portfolio - Halo Lab Blog</title>
        </Head>
        <div>Portfolio</div>
      </Layout>
    </Wrapper>
  );
};

export default Portfolio;
