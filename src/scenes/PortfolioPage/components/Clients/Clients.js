import React from 'react';

import { usePortfolioClientsAssets } from '@/hooks/queries';

import styles from './Clients.module.scss';

const Clients = () => {
  const items = usePortfolioClientsAssets();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Clients</h2>
      <ul className={styles.list}>
        {items.map(({ publicURL }) => {
          return (
            <li key={publicURL} className={styles.item}>
              <img
                src={publicURL}
                alt="client company logotype"
                loading="lazy"
                draggable="false"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Clients;
