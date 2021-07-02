import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ProjectScene from './components/ProjectScene';

import styles from './List.module.scss';

const List = ({
  preview1,
  preview2,
  preview3,
  preview4,
  preview5,
  figma,
  gatsby,
  laravel,
  nextjs,
  nodejs,
  prismic,
  react,
  strapi,
  threejs,
  vue,
}) => {
  const items = [
    {
      id: 0,
      link:
        'https://mightybuildings.com/',
      linkTitle: 'View project',
      preview: preview1,
      tags: 'Construction, Building, 3D Printing, CAD',
      title: '$40 Million Raised by Mighty Buildings in Series B Funding',
      alt: 'Mighty Buildings — Modern 3D-printed Prefab Homes',
      imgTitle: 'Mighty Buildings — Modern 3D-printed Prefab Homes',
      technologies: [
        { name: 'Figma', icon: figma },
        { name: 'VueJS', icon: vue },
        { name: 'Laravel', icon: laravel },
      ],
    },
    {
      id: 1,
      link:
        '/',
      linkTitle: 'View project',
      preview: preview2,
      tags: 'E-commerce, 3D Builder, Esports',
      title: 'Co-creating Innovation for Esports Apparel Industry Leader',
      alt: 'Raven. Custom Esports Gaming Jerseys. Design & Print',
      imgTitle: 'Raven. Custom Esports Gaming Jerseys. Design & Print',
      technologies: [
        { name: 'Figma', icon: figma },
        { name: 'ReactJS', icon: react },
        { name: 'ThreeJS', icon: threejs },
      ],
    },
    {
      id: 2,
      link:
        'https://secureprivacy.ai/',
      linkTitle: 'View project',
      preview: preview3,
      tags: 'Legal, Privacy, Data, Accounting',
      title: 'Best Usability and Performance by G2 Scoring ',
      alt: 'Data privacy and cookie consent compliance',
      imgTitle: 'Data privacy and cookie consent compliance',
      technologies: [
        { name: 'Figma', icon: figma },
        { name: 'ReactJS', icon: react },
        { name: 'GatsbyJS', icon: gatsby },
        { name: 'PrismicCMS', icon: prismic },
      ],
    },
    {
      id: 3,
      link:
        'https://buecherregister.de/',
      linkTitle: 'View project',
      preview: preview4,
      tags: 'B2C, Content Management, Books',
      title: 'Tailored B2C Portal for Europe Bibliophile Audience',
      alt: 'Central online register for private libraries',
      imgTitle: 'Central online register for private libraries',
      technologies: [
        { name: 'Figma', icon: figma },
        { name: 'ReactJS', icon: react },
        { name: 'NextJS', icon: nextjs },
        { name: 'StrapiCMS', icon: strapi },
      ],
    },
    {
      id: 4,
      link:
        'https://www.mypixhealth.com/',
      linkTitle: 'View project',
      preview: preview5,
      tags: 'Health Care, Telemedicine, Diagnostics',
      title: 'From Zero to MVP for 3 Months of Design and Development',
      alt: 'Urgent Care online Doctors Visits',
      imgTitle: 'Urgent Care online Doctors Visits',
      technologies: [
        { name: 'Figma', icon: figma },
        { name: 'ReactJS', icon: react },
        { name: 'NodeJS', icon: nodejs },
      ],
    },
  ];

  return (
    <Fragment>
      {items.map((item, index) => {
        const isReversed = ((index + 1) % 2);
        const { id, partners, ...sceneProperties } = item;

        return (
          <div key={id} className={styles.item}>
            <ProjectScene {...sceneProperties} reversed={isReversed} />
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
  preview4: PropTypes.object,
  preview5: PropTypes.object,
  figma: PropTypes.object,
  gatsby: PropTypes.object,
  laravel: PropTypes.object,
  nextjs: PropTypes.object,
  nodejs: PropTypes.object,
  prismic: PropTypes.object,
  react: PropTypes.object,
  strapi: PropTypes.object,
  threejs: PropTypes.object,
  vue: PropTypes.object,
};

export default List;
