import React from 'react';
import PropTypes from 'prop-types';

import styles from './Info.module.scss';

const getSrc = source => {
  const result =
    source.childImageSharp.fluid.srcWebp || source.childImageSharp.fluid.src;

  return result;
};

const Info = ({
  clutchBackground,
  dribbbleBackground,
  upworkBackground,
  clutchLogotype,
  dribbbleLogotype,
  upworkLogotype,
}) => {
  const items = [
    {
      link: '#',
      icon: upworkLogotype,
      image: upworkBackground,
      classes: styles.upwork,
      textStrings: ['Best', 'Design Agency', '2018 in Ukraine'],
    },
    {
      link: '#',
      icon: dribbbleLogotype,
      image: dribbbleBackground,
      classes: styles.dribbble,
      textStrings: ['Top Trending', 'Team with 3m', 'Total Views'],
    },
    {
      link: '#',
      icon: clutchLogotype,
      image: clutchBackground,
      classes: styles.clutch,
      textStrings: ['4.9/5', 'Average Rating', 'by Our Clients'],
    },
  ];

  return (
    <div className={styles.container}>
      {items.map(({ link, icon, image, classes, textStrings }, index) => {
        const imageSrc = getSrc(image);

        return (
          <div key={index} className={styles.cardWrapper}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundImage: `url('${imageSrc}')`,
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

Info.propTypes = {
  clutchBackground: PropTypes.object,
  dribbbleBackground: PropTypes.object,
  upworkBackground: PropTypes.object,
  clutchLogotype: PropTypes.object,
  dribbbleLogotype: PropTypes.object,
  upworkLogotype: PropTypes.object,
};

export default Info;
