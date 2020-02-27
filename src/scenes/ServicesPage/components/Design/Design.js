import React from 'react';

import { useServicesDesignAssets } from '@hooks/queries';
import ServicesItem from '../ServicesItem';

import styles from './Design.module.scss';

const Design = () => {
  const {
    branding,
    mobileAppsDesign,
    uxUiDesign,
    websitesDesign,
  } = useServicesDesignAssets();

  const message = {
    text:
      'We make the collaboration of people and interface more intensive and exciting.',
    link: 'NEED A DESIGNER?',
  };

  const items = [
    {
      title: 'Websites Design',
      text:
        'We create comprehensive and sophisticated yet simple to use interfaces for your web app.',
      image: websitesDesign,
    },
    {
      title: 'Mobile Apps Design',
      text:
        'We create native mobile apps with a focus on natural gestures and interactions with the user.',
      image: mobileAppsDesign,
    },
    {
      title: 'UX/UI Design',
      text:
        'We design the flow of a multi-screen app, interactions and animations, to make interface feel amazing.',
      image: uxUiDesign,
    },
    {
      title: 'Branding',
      text:
        "We don't just create logos, we help our partners establish an all-encompassing brand experience.",
      image: branding,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.title}>Design</div>
      <ServicesItem items={items} message={message} />
    </div>
  );
};

export default Design;
