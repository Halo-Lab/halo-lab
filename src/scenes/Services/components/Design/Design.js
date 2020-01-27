import React, { useContext } from 'react';

import ServicesItem from '@scenes/Services/components/ServicesItem';
import { GlobalContext } from '@contexts';

import styles from './Design.module.scss';

const Design = () => {
  const { imagesAPI } = useContext(GlobalContext);
  const images = imagesAPI.get([
    'services/design/web-design-icon.svg',
    'services/design/mobile-design-icon.svg',
    'services/design/ux.svg',
    'services/design/branding.svg',
  ]);

  const message = {
    text:
      'We make the collaboration of people and interface more intensive and exiting.',
    link: 'NEED A DESIGNER?',
  };

  const items = [
    {
      title: 'Websites Design',
      text:
        'We create comprehensive and sophisticated yet simple to use interfaces for your web app.',
      image: images['services/design/web-design-icon.svg'],
    },
    {
      title: 'Mobile Apps Design',
      text:
        'We create native mobile apps with a focus on natural gestures and interactions with the user.',
      image: images['services/design/mobile-design-icon.svg'],
    },
    {
      title: 'UX/UI Design',
      text:
        'We design the flow of a multi-screen app, interactions and animations, to make interface feel amazing.',
      image: images['services/design/ux.svg'],
    },
    {
      title: 'Branding',
      text:
        "We don't just create logos, we help our partners establish an all-encompassing brand experience.",
      image: images['services/design/branding.svg'],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.title}>Design</div>
      <ServicesItem banner={true} items={items} message={message} />
    </div>
  );
};

export default Design;
