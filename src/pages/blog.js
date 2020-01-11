import React from 'react';

import Layout from "@components/Layout";
import Head from "@components/Head";
import Stars from "@components/Stars";

const Blog = () => {

  return (
    <>
      <Stars/>
      <Layout>
        <Head>
          <title>Blog - Halo Lab Blog</title>
        </Head>
        <div>Blog</div>
      </Layout>
    </>
  );
};

export default Blog;
