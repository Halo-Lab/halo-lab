import React from 'react';

import Projects from '@scenes/Projects';
import MailUs from '@scenes/MailUs';
import Clients from './components/Clients';
import Works from './components/Works';

const PortfolioPage = () => {
  return (
    <div className="pageWrapper">
      <Projects title="Portfolio" navigation={false} />
      <Clients />
      <Works />
      <MailUs />
    </div>
  );
};

export default PortfolioPage;
