import React from 'react';

import Description from './components/Description';
import Map from './components/Map';
import Form from './components/Form';

import styles from './ContactsPage.module.scss';

const ContactsPage = () => {
  return (
    <div className={`oldPageWrapper ${styles.container}`}>
      <Description />
      <Form />
      <Map />
    </div>
  );
};

export default ContactsPage;
