import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import Item from './components/Item';

import './Posts.scss';

const Posts = () => {
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
    <section className=" section section__posts">
      <div className="section__posts-info">
        <div className="section__posts-title">
          Front-end &amp; back-end expertise from development to delivery
        </div>
        <Link to="/blog" className="section__posts-link">
          MORE BLOG POSTS
        </Link>
      </div>
      <div className="section__posts-block">
        {posts ? (
          posts.map(item => {
            return <Item key={item.title} {...item} />;
          })
        ) : (
          <div>Loading ...</div>
        )}
      </div>
    </section>
  );
};

export default Posts;
