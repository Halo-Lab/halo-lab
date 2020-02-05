import React from 'react';
import PropTypes from 'prop-types';

import Categories from './components/Categories';

import styles from './Headline.module.scss';

const Headline = ({ categories, title, image }) => {
  return (
    <div className={styles.container}>
      <Categories items={categories} />
      <h2 className={styles.title}>{title}</h2>
      <img src={image} alt="article image" className={styles.image} />
    </div>
  );
};

Headline.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.string,
  title: PropTypes.string,
};

export default Headline;
