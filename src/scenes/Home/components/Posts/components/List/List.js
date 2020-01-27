import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import styles from './List.module.scss';

const List = () => {
  let [posts, setPosts] = useState(null);
  const defaultPosts = [
    {
      date: 'Nov 06',
      title: '46 labs case study: telecom platform redesign',
      link: '/blog',
      image: '#',
    },
    {
      date: 'Nov 01',
      title:
        'Halo Lab Receives Top UX/UI Design Agency Award in Ukraine By Clutch',
      link: '/blog',
      image: '#',
    },
    {
      date: 'Sep 30',
      title: 'Mobile First Design: it’s worth your attention',
      link: '/blog',
      image: '#',
    },
  ];

  useEffect(() => {
    setPosts(defaultPosts);
  }, []);

  return (
    <div className={styles.container}>
      {posts ? (
        posts.map(({ image, title, date, link }) => {
          return (
            <div key={date} className={styles.item}>
              <div className={styles.image}>
                <Link to={link}>
                  <img src={image} alt="preview" />
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
        })
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  );
};

export default List;
