import React from 'react';
import PropTypes from 'prop-types';

import Block from './components/Block';
import List from './components/List';

import styles from './ServicesItem.module.scss';

const ServicesItem = ({ items, banner }) => {
  return (
    <div className={styles.container}>
      <Block banner={banner} />
      <List items={items} />
    </div>
  );
};

ServicesItem.propTypes = {
  banner: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object),
};

export default ServicesItem;