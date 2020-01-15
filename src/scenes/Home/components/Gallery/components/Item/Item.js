import React from 'react';
import PropTypes from 'prop-types';

import styles from './Item.module.scss';

const Item = ({ url, name }) => {
  return (
    <div className={styles.container}>
      <img src={url} alt={name} />
    </div>
  );
};

Item.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
};

export default Item;
