import React from 'react';

import { useSiteMetadata } from '@hooks/queries';

import styles from './MailUs.module.scss';

const MailUs = () => {
  const metadata = useSiteMetadata();

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        Ready to create
        <br />
        <span>your star?</span>
      </p>
      <a href={`mailto:${metadata.email}`} className={styles.link}>
        contact us
      </a>
    </div>
  );
};

export default MailUs;
