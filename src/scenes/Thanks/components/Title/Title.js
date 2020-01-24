import React from 'react';

import styles from './Title.module.scss';

const Title = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Thank you for your request</h1>
      <p className={styles.description}>
        We appreciate your time so will be in touch within 24 hours. Enjoy
        exploring beautiful design we have created and soon yours will be as
        great.
      </p>
      <p className={styles.description}>
        If you have any additional questions, mail us:{' '}
        <a className={styles.link} href="mailto:mail@halo-lab.com">
          mail@halo-lab.com
        </a>
      </p>
      <a className={styles.button} href="#">
        view projects
      </a>
    </div>
  );
};

export default Title;
