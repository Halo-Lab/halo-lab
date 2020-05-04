import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';

import styles from './Info.module.scss';
import MagneticHover from '../../../../../../helpers/MagneticHover/magneticHover';

const Info = () => {
  const linkEl = useRef(null);
  const [lineWidth, setLineWidth] = useState(20);
  function showDistance(distance) {
    // console.log(distance);
    setLineWidth(100 - distance);
  }
  useEffect(() => {
    new MagneticHover({
      element: linkEl.current,
      radius: 100,
      callback: showDistance,
    });
  }, [lineWidth]);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Front-end &amp; back-end expertise from development to delivery
      </div>
      <Link to="/blog" className={styles.link} ref={linkEl}>
        MORE BLOG POSTS
        <span
          className={styles.underline}
          style={{ width: lineWidth + '%' }}
        ></span>
      </Link>
    </div>
  );
};

export default Info;
