import React from 'react';
import { Link } from 'gatsby';

import styles from './Info.module.scss';

const Info = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Front-end &amp; back-end expertise from development to delivery
      </div>
      <Link to="/blog" className={styles.link}>
        MORE BLOG POSTS
      </Link>
    </div>
  );
};

export default Info;
