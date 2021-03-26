import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import styles from './Item.module.scss';

const Item = ({ path, title, featured_media, categories }) => {
  const link = path;
  const image = featured_media.localFile.childImageSharp.fluid;
  const tag = categories[0].slug;
  const postUrl = '/blog' + link;

  return (
    <div className={styles.container} data-automation="post-preview">
      <div className={styles.imageBox}>
        <Link to={postUrl}>
          <Img fluid={image} alt="blog post preview" />
        </Link>
      </div>
      <div className={styles.description}>
        <div className={styles.tag}>#{tag}</div>
        <div className={styles.title}>
          <Link to={postUrl} dangerouslySetInnerHTML={{ __html: title }}></Link>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  featured_media: PropTypes.object,
  date: PropTypes.string,
  categories: PropTypes.array,
};

export default Item;
