import React, { useRef, useEffect } from 'react';
import { Link } from 'gatsby';

import styles from './Info.module.scss';
import HoverUnderline from '../../../../../../components/HoverUnderline';

const Info = () => {
  const linkEl = useRef(null);

  useEffect(() => {
    // console.log(linkEl.current);
  }, [linkEl]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Front-end &amp; back-end expertise from development to delivery
      </div>
      <Link to="/blog" className={styles.link} ref={linkEl}>
        MORE BLOG POSTS
        {linkEl !== null ? (
          <HoverUnderline element={linkEl} radius={100} />
        ) : null}
      </Link>
    </div>
  );
};

export default Info;
