import React from 'react';

import MailUs from '@/scenes/MailUs';

import Design from './components/Design';
import Development from './components/Development';
import Flow from './components/Flow';
import Industries from './components/Industries';
import Technologies from './components/Technologies';

import styles from './ServicesPage.module.scss';

const ServicesPage = () => {
  return (
    <div className={`${styles.container}`}>
      <div className="pageWrapper">
        <Design />
        <Development />
        <Flow />
        <Industries />
        <Technologies />
      </div>
      <MailUs />
    </div>
  );
};

export default ServicesPage;
