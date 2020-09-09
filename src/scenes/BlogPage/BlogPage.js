import React from 'react';
import classNames from 'classnames';

import GradientText from '@components/GradientText';
import BackgroundStars from '@components/BackgroundStars';

import Previews from './components/Previews';

import styles from './BlogPage.module.scss';

const BlogPage = () => {
  return (
    <>
      <BackgroundStars />
      <div className={classNames(styles.container, 'pageWrapper')}>
        <h1 className={styles.title}>
          <GradientText text="Our Blog" />
        </h1>
        <Previews />
      </div>
    </>
  );
};

export default BlogPage;
