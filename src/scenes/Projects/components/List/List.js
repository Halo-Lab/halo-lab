import React, { Fragment } from 'react';
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
  kickstarter,
  huffpost,
}) => {
  const items = [
    {
      id: 0,
      link:
        'https://www.behance.net/gallery/65940547/Primary-Smart-Bedding-Website',
      linkTitle: 'more info',
      preview: preview1,
      tags: 'UX, UI, Illustrations, Icons',
      title: 'Reinvented bedding cutting price for 50%',
      alt: 'Primary Smart Bedding Website',
      imgTitle: 'Primary Smart Bedding Website',
      review: {
        avatar: avatar1,
        author: 'Marshall Haas, CEO',
        text: 'Unwavering expertise!',
      },
      partners: [mashable, kickstarter, huffpost],
    },
    {
      id: 1,
      link:
        'https://www.behance.net/gallery/66754531/Mobalytics-Game-Analytics-Platform-Website',
      linkTitle: 'more info',
      preview: preview2,
      tags: 'Analytics, UX, UI, Icons, Front-end',
      title: 'Game Analytics wins TechCrunch Disrupt & Raise $2.6M',
      alt: 'Mobalytics. Game Analytics Platform Website',
      imgTitle: 'Mobalytics. Game Analytics Platform Website',
      review: {
        avatar: avatar2,
        author: 'Bogdan Suchyk, CEO',
        text: 'Pro and creative!',
      },
      partners: [forbes, techcrunch, vcRu, angellist],
    },
    {
      id: 2,
      link:
        'https://www.behance.net/gallery/70303073/Glance-Clock-First-Smart-Clock',
      linkTitle: 'coming soon',
      preview: preview3,
      tags: 'Analytics, UX, UI, Front-end',
      title: 'Indiegogo superstar smart clock which ease your life',
      alt: 'Glance Clock — First Smart Clock',
      imgTitle: 'Glance Clock — First Smart Clock',
      review: {
        avatar: avatar3,
        author: 'Anton Glance, CEO',
        text: 'They know what to do!',
      },
      partners: [forbes, techcrunch, mashable, indiegogo],
    },
  ];

  return (
    <Fragment>
      {items.map((item, index) => {
        const isReversed = !((index + 1) % 2);
        const { id, partners, ...sceneProperties } = item;

        return (
          <div key={id} className={styles.item}>
            <ProjectScene {...sceneProperties} reversed={isReversed} />
            <Partners items={partners} reversed={isReversed} />
          </div>
        );
      })}
    </Fragment>
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
  kickstarter: PropTypes.object,
  huffpost: PropTypes.object,
};

export default List;
