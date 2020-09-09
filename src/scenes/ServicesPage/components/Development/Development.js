import React from 'react';

import { useServicesDevelopmentAssets } from '@hooks/queries';
import ServiceItem from '../ServiceItem';

import styles from './Development.module.scss';

const Development = () => {
  const {
    hybridAppsDevelopment,
    projectManagement,
    qualityAssurance,
    webDevelopment,
  } = useServicesDevelopmentAssets();

  const message = {
    text: 'Front-end & back-end expertise from development to delivery.',
    link: 'NEED A DEVELOPER?',
  };

  const items = [
    {
      title: 'Web Development',
      text: 'We provide back-end and front-end development to your needs.',
      image: webDevelopment,
    },
    {
      title: 'Hybrid Apps Development',
      text:
        'Effective solutions for iOS and Android platforms with focus on performance.',
      image: hybridAppsDevelopment,
    },
    {
      title: 'Project Management',
      text:
        'Quality-driven web development according latest technology standards.',
      image: projectManagement,
    },
    {
      title: 'Quality Assurance',
      text:
        'Effective solutions for iOS and Android platforms with focus on performance.',
      image: qualityAssurance,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.title}>Development</div>
      <ServiceItem items={items} message={message} />
    </div>
  );
};

export default Development;
