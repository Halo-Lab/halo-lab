import React from 'react';

import Description from './components/Description';
import List from './components/List';

import styles from './Industries.module.scss';

const Industries = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Industries</h3>
      <Description />
      <List />
    </div>
  );
};

export default Industries;
