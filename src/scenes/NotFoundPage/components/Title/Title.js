import React from 'react';
import { Link } from 'gatsby';
import SlideHover from '@components/SlideHover';
import image from './images/man-image.gif';

import styles from './Title.module.scss';

const Title = () => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <div className={styles.imageWrap}>
          <img src={image} className={styles.image} alt="crying man" />
        </div>
        <div className={styles.textWrap}>
          <p className={styles.text}>
            Gosh, it seems like page you’re looking for has been absorbed.
          </p>
          <div className={styles.linkWrap}>
            <SlideHover>
              <Link to="/" className={styles.link}>
                okay, go on
              </Link>
            </SlideHover>
            <span className={styles.emoji}>😢</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
