import React from 'react';

import Projects from '@scenes/Projects';
import MailUs from '@scenes/MailUs';

import BackgroundStars from '@components/BackgroundStars';

import Clients from './components/Clients';

import styles from './PortfolioPage.module.scss';

const PortfolioPage = () => {
  return (
    <>
      <BackgroundStars />
      <div className={`${styles.container}`}>
        <div className="pageWrapper">
          <Projects title="Projects" navigation={false} />
          <Clients />
        </div>
        <MailUs />
      </div>
    </>
  );
};

export default PortfolioPage;
