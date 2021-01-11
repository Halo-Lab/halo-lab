import PropTypes from 'prop-types';
import React, { useState } from 'react';

import PostThumbnail from '@/scenes/PostThumbnail';

import styles from './List.module.scss';

const STEP_VALUE = 6;

const List = ({ items }) => {
  const [numberOfRendered, setNumberOfRendered] = useState(STEP_VALUE);
  const postsToRender = [];

  const handleClick = () => {
    const value = numberOfRendered + STEP_VALUE;
    setNumberOfRendered(value > items.length ? items.length : value);
  };

  for (let i = 0; i < numberOfRendered; i++) {
    const inlineStyles = { animationDelay: `0.${i}s` };

    postsToRender.push(
      <li
        data-automation="articles"
        key={items[i].id}
        style={inlineStyles}
        className={styles.item}
      >
        <PostThumbnail {...items[i]} />
      </li>,
    );
  }

  return (
    <div className={styles.container}>
      <ul className={styles.list}>{postsToRender}</ul>
      {numberOfRendered < items.length ? (
        <div className={styles.buttonWrapper}>
          <button className={styles.button} onClick={handleClick}>
            Show More
          </button>
        </div>
      ) : null}
    </div>
  );
};

List.defaultProps = {
  items: [],
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default List;
