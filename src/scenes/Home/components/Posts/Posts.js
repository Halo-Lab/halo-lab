import React from 'react';
import { Link } from 'gatsby';

import List from './components/List';

import styles from './Posts.module.scss';

const Posts = () => {
  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <div className={styles.title}>
          Front-end &amp; back-end expertise from development to delivery
        </div>
        <Link to="/blog" className={styles.link}>
          MORE BLOG POSTS
        </Link>
      </div>

      <List />
    </section>
  );
};

export default Posts;
