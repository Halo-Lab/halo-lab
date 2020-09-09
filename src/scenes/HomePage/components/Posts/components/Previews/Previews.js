import React from 'react';
import { Link } from 'gatsby';

import { useWordpressPosts } from '@hooks/queries';

import Item from './components/Item';

import styles from './Previews.module.scss';

const Previews = () => {
  const items = useWordpressPosts().slice(0, 3);

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {items.map(item => {
          return <Item key={item.path} {...item} />;
        })}
      </div>
      <Link to="/blog" className={styles.link}>
        MORE BLOG POSTS
      </Link>
    </div>
  );
};

export default Previews;
