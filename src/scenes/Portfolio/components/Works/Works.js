import React from 'react';

import Title from './components/Title';
import List from './components/List';

import styles from './Works.module.scss';

const Works = () => {
  return (
    <div className={styles.container}>
      <Title />
      <List />
    </div>
  );
};

export default Works;
