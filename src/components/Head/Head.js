import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { useSiteMetadata } from '@hooks/queries';

const Head = ({ children }) => {
  const metadata = useSiteMetadata();

  // eslint-disable-next-line no-console
  console.log(`
    Warning "componentWillMount has been renamed" maked by Head Component.
    Helmet issue: https://github.com/nfl/react-helmet/issues/499.
    Solution: update package to 6.0.0 version when it will be available. 
  `);

  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />

      <meta name="description" content={metadata.description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
      />
      <meta
        name="google-site-verification"
        content="KaWJr5sGtZ__QgG_cgjeVJ-BtUEvLAv7XFF1xXUb7yA"
      />
      <link rel="profile" href="https://gmpg.org/xfn/11" />

      <title>{metadata.title}</title>

      {children}
    </Helmet>
  );
};

Head.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Head;
