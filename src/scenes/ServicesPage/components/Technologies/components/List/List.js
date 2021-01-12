import PropTypes from 'prop-types';
import React from 'react';
import { v4 as uuid } from 'uuid';

import styles from './List.module.scss';

const List = ({ items }) => {
  return (
    <ul className={styles.container}>
      {items.map(({ title: titleOuter, items: item }) => {
        return (
          <li key={uuid()} className={styles.item}>
            <h3 className={styles.itemTitle}>{titleOuter}</h3>
            <ul className={styles.sublist}>
              {item.map(({ title, image }) => {
                return (
                  <li key={uuid()} className={styles.subitem}>
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
