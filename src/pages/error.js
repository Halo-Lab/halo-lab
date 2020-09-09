import React from 'react';

import Head from '@components/Head';

import ErrorPage from '@scenes/ErrorPage';

const Error = () => {
  const title = `Error - Halo Lab`;

  return (
    <>
      <Head title={title}></Head>
      <ErrorPage />
    </>
  );
};

export default Error;
