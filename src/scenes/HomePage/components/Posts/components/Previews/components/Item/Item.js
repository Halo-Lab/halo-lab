import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Item.module.scss';

// eslint-disable-next-line camelcase
const Item = ({ path, title, featured_media, categories }) => {
  const link = path;
  const imageSource = featured_media.source_url;
  const image =
    featured_media.localFile &&
    featured_media.localFile.childImageSharp &&
    featured_media.localFile.childImageSharp.fluid;
  const tag = categories[0].slug;
  const postUrl = `/blog${link}`;

  return (
    <div className={styles.container} data-automation="post-preview">
      <div className={styles.imageBox}>
        <Link to={postUrl}>
          {image ? (
            <Img fluid={image} alt="blog post preview" />
          ) : (
            <div className={styles.thumbnail}>
              <img src={imageSource} alt="blog post preview" />
            </div>
          )}
        </Link>
      </div>
      <div className={styles.description}>
        <div className={styles.tag}>#{tag}</div>
        <h3 className={styles.title}>
          <Link to={postUrl} dangerouslySetInnerHTML={{ __html: title }} />
        </h3>
      </div>
    </div>
  );
};

Item.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  featured_media: PropTypes.object.isRequired,
  // date: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  categories: PropTypes.array.isRequired,
};

export default Item;
