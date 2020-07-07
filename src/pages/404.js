import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import Head from '@components/Head';
import BackgroundBlackHole from '@components/BackgroundBlackHole';
import NotFoundPage from '@scenes/NotFoundPage';
import PropTypes from 'prop-types';

const NotFound = ({ title, description }) => {
  return (
    <Providers>
      <BackgroundBlackHole />
      <Layout>
        <Head title={title} description={description}></Head>
        <NotFoundPage />
      </Layout>
    </Providers>
  );
};

NotFound.defaultProps = {
  title: `404 - Halo Lab`,
  description: `Oops, it seems like something went wrong, and you found a black hole. We'll try to fix it.`,
};

NotFound.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default NotFound;
