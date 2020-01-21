import React, { useContext } from 'react';

import { GlobalContext } from '@contexts';

import styles from './List.module.scss';

const List = () => {
  const { imagesAPI } = useContext(GlobalContext);
  const images = imagesAPI.get([
    'services/desing/web-desing-icon.svg',
    'services/desing/mobile-design-icon.svg',
    'services/desing/ux.svg',
    'services/desing/branding.svg',
  ]);

  const items = [
    {
      title: 'Websites Design',
      text:
        'We create comprehensive and sophisticated yet simple to use interfaces for your web app.',
      image: images['services/desing/web-desing-icon.svg'],
    },
    {
      title: 'Mobile Apps Design',
      text:
        'We create native mobile apps with a focus on natural gestures and interactions with the user.',
      image: images['services/desing/mobile-design-icon.svg'],
    },
    {
      title: 'UX/UI Design',
      text:
        'We design the flow of a multi-screen app, interactions and animations, to make interface feel amazing.',
      image: images['services/desing/ux.svg'],
    },
    {
      title: 'Branding',
      text:
        "We don't just create logos, we help our partners establish an all-encompassing brand experience.",
      image: images['services/desing/branding.svg'],
    },
  ];

  return (
    <ul className={styles.container}>
      {items.map(({ title, text, image }, index) => {
        return (
          <li key={index} className={styles.item}>
            <img src={image.url} alt={image.name} />
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
