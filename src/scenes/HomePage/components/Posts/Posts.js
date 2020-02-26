import React from 'react';

import Info from './components/Info';
import List from './components/List';

import styles from './Posts.module.scss';

const Posts = () => {
  return (
    <section className={styles.container}>
      <div className={styles.aside}>
        <Info />
      </div>
      <div className={styles.main}>
        {/* <List /> */}
        List
      </div>
    </section>
  );
};

export default Posts;
