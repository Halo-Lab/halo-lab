import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { useSiteMetadata } from '@hooks/queries';

const Head = ({ children, title, description }) => {
  const metadata = useSiteMetadata();

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://halo-lab.com/#organization',
        name: 'Halo lab',
        url: 'https://halo-lab.com/',
        sameAs: [
          'https://www.facebook.com/halolabteam/',
          'https://www.instagram.com/halolabteam/',
        ],
        logo: {
          '@type': 'ImageObject',
          '@id': 'https://halo-lab.com/#logo',
          url: 'https://halo-lab.com/tile-512.png',
          width: 120,
          height: 60,
          caption: 'Halo lab',
        },
        image: { '@id': 'https://halo-lab.com/#logo' },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://halo-lab.com/#website',
        url: 'https://halo-lab.com/',
        name: 'Halo Lab',
        publisher: { '@id': 'https://halo-lab.com/#organization' },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://halo-lab.com/?s={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'WebPage',
        '@id': 'https://halo-lab.com/#webpage',
        url: 'https://halo-lab.com/',
        inLanguage: 'en-US',
        name: 'Home &mdash; Halo Lab',
        isPartOf: { '@id': 'https://halo-lab.com/#website' },
        about: { '@id': 'https://halo-lab.com/#organization' },
        datePublished: '2019-02-27T12:02:41+00:00',
        dateModified: '2019-04-10T07:31:56+00:00',
      },
    ],
  };

  // eslint-disable-next-line no-console
  console.log(`
    Warning "componentWillMount has been renamed" maked by Head Component.
    Helmet issue: https://github.com/nfl/react-helmet/issues/499.
    Solution: update package to 6.0.0 version when it will be available. 
  `);

  return (
    <Helmet>
      {/* Encodings and styles */}
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta
        content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
        name="viewport"
      />

      <meta
        content="ui/ux agency, design agency, ux agency, design and development, design and development agency, design studio, design and development studio, design company, design and development company, design consultant, ui ux agency, ux ui design agency, ui design company, ux design consultancy, ui company, ux design company, ui ux design firm, ui design agency, user interface design company, ui ux company, ui ux design agency, ui design firm, ui studio, best design studios, best design and development studios, top development agencies, reactjs development, gatsbyjs development, websites, web development, front-end development"
        name="keywords"
      />
      <meta content={metadata.title} name="author" />

      <title>{title}</title>
      <meta content={description} name="description" />

      {/* <!-- Twitter meta --> */}
      <meta content="summary" name="twitter:card" />
      <meta content={title} name="twitter:title" />
      <meta content={description} name="twitter:description" />
      <meta content="https://halo-lab.com/tile-256.png" name="twitter:image" />
      <meta content={metadata.siteUrl} name="twitter:url" />

      {/* <!-- Facebook meta --> */}
      <meta content={metadata.siteUrl} property="og:site_name" />
      <meta content={title} property="og:title" />
      <meta сontent={description} property="og:description" />
      <meta content="website" property="og:type" />
      <meta content="https://halo-lab.com/tile-512.png" property="og:image" />
      <meta content={metadata.siteUrl} property="og:url" />
      <meta property="og:locale" content="en_US" />

      {/* <!-- Verification --> */}
      <meta
        content="KaWJr5sGtZ__QgG_cgjeVJ-BtUEvLAv7XFF1xXUb7yA"
        name="google-site-verification"
      />

      {/* Micro data */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>

      {/* Additional tags */}
      {children}
    </Helmet>
  );
};

Head.defaultProps = {
  description: `Halo Lab Team brings the design-driven development of your digital product to reality. We are working with a variety of projects, from the strict insurance website to a dynamic music application.`,
};

Head.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Head;
