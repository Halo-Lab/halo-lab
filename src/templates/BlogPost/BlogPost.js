import React from 'react';
import PropTypes from 'prop-types';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import BackgroundStars from '@scenes/BackgroundStars';
import Head from '@components/Head';
import MailUs from '@scenes/MailUs';

const BlogPost = ({ pageContext }) => {
  const { data } = pageContext;

  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head>
          <title>{data.title} - Halo Lab Blog</title>
        </Head>
        <div className="pageWrapper">Hello, world</div>
        Goodbye wrapper!!!
        <MailUs />
      </Layout>
    </Providers>
  );
};

BlogPost.propTypes = {
  pageContext: PropTypes.object,
};

export default BlogPost;
