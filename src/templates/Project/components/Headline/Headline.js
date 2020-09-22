import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Categories from './components/Categories';
import GradientText from '@components/GradientText';

import styles from '@src/templates/styles/Headline.module.scss';

const NextProjectCategory = () => (
  <div className={styles.nextProjectCategory}>Next Project</div>
);

NextProjectCategory.propTypes = {
  slug: PropTypes.string,
};

const Headline = ({ data, truncated }) => {
  const { categories, title } = data;

  // Classnames
  const styleImageBox = classNames(styles.projectImageBox, {
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
          <div className={styles.textAlign}>
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
            className={styles.projectPicture}
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
