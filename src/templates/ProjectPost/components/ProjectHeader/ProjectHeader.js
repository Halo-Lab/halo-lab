import React from 'react';
import { Link } from 'gatsby';
import { string, array, object } from 'prop-types';
import classNames from 'classnames';

import GradientText from '@components/GradientText';

import styles from './ProjectHeader.module.scss';

const ProjectHeader = ({ thumbnail, categories, title }) => {
  const { source_url } = thumbnail;

  return (
    <div className={classNames(styles.header, 'pageWrapper')}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div
            className={classNames(styles.container, styles.container__content)}
          >
            <ul className={styles.breadcrumbs}>
              <li>
                <Link to={'/portfolio'}>Portfolio</Link>
              </li>
              <li>
                <Link to={'/portfolio/' + categories[0].slug}>
                  {categories[0].name}
                </Link>
              </li>
            </ul>
            <div className={styles.title}>
              <h1>
                <GradientText text={title}></GradientText>
              </h1>
            </div>
          </div>
        </div>
        <div className={styles.thumbnail}>
          <img src={source_url} alt={title} title={title} />
        </div>
      </div>
    </div>
  );
};

ProjectHeader.propTypes = {
  thumbnail: object.isRequired,
  title: string.isRequired,
  categories: array.isRequired,
};

export default ProjectHeader;
