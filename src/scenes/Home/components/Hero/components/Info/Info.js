import React, { useContext } from 'react';

import { GlobalContext } from '@contexts';

import styles from './Info.module.scss';

const Info = () => {
  const { imagesAPI } = useContext(GlobalContext);
  const images = imagesAPI.get([
    'cards/upwork-logo.svg',
    'cards/dribbble-logo.svg',
    'cards/clutch-mini-logo.svg',
  ]);

  const items = [
    {
      link: '#',
      image: images['cards/upwork-logo.svg'],
      classes: styles.upwork,
      textStrings: ['Best', 'Design Agency', '2018 in Ukraine'],
    },
    {
      link: '#',
      image: images['cards/dribbble-logo.svg'],
      classes: styles.dribbble,
      textStrings: ['Top Trending', 'Team with 3m', 'Total Views'],
    },
    {
      link: '#',
      image: images['cards/clutch-mini-logo.svg'],
      classes: styles.clutch,
      textStrings: ['4.9/5', 'Average Rating', 'by Our Clients'],
    },
  ];

  return (
    <div className={styles.container}>
      {items.map(({ link, image, classes, textStrings }, index) => {
        return (
          <div key={index} className={styles.cardWrapper}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.card} ${classes}`}
            >
              <div className={styles.cardBody}>
                <img src={image.url} alt={image.name} />
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
