import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import Head from '@components/Head';
import BackgroundStars from '@components/BackgroundStars';
import ThanksPage from '@scenes/ThanksPage';
import PropTypes from 'prop-types';

const Thanks = ({ title, description }) => {
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head title={title} description={description} />
        <ThanksPage />
      </Layout>
    </Providers>
  );
};

Thanks.defaultProps = {
  title: `Thanks - Halo Lab`,
  description: `Let us say thank you for your cosmic request on this page. We can't wait anymore to reply to it through our Universe`,
};

Thanks.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Thanks;
