import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { GlobalContext } from '@contexts';
import { useSiteMetadata } from '@hooks/queries';

const Head = ({ children }) => {
  const metadata = useSiteMetadata();
  const { imagesAPI } = useContext(GlobalContext);
  const images = imagesAPI.get(['meta/tile.256.png', 'meta/tile.512.png']);
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
          url: 'https://halo-lab.com/wp-content/uploads/2019/04/New-Logo.png',
          width: 133,
          height: 34,
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
      <html lang="en" />

      <meta charSet="utf-8" />
      <meta
        content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
        name="viewport"
      />
      <meta
        name="robots"
        content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />

      {/* <!-- General meta --> */}
      <meta
        content="We are a full-stack design & development team who focuses on digital products whatever they are."
        name="description"
      />
      <meta
        content="experts, expert networks, consulting, linkedin, transcripts, halo-lab"
        name="keywords"
      />
      <meta content={metadata.title} name="author" />
      <meta
        content="KaWJr5sGtZ__QgG_cgjeVJ-BtUEvLAv7XFF1xXUb7yA"
        name="google-site-verification"
      />

      {/* <!-- Twitter meta --> */}
      <meta content="summary" name="twitter:card" />
      <meta content={metadata.title} name="twitter:title" />
      <meta
        content="We are a full-stack design & development team who focuses on digital products whatever they are."
        name="twitter:description"
      />
      <meta
        content={`https://halo-lab.com${images['meta/tile.256.png'].url}`}
        name="twitter:image"
      />
      <meta content="https://halo-lab.com" name="twitter:url" />

      {/* <!-- Facebook meta --> */}
      <meta content="https://halo-lab.com" property="og:site_name" />
      <meta content="Home — Halo Lab" property="og:title" />
      <meta
        content="We are a full-stack design & development team who focuses on digital products whatever they are."
        property="og:description"
      />
      <meta content="website" property="og:type" />
      <meta
        content={`https://halo-lab.com${images['meta/tile.512.png'].url}`}
        property="og:image"
      />
      <meta content="https://halo-lab.com" property="og:url" />
      <meta property="og:locale" content="en_US" />

      {/* <!-- Analytics --> */}
      {/* <script async="" src="https://static.hotjar.com/c/hotjar-1373557.js?sv=6"></script> */}
      {/* <script async="" src="https://script.hotjar.com/modules.58256f2231d5f12d5589.js" charset="utf-8"></script> */}

      <script type="application/ld+json">{JSON.stringify(schema)}</script>

      <link
        rel="alternate"
        type="application/rss+xml"
        title="Halo Lab » Portfolio"
        href="https://halo-lab.com/portfolio/"
      ></link>

      {/* <!-- What is this? --> */}
      <link rel="profile" href="https://gmpg.org/xfn/11" />

      {/* Default title */}
      <title>{metadata.title}</title>

      {children}
    </Helmet>
  );
};

Head.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Head;
