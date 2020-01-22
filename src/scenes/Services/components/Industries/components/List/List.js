import React, { useContext } from 'react';

import { GlobalContext } from '@contexts';

import styles from './List.module.scss';

const List = () => {
  const { imagesAPI } = useContext(GlobalContext);
  const images = imagesAPI.get(['services/industries_icon.svg']);
  const items = [
    { title: 'Health care', image: images['services/industries_icon.svg'] },
    { title: 'Fintech', image: images['services/industries_icon.svg'] },
    {
      title: 'Internet of Things',
      image: images['services/industries_icon.svg'],
    },
    { title: 'E-commmerce', image: images['services/industries_icon.svg'] },
  ];

  return (
    <ul className={styles.container}>
      {items.map(({ title, image }, index) => {
        return (
          <li key={index} className={styles.item}>
            <img src={image.url} alt={image.name} draggable="false" />
            <span>{title}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
