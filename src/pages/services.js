import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import BackgroundStars from '@components/BackgroundStars';
import Head from '@components/Head';
import MailUs from '@components/MailUs';
import Design from '@scenes/Services/components/Design';
import Development from '@scenes/Services/components/Development';
import Flow from '@scenes/Services/components/Flow';
import Industries from '@scenes/Services/components/Industries';
import Technologies from '@scenes/Services/components/Technologies';

const Services = () => {
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head>
          <title>Services - Halo Lab Blog</title>
        </Head>
        <div className="pageWrapper">
          <Design />
          <Development />
          <Flow />
          <Industries />
          <Technologies />
          <MailUs />
        </div>
      </Layout>
    </Providers>
  );
};

export default Services;
