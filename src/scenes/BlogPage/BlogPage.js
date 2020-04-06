import React from 'react';

import Previews from './components/Previews';
import GradientText from '../../components/GradientText';
import styles from './BlogPage.module.scss';

const BlogPage = () => {
  return (
    <div className={`pageWrapper ${styles.container}`}>
      <h1 className={styles.title}>
        <GradientText text="Our Blog" />
      </h1>
      <Previews />
    </div>
  );
};

export default BlogPage;
