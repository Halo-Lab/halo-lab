import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';

import PostImage from './components/PostImage';

import styles from './Article.module.scss';
import '@styles/blog-themes/wordpress.scss';
import '@styles/blog-themes/custom.scss';

const replaceImages = node => {
  if (node.name === 'img') {
    return <PostImage node={node} />;
  }

  return node;
};

const Article = ({ content }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.wrapper} post`}>
        {parse(content, { replace: replaceImages })}
      </div>
    </div>
  );
};

Article.propTypes = {
  content: PropTypes.string,
};

export default Article;
