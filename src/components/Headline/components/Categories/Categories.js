import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import styles from './Categories.module.scss';

const Categories = ({ items }) => {
  return (
    <ul className={styles.categoryList}>
      {items.map((item, index) => {
        return (
          <Fragment key={item.id}>
            {index > 0 && <li className={styles.categorySeparator}>/</li>}
            <li key={item.id}>
              <Link to={item.link} className={styles.categoryLink}>
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
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Categories;
