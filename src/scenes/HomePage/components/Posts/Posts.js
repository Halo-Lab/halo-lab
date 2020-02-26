import React from 'react';

import Info from './components/Info';
import Previews from './components/Previews';

import styles from './Posts.module.scss';

const Posts = () => {
  return (
    <section className={styles.container}>
      <div className={styles.aside}>
        <Info />
      </div>
      <div className={styles.main}>
        <Previews />
      </div>
    </section>
  );
};

export default Posts;
