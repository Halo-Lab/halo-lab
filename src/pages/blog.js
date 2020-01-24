import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import BackgroundStars from '@scenes/BackgroundStars';
import Head from '@components/Head';

const Blog = () => {
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head>
          <title>Blog - Halo Lab Blog</title>
        </Head>
        <div>Blog</div>
      </Layout>
    </Providers>
  );
};

export default Blog;
