import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './MailUs.scss';

const MailUs = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
        }
      }
    }
  `);

  return (
    <div className="mail_us tac">
      <p className="mail_us-title">Time to create your star</p>
      <a
        href={`mailto:${data.site.siteMetadata.email}`}
        className="mail_us-link"
      >
        {data.site.siteMetadata.email}
      </a>
    </div>
  );
};

export default MailUs;
