import React from 'react';
import Gallery from './components/Gallery';

import PropTypes from 'prop-types';

import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Gallery />
    </div>
  );
};

HomePage.propTypes = {
  animation: PropTypes.any,
};

export default HomePage;
