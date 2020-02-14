import React from 'react';
import { Link } from 'gatsby';

import { useSiteMetadata } from '@hooks/queries';

import styles from './ErrResponse.module.scss';

const Title = () => {
  const metadata = useSiteMetadata();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Thank you for your request</h2>
      <p className={styles.description}>
        We appreciate your time so will be in touch within 24 hours. Enjoy
        exploring beautiful design we have created and soon yours will be as
        great.
      </p>
      <p className={styles.description}>
        If you have any additional questions, mail us:
        <a className={styles.link} href={`mailto:${metadata.email}`}>
          {metadata.email}
        </a>
      </p>
      <Link className={styles.button} to="/portfolio">
        view projects
      </Link>
    </div>
  );
};

export default Title;
