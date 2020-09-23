import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Headline from '@components/Headline';

import styles from './ProjectHeadline.module.scss';

const ProjectHeadline = ({ categories, title, image, truncated }) => {
  const data = { categories, title };

  const styleImageBox = classNames(styles.imageBox, {
    [styles.nextImageBox]: truncated,
  });
  const styleHeadline = !truncated ? styles.headline : styles.headlineTruncated;

  return (
    <div className={styleHeadline}>
      <div className={styles.container}>
        <Headline data={data} showPlanets={false} truncated={truncated} />
        <div className={styleImageBox}>
          <img
            src={image}
            alt="Project picture"
            loading="lazy"
            className={styles.picture}
          />
        </div>
      </div>
    </div>
  );
};

ProjectHeadline.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  image: PropTypes.string,
  truncated: PropTypes.bool,
};

ProjectHeadline.defaultProps = {
  truncated: false,
};

export default ProjectHeadline;
