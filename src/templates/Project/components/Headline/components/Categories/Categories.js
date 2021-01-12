import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import styles from './Categories.module.scss';

const Categories = ({ items }) => {
  if (items && items.length < 1) return null;

  return (
    <ul className={styles.categoryList}>
      <li key="All projects">
        <Link to="/portfolio" className={styles.categoryLink}>
          Portfolio
        </Link>
      </li>
      {items.map((item) => {
        const link = `/portfolio?category=${item.slug}`;

        return (
          <Fragment key={item.slug}>
            <li className={styles.categorySeparator}>/</li>
            <li key={item.id}>
              <Link to={link} className={styles.categoryLink}>
                {item.name}
              </Link>
            </li>
          </Fragment>
        );
      })}
    </ul>
  );
};

Categories.propTypes = {
  // eslint-disable-next-line react/require-default-props
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Categories;
