import React from 'react';

import Layout from "@components/Layout";
import Head from "@components/Head";
import Stars from "@components/Stars";

const Portfolio = () => {

  return (
    <>
      <Stars/>
      <Layout>
        <Head>
          <title>Portfolio - Halo Lab Blog</title>
        </Head>
        <div>Portfolio</div>
      </Layout>
    </>
  );
};

export default Portfolio;
