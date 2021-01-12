import React from 'react';

import PageMessage from '@/components/PageMessage';

import styles from './ThanksPage.module.scss';

const ThanksPage = () => {
  const title = 'Thank you for your request';
  const message = `
    We appreciate your time so will be in touch within 24 hours. Enjoy
    exploring beautiful design we have created and soon yours will be as
    great.
  `;

  return (
    <div className={`pageWrapper ${styles.container}`}>
      <PageMessage title={title} message={message} mail />
    </div>
  );
};

export default ThanksPage;
