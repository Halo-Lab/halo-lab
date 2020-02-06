import React from 'react';
import PropTypes from 'prop-types';

import styles from './Article.module.scss';
import './wordpress-theme.scss';
import './custom-theme.scss';

const Article = ({ content }) => {
  return (
    <div className={styles.container}>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className={`${styles.wrapper} content`}
      ></div>
    </div>
  );
};

Article.propTypes = {
  content: PropTypes.string,
};

export default Article;
