import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import styles from './PostThumbnail.module.scss';

const PostThumbnail = ({
  title,
  slug,
  featured_media,
  categories,
  isFirst,
}) => {
  const imageSource = featured_media.source_url;
  const imageOptimized =
    featured_media.localFile &&
    featured_media.localFile.childImageSharp &&
    featured_media.localFile.childImageSharp.fluid;
  const link = `/blog/${slug}`;

  const firstArticle = isFirst ? styles.firstArticle : '';

  return (
    <article className={`${styles.container} ${firstArticle}`}>
      <Link to={link} className={styles.link}>
        {imageOptimized ? (
          <Img fluid={imageOptimized} />
        ) : (
          <img src={imageSource} alt="post preview" loading="lazy" />
        )}
        <span className={styles.hiddenTitle}>{title}</span>
      </Link>
      <div className={styles.wrapper}>
        {categories.map(category => {
          return (
            <p className={styles.tag} key={category.id}>
              #{category.name}
            </p>
          );
        })}
        <h3 className={styles.title}>
          <Link to={link}>{title}</Link>
        </h3>
      </div>
    </article>
  );
};

PostThumbnail.defaultProps = {
  categories: [],
};

PostThumbnail.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  date: PropTypes.string,
  featured_media: PropTypes.object,
  categories: PropTypes.array,
  isFirst: PropTypes.bool,
};

export default PostThumbnail;
