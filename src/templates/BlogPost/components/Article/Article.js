import React from 'react';
import PropTypes from 'prop-types';

import styles from './Article.module.scss';
import '@styles/blog-themes/wordpress.scss';
import '@styles/blog-themes/custom.scss';

const Article = ({ content }) => {
  return (
    <div className={styles.container}>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className={`${styles.wrapper} post`}
      ></div>
    </div>
  );
};

Article.propTypes = {
  content: PropTypes.string,
};

export default Article;
