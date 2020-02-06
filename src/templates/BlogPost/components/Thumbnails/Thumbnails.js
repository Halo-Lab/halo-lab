import React from 'react';
import PropTypes from 'prop-types';

import PostThumbnail from '@scenes/PostThumbnail';

import styles from './Thumbnails.module.scss';

const Thumbnails = ({ items }) => {
  console.log('thumbnails', items);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Other recent posts</div>
      <ul className={styles.list}>
        {items.map((item, index) => {
          return (
            <li key={index} className={styles.item}>
              <PostThumbnail {...item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Thumbnails.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Thumbnails;
