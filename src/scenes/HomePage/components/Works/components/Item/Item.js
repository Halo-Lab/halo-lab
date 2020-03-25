import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import styles from './Item.module.scss';

const Item = ({ images }) => {
  return (
    <div className={`${styles.item} swiper-slide`}>
      {images.map((image, index) => {
        return (
          <Img
            data-name={index}
            key={image.childImageSharp.fluid + index}
            className={styles.image}
            fluid={image.childImageSharp.fluid}
            draggable={false}
          />
        );
      })}
    </div>
  );
};

Item.propTypes = {
  images: PropTypes.array,
};

export default Item;
