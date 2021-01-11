import PropTypes from 'prop-types';
import React from 'react';

import styles from './Article.module.scss';

const Article = ({ content }) => {
  return (
    <div className={styles.container}>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className={styles.wrapper}
      ></div>
    </div>
  );
};

Article.propTypes = {
  content: PropTypes.string,
};

export default Article;
