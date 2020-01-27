import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import styles from './Item.module.scss';

const Item = ({ path, title, featured_media, date }) => {
  const link = path;
  const image = featured_media.source_url;

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Link to={link}>
          <img src={image} alt="preview" />
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.date}>{date}</div>
        <h3 className={styles.title}>
          <Link to={link}>{title}</Link>
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
