import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import styles from './Categories.module.scss';

const Categories = ({ items }) => {
  return (
    <ul className={styles.container}>
      <li key="all posts" className={styles.allPostsItem}>
        <Link to="/blog" className={styles.link}>
          All blog posts
        </Link>
      </li>
      {items.map(item => {
        const link = `/blog?category=${item.slug}`;

        return (
          <React.Fragment key={item.slug}>
            <li>&nbsp;/&nbsp;</li>
            <li key={item.id} className={styles.item}>
              <Link to={link} className={styles.link}>
                {item.name}
              </Link>
            </li>
          </React.Fragment>
        );
      })}
    </ul>
  );
};

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Categories;
