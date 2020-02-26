import React, { useContext } from 'react';

import { GlobalContext } from '@contexts';

import styles from './List.module.scss';

const IMAGES = {
  HEALTHCARE: 'services/industries/healthcare.svg',
  FINTECH: 'services/industries/fintech.svg',
  IOT: 'services/industries/iot.svg',
  ECOMMERCE: 'services/industries/ecommerce.svg',
};

const List = () => {
  const { imagesAPI } = useContext(GlobalContext);
  const images = imagesAPI.get([
    IMAGES.HEALTHCARE,
    IMAGES.FINTECH,
    IMAGES.IOT,
    IMAGES.ECOMMERCE,
  ]);
  const items = [
    {
      title: 'Health care',
      image: images[IMAGES.HEALTHCARE],
    },
    { title: 'Fintech', image: images[IMAGES.FINTECH] },
    {
      title: 'Internet of Things',
      image: images[IMAGES.IOT],
    },
    { title: 'E-commerce', image: images[IMAGES.ECOMMERCE] },
  ];

  return (
    <ul className={styles.container}>
      {items.map(({ title, image }) => {
        return (
          <li key={title} className={styles.item}>
            <img src={image.url} alt={image.name} draggable="false" />
            <span>{title}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
