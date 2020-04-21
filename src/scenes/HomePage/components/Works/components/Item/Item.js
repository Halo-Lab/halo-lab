import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import styles from './Item.module.scss';

const Item = ({ images }) => {
  return (
    <div className={`${styles.item} swiper-slide`}>
      {images.map(({ childImageSharp }) => {
        return (
          <Img
            key={childImageSharp.fluid.src}
            className={styles.image}
            fluid={childImageSharp.fluid}
            draggable={false}
            loading="eager"
            fadeIn={false}
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
