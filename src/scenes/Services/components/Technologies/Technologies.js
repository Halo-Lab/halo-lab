import React, { useContext } from 'react';

import Switcher from './components/Switcher';
import List from './components/List';
import { GlobalContext } from '@contexts';
import { useGetBreakpoint } from '@hooks';

import styles from './Technologies.module.scss';

const Technologies = () => {
  const { breakpoint } = useGetBreakpoint();
  const { imagesAPI } = useContext(GlobalContext);
  const images = imagesAPI.get([
    'services/react.svg',
    'services/angular.svg',
    'services/vue.svg',
    'services/HTML5.svg',
    'services/css3.svg',
    'services/javascript.svg',
    'services/typescript.svg',
    'services/node-js.svg',
    'services/php-logo.svg',
    'services/express.svg',
    'services/wordpress.svg',
    'services/keystone.svg',
    'services/native.svg',
    'services/pwa-logo.svg',
    'services/nodejs.png',
    'services/Ionic.svg',
    'services/cordova.svg',
    'services/PostgreSQL.svg',
    'services/mysql.svg',
    'services/redis-icon.svg',
    'services/mongodb.svg',
    'services/elasticsearch.svg',
  ]);
  const items = [
    {
      title: 'Front-end',
      items: [
        { title: 'React', image: images['services/react.svg'] },
        { title: 'Angular 7', image: images['services/angular.svg'] },
        { title: 'Vue', image: images['services/vue.svg'] },
        { title: 'HTML5', image: images['services/HTML5.svg'] },
        { title: 'CSS3', image: images['services/css3.svg'] },
        { title: 'JavaScript', image: images['services/javascript.svg'] },
        { title: 'TypeScript', image: images['services/typescript.svg'] },
      ],
    },
    {
      title: 'Back-end',
      items: [
        { title: 'Node Js', image: images['services/node-js.svg'] },
        { title: 'PHP', image: images['services/php-logo.svg'] },
        { title: 'Express', image: images['services/express.svg'] },
        { title: 'WordPress', image: images['services/wordpress.svg'] },
        { title: 'Keystone', image: images['services/keystone.svg'] },
      ],
    },
    {
      title: 'Mobile',
      items: [
        { title: 'React', image: images['services/react.svg'] },
        { title: 'React Native', image: images['services/native.svg'] },
        { title: 'PWA', image: images['services/pwa-logo.svg'] },
        { title: 'SPA', image: images['services/nodejs.png'] },
        { title: 'Ionic', image: images['services/Ionic.svg'] },
        { title: 'Apache Cordova', image: images['services/cordova.svg'] },
      ],
    },
    {
      title: 'Databases',
      items: [
        { title: 'PostgreSQL', image: images['services/PostgreSQL.svg'] },
        { title: 'MySQL', image: images['services/mysql.svg'] },
        { title: 'Redis', image: images['services/redis-icon.svg'] },
        { title: 'MongoDB', image: images['services/mongodb.svg'] },
        { title: 'Elasticsearch', image: images['services/elasticsearch.svg'] },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Technologies</h2>
      {breakpoint === 'mobile' ? (
        <List items={items} />
      ) : (
        <Switcher items={items} />
      )}
    </div>
  );
};

export default Technologies;
