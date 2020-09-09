import React from 'react';

import BackgroundStars from '@components/BackgroundStars';

import Description from './components/Description';
import Form from './components/Form';

import styles from './ContactsPage.module.scss';

const ContactsPage = () => {
  return (
    <>
      <BackgroundStars />
      <div className={styles.container}>
        <div className="pageWrapper">
          <Description />
          <Form />
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
