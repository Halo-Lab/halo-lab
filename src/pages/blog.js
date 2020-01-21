import React from 'react';
import Posts from '@components/Posts';

import Layout from '@components/Layout';
import Head from '@components/Head';

const Blog = () => {
  return (
    <Layout>
      <Head>
        <title>Blog - Halo Lab Blog</title>
      </Head>
      <div>Blog</div>
      <Posts />
    </Layout>
  );
};

export default Blog;
