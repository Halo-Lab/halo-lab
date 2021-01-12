import PropTypes from 'prop-types';
import React from 'react';

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
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  reversed: PropTypes.bool.isRequired,
};

export default Partners;
