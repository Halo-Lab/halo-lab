import React from 'react';

import Head from '@components/Head';

import ThanksPage from '@scenes/ThanksPage';

const Thanks = () => {
  const title = `Thanks - Halo Lab`;
  return (
    <>
      <Head title={title}></Head>
      <ThanksPage />
    </>
  );
};

export default Thanks;
