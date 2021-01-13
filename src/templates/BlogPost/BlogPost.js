import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import BackgroundStars from '@/components/BackgroundStars';
import Head from '@/components/Head';
import Layout from '@/components/Layout';
import Providers from '@/components/Providers';
import Subscribe from '@/components/Subscribe';
import MailUs from '@/scenes/MailUs';
import { getCategories } from '@/src/helpers/utils';
import { useHeaderIsWhite } from '@/src/hooks';

import Article from './components/Article';
import BlogHeadline from './components/BlogHeadline';
import Thumbnails from './components/Thumbnails';

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
    baseUrl,
  } = pageContext;

  const recommendedPosts = useMemo(() => getRecommendedPosts(allPosts, data), [
    allPosts,
    data,
  ]);

  const mainCategory = {
    id: '6485',
    name: 'All Blog Posts',
    link: baseUrl,
  };

  const articleRef = React.useRef(null);
  const headerIsWhite = useHeaderIsWhite(articleRef);

  const thumbnailsItems = [];
  if (next) thumbnailsItems.push(next);
  if (previous) thumbnailsItems.push(previous);
  const excr = data.excerpt.replace(/(<([^>]+)>)/gi, '');

  const categories = getCategories(mainCategory, data.categories);
  const title = `${data.title} - Halo Lab Blog`;

  return (
    <Providers>
      <BackgroundStars />
      <Layout headerIsWhite={headerIsWhite}>
        <Head title={title} description={excr} />

        <BlogHeadline
          categories={categories}
          image={data.featured_media.source_url}
          title={data.title}
        />
        <div ref={articleRef}>
          <Article content={data.content} />
        </div>
        <div className="oldPageWrapper">
          <Subscribe />
          <Thumbnails items={recommendedPosts} />
        </div>
        <MailUs />
      </Layout>
    </Providers>
  );
};

BlogPost.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pageContext: PropTypes.object.isRequired,
};

export default BlogPost;
