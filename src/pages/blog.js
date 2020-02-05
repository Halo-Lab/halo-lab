import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import Head from '@components/Head';
import BackgroundStars from '@scenes/BackgroundStars';
import BlogScene from '@scenes/Blog';

const Blog = () => {
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head>
          <title>Blog - Halo Lab Blog</title>
        </Head>
        <BlogScene />
      </Layout>
    </Providers>
  );
};

export default Blog;
