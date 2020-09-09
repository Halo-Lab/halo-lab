import React from 'react';

import PageMessage from '@components/PageMessage';
import BackgroundStars from '@components/BackgroundStars';

import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
  const title = 'Oops';
  const message = `
    Something went wrong =(
  `;

  return (
    <>
      <BackgroundStars />
      <div className={`pageWrapper ${styles.container}`}>
        <PageMessage title={title} large={true} message={message} />
      </div>
    </>
  );
};

export default ErrorPage;
