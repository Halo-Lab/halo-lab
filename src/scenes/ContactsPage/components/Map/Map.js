import React from 'react';

import { useContactsAssets } from '@hooks/queries';

import styles from './Map.module.scss';

const items = [
  { title: 'INQUIRIES', link: 'mail@halo-lab.com' },
  { title: 'CAREERS', link: 'team@halo-lab.com' },
];

const Map = () => {
  const { map } = useContactsAssets();

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={map.publicURL} alt="map of Ukraine" />
        <div className={styles.mapPin}></div>
      </div>
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>
          Hello from sunny
          <span className={styles.titleFlag}>Odessa!</span>
        </h2>
        <ul className={styles.mailList}>
          {items.map(({ title, link }, index) => {
            return (
              <li key={index} className={styles.mailItem}>
                <h3 className={styles.mailLabel}>{title}</h3>
                <a href={`mailto:${link}`} className={styles.mailLink}>
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Map;
