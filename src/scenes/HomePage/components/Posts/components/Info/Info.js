import React from 'react';

import styles from './Info.module.scss';
import MagneticLink from '@components/MagneticLink';

const Info = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Front-end &amp; back-end expertise from development to delivery
      </div>
      <div className={styles.link}>
        <MagneticLink to="/blog" text="MORE BLOG POSTS" radius={100} />
      </div>
    </div>
  );
};

export default Info;
