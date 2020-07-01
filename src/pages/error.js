import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import Head from '@components/Head';
import BackgroundStars from '@components/BackgroundStars';
import ErrorPage from '@scenes/ErrorPage';

const Error = () => {
  const title = `Error - Halo Lab`;
  const description = `Oops, it seems like something went wrong, and you found a black hole. We'll try to fix it.`;
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head title={title} description={description}></Head>
        <ErrorPage />
      </Layout>
    </Providers>
  );
};

export default Error;
