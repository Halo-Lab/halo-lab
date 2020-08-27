import React from 'react';
import { Link } from 'gatsby';
import image from './images/man-image.png';

import styles from './Title.module.scss';

const Title = () => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <p className={styles.text}>
          Gosh, it seems like page you’re looking for has been absorbed.
          <img src={image} className={styles.image} alt="crying man" />
        </p>
        <Link to="/" className={styles.link}>
          okay, go on 😢
        </Link>
      </div>
    </div>
  );
};

export default Title;
