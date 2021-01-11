import PropTypes from 'prop-types';
import React from 'react';

import styles from './List.module.scss';

const List = ({ items }) => {
  return (
    <ul className={styles.container}>
      {items.map(({ title, items }, index) => {
        return (
          <li key={index} className={styles.item}>
            <h3 className={styles.itemTitle}>{title}</h3>
            <ul className={styles.sublist}>
              {items.map(({ title, image }, index) => {
                return (
                  <li key={index} className={styles.subitem}>
                    <div className={styles.icon}>
                      <img
                        src={image.publicURL}
                        alt="technologies item icon"
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.subitemTitle}>{title}</div>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

List.defaultProps = {
  items: [],
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default List;
