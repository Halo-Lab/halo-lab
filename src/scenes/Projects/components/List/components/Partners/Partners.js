import React from 'react';
import PropTypes from 'prop-types';

import styles from './Partners.module.scss';

const Partners = ({ items, reversed }) => {
  return (
    <ul className={`${styles.container} ${reversed ? styles.reversed : ''}`}>
      {items.map(({ publicURL }) => {
        return (
          <li key={publicURL}>
            <img src={publicURL} alt="partner logotype" loading="lazy" />
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
