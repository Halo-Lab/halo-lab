import React from 'react';

import Previews from './components/Previews';

import styles from './BlogPage.module.scss';

const BlogPage = () => {
  return (
    <div className={`oldPageWrapper ${styles.container}`}>
      <div className={styles.title}>Our Blog</div>
      <Previews />
    </div>
  );
};

export default BlogPage;
