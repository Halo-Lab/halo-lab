import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import BackgroundStars from '@components/BackgroundStars';
import Head from '@components/Head';
import Projects from '@scenes/Projects';
import Clients from '@scenes/Portfolio/components/Clients';
import Works from '@scenes/Portfolio/components/Works';
import MailUs from '@components/MailUs';

const Portfolio = () => {
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head>
          <title>Portfolio - Halo Lab Blog</title>
        </Head>
        <div className="pageWrapper">
          <Projects />
          <Clients />
          <Works />
          <MailUs />
        </div>
      </Layout>
    </Providers>
  );
};

export default Portfolio;
