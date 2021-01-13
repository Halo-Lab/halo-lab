import PropTypes from 'prop-types';
import React from 'react';

import Headline from '@/components/Headline';

import styles from './BlogHeadline.module.scss';

const BlogHeadline = ({ categories, title, image }) => {
  const data = { categories, title, image };

  return (
    <div className={styles.headline}>
      <div className={styles.container}>
        <Headline data={data} showPlanets />

        <div className={styles.imageBox}>
          <img
            src={image}
            alt="blog post illustration"
            loading="lazy"
            className={styles.picture}
          />
        </div>
      </div>
    </div>
  );
};

BlogHeadline.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BlogHeadline;
