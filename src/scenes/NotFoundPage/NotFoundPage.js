import React from 'react';

import BackgroundBlackHole from '@components/BackgroundBlackHole';

import Title from './components/Title';

import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <>
      <BackgroundBlackHole />
      <div className={styles.container}>
        <Title />
      </div>
    </>
  );
};

export default NotFoundPage;
