import React from 'react';
import Posts from '@components/Posts';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import BackgroundStars from '@components/BackgroundStars';
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
         <Posts />
      </Layout>
    </Providers>
  );
};

export default Blog;
