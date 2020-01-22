import React, { useContext } from 'react';

import ServicesItem from '@scenes/Services/components/ServicesItem';
import { GlobalContext } from '@contexts';

import styles from './Development.module.scss';

const Development = () => {
  const { imagesAPI } = useContext(GlobalContext);
  const images = imagesAPI.get([
    'services/dev/develop.svg',
    'services/dev/app.svg',
    'services/dev/project.svg',
    'services/dev/qa.svg',
  ]);

  const message = {
    text: 'Front-end & back-end expertise from development to delivery.',
    link: 'NEED A DEVELOPER?',
  };

  const items = [
    {
      title: 'Web Development',
      text: 'We provide back-end and front-end development to your needs.',
      image: images['services/dev/develop.svg'],
    },
    {
      title: 'Hybrid Apps Development',
      text:
        'Effective solutions for iOS and Android platforms with focus on performance.',
      image: images['services/dev/app.svg'],
    },
    {
      title: 'Project Management',
      text:
        'Quality-driven web development according latest technology standards.',
      image: images['services/dev/project.svg'],
    },
    {
      title: 'Quality Assurance',
      text:
        'Effective solutions for iOS and Android platforms with focus on performance.',
      image: images['services/dev/qa.svg'],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.title}>Development</div>
      <ServicesItem banner={false} items={items} message={message} />
    </div>
  );
};

export default Development;
