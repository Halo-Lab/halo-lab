import React from 'react';

import { useHeroCards } from '@hooks/queries';

import styles from './Info.module.scss';

const Info = () => {
  const {
    background1,
    background2,
    background3,
    icon1,
    icon2,
    icon3,
  } = useHeroCards();

  const items = [
    {
      link: '#',
      icon: icon3,
      image: background3,
      classes: styles.upwork,
      textStrings: ['Best', 'Design Agency', '2018 in Ukraine'],
    },
    {
      link: '#',
      icon: icon2,
      image: background2,
      classes: styles.dribbble,
      textStrings: ['Top Trending', 'Team with 3m', 'Total Views'],
    },
    {
      link: '#',
      icon: icon1,
      image: background1,
      classes: styles.clutch,
      textStrings: ['4.9/5', 'Average Rating', 'by Our Clients'],
    },
  ];

  return (
    <div className={styles.container}>
      {items.map(({ link, icon, image, classes, textStrings }, index) => {
        return (
          <div key={index} className={styles.cardWrapper}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundImage: `url('${image.childImageSharp.fluid.src}')`,
              }}
              className={`${styles.card} ${classes}`}
            >
              <div className={styles.cardBody}>
                <img src={icon.publicURL} alt={'icon'} />
                <div>
                  {textStrings.map((item, index) => {
                    return (
                      <span key={index}>
                        {item} <br />
                      </span>
                    );
                  })}
                </div>
              </div>
            </a>
          </div>
        );
      })}

      <div className={`${styles.circle} ${styles.circleSm1}`}></div>
      <div className={`${styles.circle} ${styles.circleSm2}`}></div>
      <div className={`${styles.circle} ${styles.circleMd}`}></div>
      <div className={`${styles.circle} ${styles.circleLg}`}></div>
    </div>
  );
};

export default Info;
