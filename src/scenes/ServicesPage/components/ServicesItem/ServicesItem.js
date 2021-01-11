import PropTypes from 'prop-types';
import React from 'react';

import Block from './components/Block';
import List from './components/List';

import styles from './ServicesItem.module.scss';

const ServicesItem = ({ items, message }) => {
  return (
    <div className={styles.container}>
      <Block message={message} />
      <List items={items} />
    </div>
  );
};

ServicesItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  message: PropTypes.object,
};

export default ServicesItem;
