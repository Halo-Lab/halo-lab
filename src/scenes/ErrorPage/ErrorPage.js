import React from 'react';

import PageMessage from '@/components/PageMessage';

import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
  const title = 'Oops';
  const message = `
    Something went wrong =(
  `;

  return (
    <div className={`pageWrapper ${styles.container}`}>
      <PageMessage title={title} large={true} message={message} />
    </div>
  );
};

export default ErrorPage;
