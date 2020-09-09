import React, { useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import BackgroundStars from '@components/BackgroundStars';
import Head from '@components/Head';

import MailUs from '@scenes/MailUs';

import ThemeContext from '@context/ThemeContext';

import Article from './components/Article';
import Headline from './components/Headline';
import Thumbnails from './components/Thumbnails';

import styles from './BlogPost.module.scss';

function getRecommendedPosts(allPosts = [], currentPost) {
  const RECOMMENDED_POSTS_LIMIT = 3;
  const recommendedPosts = [];

  while (
    recommendedPosts.length < RECOMMENDED_POSTS_LIMIT &&
    allPosts.length > RECOMMENDED_POSTS_LIMIT
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

  const { setThemeState } = useContext(ThemeContext);

  const articleRef = React.useRef(null);

  let onElem = false;

  const thumbnailsItems = [];

  if (next) thumbnailsItems.push(next);
  if (previous) thumbnailsItems.push(previous);

  const excr = data.excerpt.replace(/(<([^>]+)>)/gi, '');

  const scrollHandler = () => {
    const elProps = articleRef.current.getBoundingClientRect();
    if (elProps.y <= 0 && -elProps.y < elProps.height && !onElem) {
      onElem = true;
      setThemeState(state => ({
        ...state,
        header: {
          isWhite: true,
        },
      }));
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <>
      <BackgroundStars />
      <Head title={`${data.title} - Halo Lab Blog`} description={excr}></Head>
      <div className={classNames(styles.container, 'pageWrapper')}>
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
    </>
  );
};

BlogPost.propTypes = {
  pageContext: PropTypes.object,
};

export default BlogPost;
