import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './Info.module.scss';

const Info = ({ clutchLaurel, dribbbleLaurel, upworkLaurel }) => {
  const items = [
    {
      icon: upworkLaurel,
      iconAlt: 'Upwork logo',
      classes: styles.upwork,
      textStrings: 'Awarded as Best Design & Creative',
    },
    {
      icon: dribbbleLaurel,
      iconAlt: 'Dribbble logo',
      classes: styles.dribbble,
      textStrings: 'We regularly hit Top-5 Trending Teams',
    },
    {
      icon: clutchLaurel,
      iconAlt: 'Clutch logo',
      classes: styles.clutch,
      textStrings: 'Top User Experience Agency',
    },
  ];

  return (
    <>
      {items.map(({ icon, textStrings, classes, iconAlt }) => {
        return (
          <div key={iconAlt} className={`${styles.item} ${classes}`}>
            <img className={styles.images} src={icon.publicURL} alt={iconAlt} />
            <span className={styles.text}>{textStrings}</span>
          </div>
        );
      })}
    </>
  );
};

Info.propTypes = {
  clutchLaurel: PropTypes.object,
  dribbbleLaurel: PropTypes.object,
  upworkLaurel: PropTypes.object,
};

export default Info;
