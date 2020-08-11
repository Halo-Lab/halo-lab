import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import styles from './Item.module.scss';

const Item = ({ images }) => {
  return (
    <div className={`${styles.item} swiper-slide`}>
      {images.map(({ childImageSharp }) => {
        return (
          /*
            disabling fade in, since it's not working properly on mobiles with swiper.
            If you decide to turn it on, make sure you tested that all images loads properly when you you do left/right swipe in
          */
          <Img
            key={childImageSharp.fluid.src}
            className={styles.image}
            fluid={childImageSharp.fluid}
            draggable={false}
            loading="auto"
            fadeIn={false}
            alt="dribbble portfolio pic"
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
