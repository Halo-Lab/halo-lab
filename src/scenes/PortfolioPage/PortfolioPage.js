import React from 'react';

import Projects from '@scenes/Projects';
import MailUs from '@scenes/MailUs';
import Clients from './components/Clients';
import Works from './components/Works';

import styles from './PortfolioPage.module.scss';

const PortfolioPage = () => {
  return (
    <div className={`${styles.container} pageWrapper`}>
      <Projects title="Projects" navigation={false} />
      <Clients />
      <Works />
      <MailUs />
    </div>
  );
};

export default PortfolioPage;
