import React from 'react';
import PropTypes from 'prop-types';

import Partners from './components/Partners';
import ProjectScene from './components/ProjectScene';

import styles from './List.module.scss';

const List = ({
  preview1,
  preview2,
  preview3,
  avatar1,
  avatar2,
  avatar3,
  angellist,
  forbes,
  indiegogo,
  mashable,
  techcrunch,
  vcRu,
}) => {
  const items = [
    {
      id: 0,
      link:
        'https://www.behance.net/gallery/65940547/Primary-Smart-Bedding-Website',
      preview: preview1,
      tags: 'UX, UI, Illustrations, Icons',
      title: 'Reinvented bedding cutting price for 50%',
      review: {
        avatar: avatar1,
        author: 'Marshall Haas, CEO',
        text: 'Unwavering expertise!',
      },
      partners: [forbes, mashable, indiegogo],
    },
    {
      id: 1,
      link:
        'https://www.behance.net/gallery/66754531/Mobalytics-Game-Analytics-Platform-Website',
      preview: preview2,
      tags: 'Analytics, UX, UI, Icons, Front-end',
      title: 'Game Analytics wins TechCrunch Disrupt & Raise $2.6M',
      review: {
        avatar: avatar2,
        author: 'Bogdan Suchyk, CEO',
        text: 'Professional and creative!',
      },
      partners: [forbes, techcrunch, vcRu, angellist],
    },
    {
      id: 2,
      link:
        'https://www.behance.net/gallery/70303073/Glance-Clock-First-Smart-Clock',
      preview: preview3,
      tags: 'Analytics, UX, UI, Front-end',
      title: 'Indiegogo superstar smart clock which ease your life',
      review: {
        avatar: avatar3,
        author: 'Anton Glance, CEO',
        text: 'They know what to do!',
      },
      partners: [forbes, techcrunch, mashable, indiegogo],
    },
  ];

  return (
    <ul className={styles.container}>
      {items.map((item, index) => {
        const isReversed = !((index + 1) % 2);
        const { id, partners, ...sceneProperties } = item;

        return (
          <li key={id} className={styles.item}>
            <ProjectScene {...sceneProperties} reversed={isReversed} />
            <Partners items={partners} reversed={isReversed} />
          </li>
        );
      })}
    </ul>
  );
};

List.propTypes = {
  preview1: PropTypes.object,
  preview2: PropTypes.object,
  preview3: PropTypes.object,
  avatar1: PropTypes.object,
  avatar2: PropTypes.object,
  avatar3: PropTypes.object,
  angellist: PropTypes.object,
  forbes: PropTypes.object,
  indiegogo: PropTypes.object,
  mashable: PropTypes.object,
  techcrunch: PropTypes.object,
  vcRu: PropTypes.object,
};

export default List;
