import React from 'react';
import { useSiteMetadata } from '@hooks/queries';

import styles from './Description.module.scss';

const Description = () => {
  const data = useSiteMetadata();
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Contacts</div>
      <div className={styles.container}>
        <h2>
          Email us: <br />
          <a href={`mailto:${data.email}`} className={styles.mail}>
            mail@halo-lab.com
          </a>
        </h2>
        <p>
          The team is open for your ideas, questions and needs. Our clients get
          the superior results when a short-term acquaintance turns into a
          long-term collaboration.
        </p>

        <div className={`${styles.circle} ${styles.circleSm}`}></div>
        <div className={`${styles.circle} ${styles.circleLg}`}></div>
      </div>
    </div>
  );
};

export default Description;
