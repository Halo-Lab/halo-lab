import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import BackgroundStars from '@scenes/BackgroundStars';
import Head from '@components/Head';
import Projects from '@scenes/Projects';
import Clients from '@scenes/Portfolio/components/Clients';
import Works from '@scenes/Portfolio/components/Works';
import MailUs from '@scenes/MailUs';

const Portfolio = () => {
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head>
          <title>Portfolio - Halo Lab Blog</title>
        </Head>
        <div className="pageWrapper">
          <Projects title="Portfolio" />
          <Clients />
          <Works />
          <MailUs />
        </div>
      </Layout>
    </Providers>
  );
};

export default Portfolio;
