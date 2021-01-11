import React from 'react';
import useBreakpoints from 'use-breakpoints-width';

import { BREAKPOINTS } from '@/constants';
import { useServicesTechnologiesAssets } from '@/hooks/queries';

import List from './components/List';
import Switcher from './components/Switcher';

import styles from './Technologies.module.scss';

const Technologies = () => {
  const { breakpoint } = useBreakpoints();
  const {
    angular,
    cordova,
    css3,
    elasticsearch,
    express,
    html5,
    ionic,
    javascript,
    keystone,
    mongodb,
    mysql,
    nodejs,
    php,
    postgresql,
    pwa,
    reactNative,
    react,
    redis,
    typescript,
    vue,
    wordpress,
  } = useServicesTechnologiesAssets();

  const items = [
    {
      title: 'Front-end',
      items: [
        { title: 'React', image: react },
        { title: 'Angular 7', image: angular },
        { title: 'Vue', image: vue },
        { title: 'HTML5', image: html5 },
        { title: 'CSS3', image: css3 },
        { title: 'JavaScript', image: javascript },
        { title: 'TypeScript', image: typescript },
      ],
    },
    {
      title: 'Back-end',
      items: [
        { title: 'Node JS', image: nodejs },
        { title: 'PHP', image: php },
        { title: 'Express', image: express },
        { title: 'WordPress', image: wordpress },
        { title: 'Keystone', image: keystone },
      ],
    },
    {
      title: 'Mobile',
      items: [
        { title: 'React', image: react },
        { title: 'React Native', image: reactNative },
        { title: 'PWA', image: pwa },
        { title: 'SPA', image: nodejs },
        { title: 'Ionic', image: ionic },
        { title: 'Apache Cordova', image: cordova },
      ],
    },
    {
      title: 'Databases',
      items: [
        { title: 'PostgreSQL', image: postgresql },
        { title: 'MySQL', image: mysql },
        { title: 'Redis', image: redis },
        { title: 'MongoDB', image: mongodb },
        { title: 'Elasticsearch', image: elasticsearch },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Technologies</h2>
      {breakpoint === BREAKPOINTS.MOBILE ? (
        <List items={items} />
      ) : (
        <Switcher items={items} />
      )}
    </div>
  );
};

export default Technologies;
