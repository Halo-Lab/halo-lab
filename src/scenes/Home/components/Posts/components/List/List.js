import React from 'react';
import { Link } from 'gatsby';

import { useWordpressPosts } from '@hooks/queries';

import styles from './List.module.scss';

const List = () => {
  const items = useWordpressPosts();

  return (
    <div className={styles.container}>
      {items.map(({ featured_media, title, date, path }) => {
        const link = `blog?article=${path.slice(1, -1)}`;

        return (
          <div key={date} className={styles.item}>
            <div className={styles.image}>
              <Link to={link}>
                <img src={featured_media.source_url} alt="preview" />
              </Link>
            </div>
            <div className={styles.info}>
              <div className={styles.date}>{date}</div>
              <h3 className={styles.title}>
                <Link to={link}>{title}</Link>
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
