import { Link } from 'gatsby';
import React from 'react';

import SlideHover from '@/components/SlideHover';
import { useWordpressPosts } from '@/hooks/queries';

import Item from './components/Item';

import styles from './Previews.module.scss';

const Previews = () => {
  const items = useWordpressPosts().slice(0, 3);

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {items.map((item) => {
          return <Item key={item.path} {...item} />;
        })}
      </div>
      <SlideHover>
        <Link to="/blog" className={styles.link}>
          MORE BLOG POSTS
        </Link>
      </SlideHover>
    </div>
  );
};

export default Previews;
