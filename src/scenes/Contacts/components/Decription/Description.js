import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import styles from './Description.module.scss';

const Description = () => {
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
    <>
      <div className={styles.title}>Contacts</div>
      <div className={styles.description}>
        <h2>
          Got a project in mind? Fill in the form or send us a&nbsp;
          <a
            href={`mailto:${data.site.siteMetadata.email}`}
            className={styles.mail}
          >
            direct email
          </a>
          .
        </h2>
        <p>
          The team is open for your ideas, questions and needs. Our partners get
          the superior results when a short-term acquaintance turns into a
          long-term collaboration.
        </p>
      </div>
      <div className={styles.contactMail}>
        <p>You can mail us directly:</p>
        <a href={`mailto:${data.site.siteMetadata.email}`}>
          {data.site.siteMetadata.email}
        </a>
      </div>
    </>
  );
};

export default Description;
