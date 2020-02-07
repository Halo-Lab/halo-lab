import React from 'react';

import Description from './components/Description';
import List from './components/List';

import styles from './Industries.module.scss';

const Industries = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Industries</div>
      <Description />
      <List />
    </div>
  );
};

export default Industries;
