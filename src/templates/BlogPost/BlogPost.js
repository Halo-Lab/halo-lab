import React from 'react';
import PropTypes from 'prop-types';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import BackgroundStars from '@scenes/BackgroundStars';
import Head from '@components/Head';
import MailUs from '@scenes/MailUs';
import Article from './components/Article';
import Headline from './components/Headline';

const BlogPost = ({ pageContext }) => {
  const { data } = pageContext;
  console.log(data);

  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head>
          <title>{data.title} - Halo Lab Blog</title>
        </Head>
        <div className="pageWrapper">
          <Headline
            categories={data.categories}
            image={data.featured_media.source_url}
            title={data.title}
          />
        </div>
        <Article content={data.content} />
        <div className="pageWrapper">
          <MailUs />
        </div>
      </Layout>
    </Providers>
  );
};

BlogPost.propTypes = {
  pageContext: PropTypes.object,
};

export default BlogPost;
