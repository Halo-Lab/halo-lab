import React from 'react';

import ProjectsNew from '@scenes/ProjectsNew';
import MailUs from '@scenes/MailUs';
import Clients from './components/Clients';
import Works from './components/Works';

const PortfolioPage = () => {
  return (
    <div className="pageWrapper">
      <ProjectsNew title="Portfolio" navigation={false} />
      <Clients />
      <Works />
      <MailUs />
    </div>
  );
};

export default PortfolioPage;
