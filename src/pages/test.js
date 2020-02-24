import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import BackgroundStars from '@components/NewBackgroundStars';

const Test = () => {
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <div style={{ height: '2000px' }}>Test</div>
      </Layout>
    </Providers>
  );
};

export default Test;
