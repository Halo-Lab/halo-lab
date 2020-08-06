import React, { useMemo } from 'react';
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

function getRecommendedPosts(allPosts, currentPost) {
  const RECOMMENDED_POSTS_LIMIT = 3;
  const recommendedPosts = [];

  while (
    recommendedPosts.length < RECOMMENDED_POSTS_LIMIT ||
    allPosts.length < RECOMMENDED_POSTS_LIMIT
  ) {
    const random = Math.floor(Math.random() * allPosts.length);

    if (
      !recommendedPosts.includes(allPosts[random]) &&
      allPosts[random].id !== currentPost.id
    ) {
      recommendedPosts.push(allPosts[random]);
    }
  }

  return recommendedPosts;
}
// this function takes an element on at the time of finding which callback will be returned
function scrollHandler(ref, callback) {
  return function() {
    const pos = ref.getBoundingClientRect();
    if (pos.y <= 0 && -pos.y < pos.height) {
      return callback(true);
    }
    callback(false);
  };
}

const BlogPost = ({ pageContext }) => {
  const {
    data,
    allPosts,
    recent: { previous, next },
  } = pageContext;
  const recommendedPosts = useMemo(() => getRecommendedPosts(allPosts, data), [
    allPosts,
    data,
  ]);

  const [headerIsWhite, setHeaderIsWhite] = React.useState(false);
  const thumbnailsItems = [];
  if (next) thumbnailsItems.push(next);
  if (previous) thumbnailsItems.push(previous);
  const pageWrapperClass = classNames(styles.container, 'pageWrapper');
  const excr = data.excerpt.replace(/(<([^>]+)>)/gi, '');
  const articleRef = React.useRef(null);

  React.useEffect(() => {
    const handler = scrollHandler(articleRef.current, setHeaderIsWhite);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <Providers>
      <BackgroundStars />
      <Layout headerIsWhite={headerIsWhite}>
        <Head title={`${data.title} - Halo Lab Blog`} description={excr}></Head>
        <div className={pageWrapperClass}>
          <Headline
            categories={data.categories}
            image={data.featured_media.source_url}
            title={data.title}
          />
        </div>
        <div ref={articleRef}>
          <Article content={data.content} />
        </div>
        <div className="oldPageWrapper">
          <Thumbnails items={recommendedPosts} />
        </div>
        <MailUs />
      </Layout>
    </Providers>
  );
};

BlogPost.propTypes = {
  pageContext: PropTypes.object,
};

export default BlogPost;
