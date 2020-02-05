import React from 'react';
import PropTypes from 'prop-types';

import styles from './Article.module.scss';

const Article = ({ content }) => {
  console.log(content);

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
