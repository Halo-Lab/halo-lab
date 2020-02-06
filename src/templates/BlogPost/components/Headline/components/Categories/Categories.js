import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import styles from './Categories.module.scss';

const Categories = ({ items }) => {
  return (
    <ul className={styles.container}>
      {items.map(item => {
        const link = `/blog?category=${item.slug}`;

        return (
          <li key={item.id} className={styles.item}>
            <Link to={link}>{item.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Categories;
