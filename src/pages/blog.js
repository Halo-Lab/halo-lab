import React from 'react';

import Wrapper from '@components/Wrapper';
import Layout from '@components/Layout';
import BackgroundStars from '@components/BackgroundStars';
import Head from '@components/Head';

const Blog = () => {
  return (
    <Wrapper>
      <BackgroundStars />
      <Layout>
        <Head>
          <title>Blog - Halo Lab Blog</title>
        </Head>
        <div>Blog</div>
      </Layout>
    </Wrapper>
  );
};

export default Blog;
