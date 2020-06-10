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
    recommendedPosts,
    recent: { previous, next },
  } = pageContext;

  //selection of recommended posts in the current post
  const RECOMMENDED_POSTS_LIMIT = 3;
  let filteredPosts = recommendedPosts.filter( post => post.id !== data.id )//trying get 3 post, where 'current post != recommended'
  filteredPosts.length = RECOMMENDED_POSTS_LIMIT;
 

  // const thumbnailsItems = [];
  // if (next) thumbnailsItems.push(next);
  // if (previous) thumbnailsItems.push(previous);

  const pageWrapperClass = classNames(styles.container, 'pageWrapper');

  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head>
          <title>{data.title} - Halo Lab Blog</title>
        </Head>
        <div className={pageWrapperClass}>
          <Headline
            categories={data.categories}
            image={data.featured_media.source_url}
            title={data.title}
          />
        </div>
        <Article content={data.content} />
        <div className="oldPageWrapper">
          <Thumbnails items={filteredPosts} />
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
