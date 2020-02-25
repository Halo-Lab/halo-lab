import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import styles from './Item.module.scss';

const Item = ({ childImageSharp }) => {
  return (
    <div className={styles.container}>
      <Img fluid={childImageSharp.fluid} />
    </div>
  );
};

Item.propTypes = {
  childImageSharp: PropTypes.object,
};

export default Item;
