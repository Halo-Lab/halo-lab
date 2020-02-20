import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import Head from '@components/Head';
import BackgroundStars from '@components/BackgroundStars';
import BlogPage from '@scenes/BlogPage';

const Blog = () => {
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head>
          <title>Blog - Halo Lab Blog</title>
        </Head>
        <BlogPage />
      </Layout>
    </Providers>
  );
};

export default Blog;
