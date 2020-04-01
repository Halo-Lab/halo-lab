import React from 'react';
import { useSiteMetadata } from '@hooks/queries';
import GradientText from '../../../../components/GradientText';

import styles from './Description.module.scss';

const Description = () => {
  const data = useSiteMetadata();
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <GradientText
          text="Contacts"
          background="linear-gradient(
            125.56deg,
            #e7a28f 3.52%,
            #f9d6ac 41.89%,
            #fbfefc 96.77%
          )"
        />
      </div>
      <div className={styles.container}>
        <h2>
          Email us: <br />
          <a href={`mailto:${data.email}`} className={styles.mail}>
            <GradientText
              text={data.email}
              background="linear-gradient(
                130.51deg,
                #e7a28f 3.52%,
                #f9d6ac 41.89%,
                #fbfefc 96.77%
              )"
            />
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
