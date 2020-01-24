import React from 'react';

import { useSiteMetadata } from '@hooks/queries';

import './MailUs.scss';

const MailUs = () => {
  const metadata = useSiteMetadata();

  return (
    <div className="mail_us tac">
      <p className="mail_us-title">Time to create your star</p>
      <a href={`mailto:${metadata.email}`} className="mail_us-link">
        {metadata.email}
      </a>
    </div>
  );
};

export default MailUs;
