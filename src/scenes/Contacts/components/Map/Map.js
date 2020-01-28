import React, { useContext } from 'react';
import { GlobalContext } from '@contexts';

import styles from './Map.module.scss';

const Map = () => {
  const { imagesAPI } = useContext(GlobalContext);
  const images = imagesAPI.get([
    'contacts/contact-map.svg',
    'contacts/flag-icon.svg',
  ]);

  const items = [
    { title: 'INQUIRIES', link: 'mail@halo-lab.com' },
    { title: 'CAREERS', link: 'team@halo-lab.com' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          src={images['contacts/contact-map.svg'].url}
          alt={images['contacts/contact-map.svg'].name}
        />
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
