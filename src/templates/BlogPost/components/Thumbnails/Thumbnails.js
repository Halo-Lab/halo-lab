import PropTypes from 'prop-types';
import React from 'react';
import { v4 as uuid } from 'uuid';

import PostThumbnail from '@/scenes/PostThumbnail';

import styles from './Thumbnails.module.scss';

const Thumbnails = ({ items }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Other recent posts</div>
      <ul className={styles.list}>
        {items.map((item) => {
          return (
            <li key={uuid()} className={styles.item}>
              <PostThumbnail {...item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Thumbnails.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Thumbnails;
