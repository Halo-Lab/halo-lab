import React from 'react';
import PropTypes from 'prop-types';

import Block from './components/Block';
import List from './components/List';

import styles from './ServiceItem.module.scss';

const ServiceItem = ({ items, message }) => {
  return (
    <div className={styles.container}>
      <Block message={message} />
      <List items={items} />
    </div>
  );
};

ServiceItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  message: PropTypes.object,
};

export default ServiceItem;
