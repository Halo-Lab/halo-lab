import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import Head from '@components/Head';
import BackgroundStars from '@components/BackgroundStars';
import ErrorPage from '@scenes/ErrorPage';
import PropTypes from 'prop-types';

const Error = ({ title, description }) => {
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

Error.defaultProps = {
  title: `Error - Halo Lab`,
  description: `Oops, it seems like something went wrong, and you found a black hole. We'll try to fix it.`,
};

Error.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Error;
