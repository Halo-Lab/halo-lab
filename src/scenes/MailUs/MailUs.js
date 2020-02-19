import React from 'react';

import { useSiteMetadata } from '@hooks/queries';

import styles from './MailUs.module.scss';

const MailUs = () => {
  const metadata = useSiteMetadata();

  return (
    <div className={styles.container}>
      <p className={styles.title}>Time to create your star</p>
      <a href={`mailto:${metadata.email}`} className={styles.link}>
        {metadata.email}
      </a>
    </div>
  );
};

export default MailUs;
