import React from 'react';

import Previews from './components/Previews';

import styles from './Blog.module.scss';

const Blog = () => {
  return (
    <div className={`pageWrapper ${styles.container}`}>
      <div className={styles.title}>Our Blog</div>
      <Previews />
    </div>
  );
};

export default Blog;
