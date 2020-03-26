import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import styles from './Item.module.scss';

const Item = ({ path, title, featured_media, date }) => {
  const link = 'blog/' + path;
  const image = featured_media.localFile.childImageSharp.fluid;

  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <Link to={link}>
          <Img fluid={image} alt="blog post preview" />
        </Link>
      </div>
      <div className={styles.description}>
        <div className={styles.date}>{date}</div>
        <h3 className={styles.title}>
          <Link to={link} dangerouslySetInnerHTML={{ __html: title }}></Link>
        </h3>
      </div>
    </div>
  );
};

Item.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  featured_media: PropTypes.object,
  date: PropTypes.string,
};

export default Item;
