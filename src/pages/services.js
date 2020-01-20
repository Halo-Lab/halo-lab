import React from 'react';

import Layout from '@components/Layout';
import Head from '@components/Head';
import Flow from '@scenes/Services/components/Flow';

const Services = () => {
  return (
    <Layout>
      <Head>
        <title>Services - Halo Lab Blog</title>
      </Head>
      <div className="pageWrapper">
        <Flow />
      </div>
    </Layout>
  );
};

export default Services;
