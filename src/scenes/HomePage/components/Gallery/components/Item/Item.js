import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Item.module.scss';

const Item = ({ childImageSharp }) => {
  const imageStyle = {
    width: childImageSharp.fluid.width,
    height: childImageSharp.fluid.height,
  };

  return (
    <div style={imageStyle} className={styles.container}>
      <Img fluid={childImageSharp.fluid} alt="our team photo" />
    </div>
  );
};

Item.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  childImageSharp: PropTypes.object.isRequired,
};

export default Item;
