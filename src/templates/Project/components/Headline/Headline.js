import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import GradientText from '@/components/GradientText';

import Categories from './components/Categories';

import styles from './Headline.module.scss';

const NextProjectCategory = () => (
  <div className={styles.nextProjectCategory}>Next Project</div>
);

NextProjectCategory.propTypes = {
  slug: PropTypes.string,
};

const Headline = ({ data, truncated }) => {
  const { categories, title } = data;

  // Classnames
  const styleImageBox = classNames(styles.imageBox, {
    [styles.nextImageBox]: truncated,
  });

  const styleHeadline = truncated ? styles.headlineTruncated : styles.headline;

  const links = truncated ? (
    <NextProjectCategory slug={data.slug} />
  ) : (
    <Categories items={categories} />
  );

  return (
    <div className={styleHeadline}>
      <div className={styles.container}>
        <div className={styles.planetsWrapper}>
          <div className={styles.titleCategoryWrap}>
            {links}
            <h1 className={styles.title}>
              <GradientText text={title} />
            </h1>
          </div>
        </div>
        <div className={styleImageBox}>
          <img
            src={data.featured_media.source_url}
            alt="project picture"
            loading="lazy"
            className={styles.picture}
          />
        </div>
      </div>
    </div>
  );
};

Headline.propTypes = {
  data: PropTypes.object,
  truncated: PropTypes.bool,
};

Headline.defaultProps = {
  truncated: false,
};

export default Headline;
