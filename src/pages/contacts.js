import React from 'react';

import Head from '@components/Head';

import ContactsPage from '@scenes/ContactsPage';

const Contacts = () => {
  const title = 'Contacts - Halo Lab';
  const description = `If you want to create a product or you would like to discuss how it could be realized, you're exactly where you're supposed to be to receive advice from experienced specialists.`;

  return (
    <>
      <Head title={title} description={description} />
      <ContactsPage />
    </>
  );
};

export default Contacts;
