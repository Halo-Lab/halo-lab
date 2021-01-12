import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import GradientText from '@/components/GradientText';

import Categories from './components/Categories';

import styles from './Headline.module.scss';

const Headline = ({ categories, title, image }) => {
  const uranus = classNames(styles.planet, styles.planetUranus);
  const neptune = classNames(styles.planet, styles.planetNeptune);
  const jupiter = classNames(styles.planet, styles.planetJupiter);

  return (
    <div className={styles.container}>
      <div className={styles.planetsWrapper}>
        <div className={jupiter} />
        <div className={neptune} />
        <div className={uranus} />

        <div className={styles.textAlign}>
          <Categories items={categories} />
          <h1 className={styles.title}>
            <GradientText text={title} />
          </h1>
        </div>
      </div>
      <div className={styles.imageBox}>
        <img
          src={image}
          alt="blog post main illustration"
          loading="lazy"
          className={styles.image}
        />
      </div>
    </div>
  );
};

Headline.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Headline;
