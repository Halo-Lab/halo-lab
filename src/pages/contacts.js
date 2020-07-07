import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import Head from '@components/Head';
import BackgroundStars from '@components/BackgroundStars';
import ContactsPage from '@scenes/ContactsPage';
import PropTypes from 'prop-types';

const Contacts = ({ title, description }) => {
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head title={title} description={description}></Head>
        <ContactsPage />
      </Layout>
    </Providers>
  );
};

Contacts.defaultProps = {
  title: `Contacts - Halo Lab`,
  description: `If you want to create a product or you would like to discuss how it could be realized, you're exactly where you're supposed to be to receive advice from experienced specialists.`,
};

Contacts.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Contacts;
