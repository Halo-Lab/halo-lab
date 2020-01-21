import React from 'react';

import Block from './components/Block';
import List from './components/List';

import styles from './Design.module.scss';

const Design = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Design</div>
      <div className={styles.wrapper}>
        <Block />
        <List />
      </div>
    </div>
  );
};

export default Design;
