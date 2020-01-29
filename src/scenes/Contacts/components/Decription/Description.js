import React from 'react';
import { useSiteMetadata } from '@hooks/queries';

import styles from './Description.module.scss';

const Description = () => {
  const data = useSiteMetadata();
  return (
    <>
      <div className={styles.title}>Contacts</div>
      <div className={styles.description}>
        <h2>
          Got a project in mind? Fill in the form or send us a&nbsp;
          <a href={`mailto:${data.email}`} className={styles.mail}>
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
        <a href={`mailto:${data.email}`}>{data.email}</a>
      </div>
    </>
  );
};

export default Description;
