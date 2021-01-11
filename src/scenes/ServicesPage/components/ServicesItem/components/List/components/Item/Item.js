import PropTypes from 'prop-types';
import React from 'react';

import styles from './Item.module.scss';

const Item = ({ title, text, image }) => {
  return (
    <div className={styles.container}>
      <img src={image.publicURL} alt="services item icon" loading="lazy" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.object,
};

export default Item;
