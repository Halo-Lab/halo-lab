import React from 'react';

import Title from './components/Title';

import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <Title />
      <div className={styles.decor} />
    </div>
  );
};

export default NotFoundPage;
