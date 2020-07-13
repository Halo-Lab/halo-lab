import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import BackgroundStars from '@components/BackgroundStars';
import Head from '@components/Head';
import MailUs from '@scenes/MailUs';
import Article from './components/Article';
import Headline from './components/Headline';
import Thumbnails from './components/Thumbnails';

import styles from './BlogPost.module.scss';

const BlogPost = ({ pageContext }) => {
  const {
    data,
    recent: { previous, next },
  } = pageContext;
  const thumbnailsItems = [];
  if (next) thumbnailsItems.push(next);
  if (previous) thumbnailsItems.push(previous);

  const pageWrapperClass = classNames(styles.container, 'pageWrapper');
  const excr = data.excerpt.replace(/(<([^>]+)>)/gi, '');

  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head
          title={`${data.title} - Halo Lab Blog`}
          description={excr}
          image={data.featured_media.source_url}
        />
        <div className={pageWrapperClass}>
          <Headline
            categories={data.categories}
            image={data.featured_media.source_url}
            title={data.title}
          />
        </div>
        <Article content={data.content} />
        <div className="oldPageWrapper">
          <Thumbnails items={thumbnailsItems} />
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
