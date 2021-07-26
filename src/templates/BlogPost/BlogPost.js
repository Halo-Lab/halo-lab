import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import BackgroundStars from '@components/BackgroundStars';
import Head from '@components/Head';
import MailUs from '@scenes/MailUs';
import Article from './components/Article';
import Headline from './components/Headline';
import Thumbnails from './components/Thumbnails';
import { useHeaderIsWhite } from '@src/hooks';
import { Helmet } from "react-helmet";

import styles from "./BlogPost.module.scss";

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

  const articleRef = React.useRef(null);
  const headerIsWhite = useHeaderIsWhite(articleRef);

  const thumbnailsItems = [];
  if (next) thumbnailsItems.push(next);
  if (previous) thumbnailsItems.push(previous);
  const pageWrapperClass = classNames(styles.container, 'pageWrapper');
  const excr = data.excerpt.replace(/(<([^>]+)>)/gi, '');

  const images = !data.featured_media.localFile.childImageSharp?
    [data.featured_media.source_url]:
    [
    data.featured_media.localFile.childImageSharp.smallImg.src,
    data.featured_media.localFile.childImageSharp.mediumImg.src,
    data.featured_media.localFile.childImageSharp.largeImg.src,
  ]
  const schemaBlog = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Halo-lab",
          "item": "https://www.halo-lab.com/"
        }, {
          "@type": "ListItem",
          "position": 2,
          "name": data.title,
          "item": `https://www.halo-lab.com/blog/${data.categories[0].slug}`,
        }, {
          "@type": "ListItem",
          "position": 3,
          "name": "{h1}"
        }]
      },
      {
        "@type": "NewsArticle",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://google.com/article"
        },
        "headline": data.title,
        "image": images,
        "datePublished": data.date,
        "dateModified": data.date,
        "author": {
          "@type": "Organization",
          "name": "Halo lab"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Halo lab",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.halo-lab.com/tile-512.png"
          }
        }
      }
    ]
  };
  return (
    <Providers>
      <BackgroundStars />
      <Layout headerIsWhite={headerIsWhite}>
        <Head title={`${data.title} - Halo Lab Blog`} description={excr}>
          <script type="application/ld+json">{JSON.stringify(schemaBlog)}</script>
        </Head>
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
