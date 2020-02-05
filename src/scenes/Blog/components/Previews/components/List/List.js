import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';

import styles from './List.module.scss';

const STEP_VALUE = 6;

const List = ({ items }) => {
  const [numberOfRendered, setNumberOfRendered] = useState(STEP_VALUE);

  const handleClick = () => {
    const value = numberOfRendered + STEP_VALUE;
    setNumberOfRendered(value);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {items.map((item, index) => {
          const inlineStyles = { animationDelay: `0.${index}s` };

          return numberOfRendered > index ? (
            <li key={item.id} style={inlineStyles} className={styles.item}>
              <Card {...item} />
            </li>
          ) : null;
        })}
      </ul>

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
