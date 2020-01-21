import React, { useContext } from 'react';

import ServicesItem from '@scenes/Services/components/ServicesItem';
import { GlobalContext } from '@contexts';

import styles from './Design.module.scss';

const Design = () => {
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
    <div className={styles.container}>
      <div className={styles.title}>Design</div>
      <ServicesItem banner={true} items={items} />
    </div>
  );
};

export default Design;
