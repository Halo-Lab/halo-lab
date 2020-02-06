import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { useSiteMetadata } from '@hooks/queries';

const Head = ({ children }) => {
  const metadata = useSiteMetadata();

  // eslint-disable-next-line no-console
  console.log(`
    Warning "componentWillMount has been renamed" maked by Head Component.
    Helmet issue: https://github.com/nfl/react-helmet/issues/499
  `);

  const descriptionDefault = metadata.description;
  const titleDefault = metadata.title;
  // const authorDefault = site.siteMetadata.author;

  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />

      <meta name="description" content={descriptionDefault} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
      />
      <meta
        name="google-site-verification"
        content="KaWJr5sGtZ__QgG_cgjeVJ-BtUEvLAv7XFF1xXUb7yA"
      />
      <link rel="profile" href="https://gmpg.org/xfn/11" />

      {/* fonts --> */}
      <link rel="stylesheet" href="https://use.typekit.net/dbe7btx.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
        rel="stylesheet"
      />
      {/* <-- fonts */}

      <title>{titleDefault}</title>
      <body className="body-inside"></body>

      {children}
    </Helmet>
  );
};

Head.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Head;
