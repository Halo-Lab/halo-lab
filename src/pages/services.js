import React from 'react';

import Layout from '@components/Layout';
import Head from '@components/Head';
import MailUs from '@components/MailUs';
import Flow from '@scenes/Services/components/Flow';
import Technologies from '@scenes/Services/components/Technologies';

const Services = () => {
  return (
    <Layout>
      <Head>
        <title>Services - Halo Lab Blog</title>
      </Head>
      <div className="pageWrapper">
        <Flow />
        <Technologies />
        <MailUs />
      </div>
    </Layout>
  );
};

export default Services;
