import React from 'react';
import PropTypes from 'prop-types';

import Headline from '@components/Headline';
import styles from './BlogHeadline.module.scss';

const BlogHeadline = ({ categories, title, image }) => {
  let data = { categories, title, image };

  return (
    <div className={styles.headline}>
      <div className={styles.container}>
        <Headline data={data} showPlanets={true} />

        <div className={styles.imageBox}>
          <img
            src={image}
            alt="blog post image"
            loading="lazy"
            className={styles.picture}
          />
        </div>
      </div>
    </div>
  );
};

BlogHeadline.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.string,
  title: PropTypes.string,
};

export default BlogHeadline;
