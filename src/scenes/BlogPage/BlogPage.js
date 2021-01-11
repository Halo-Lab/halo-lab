import classNames from 'classnames';
import React from 'react';

import GradientText from '../../components/GradientText';
import Previews from './components/Previews';

import styles from './BlogPage.module.scss';

const BlogPage = () => {
  const pageWrapperClass = classNames(styles.container, 'pageWrapper');
  return (
    <div className={pageWrapperClass}>
      <h1 className={styles.title}>
        <GradientText text="Our Blog" />
      </h1>
      <Previews />
    </div>
  );
};

export default BlogPage;
