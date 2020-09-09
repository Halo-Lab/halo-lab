import React from 'react';

import Head from '@components/Head';

import NotFoundPage from '@scenes/NotFoundPage';

const NotFound = () => {
  const title = `404 - Halo Lab`;
  return (
    <>
      <Head title={title}></Head>
      <NotFoundPage />
    </>
  );
};

export default NotFound;
