import React, { useContext } from 'react';

import { GlobalContext } from '@contexts';

import styles from './Clients.module.scss';

const Clients = () => {
  const { imagesAPI } = useContext(GlobalContext);
  const images = imagesAPI.getArray([
    'partners/angellist.svg',
    'partners/forbes.svg',
    'partners/indiegogo.svg',
    'partners/mashable.svg',
    'partners/techcrunch.svg',
    'partners/vc.ru.svg',
    'partners/indiegogo.svg',
    'partners/mashable.svg',
    'partners/techcrunch.svg',
    'partners/vc.ru.svg',
  ]);
  console.log(images);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Clients</h2>
      <ul className={styles.list}>
        {images.map(({ url, name }, index) => {
          return (
            <li key={index} className={styles.item}>
              <img src={url} alt={name} draggable="false" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Clients;
