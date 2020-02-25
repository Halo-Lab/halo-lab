import React from 'react';
import PropTypes from 'prop-types';

import styles from './Partners.module.scss';

const Partners = ({ items, reversed }) => {
  return (
    <ul className={`${styles.container} ${reversed ? styles.reversed : ''}`}>
      {items.map(({ url, name }) => {
        return (
          <li key={name}>
            <img src={url} alt={name} />
          </li>
        );
      })}
    </ul>
  );
};

Partners.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  reversed: PropTypes.bool,
};

export default Partners;
