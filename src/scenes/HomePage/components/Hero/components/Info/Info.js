/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import { v4 as uuid } from 'uuid';

import styles from './Info.module.scss';

const Info = ({ clutchLaurel, dribbbleLaurel, upworkLaurel }) => {
  const items = [
    {
      icon: upworkLaurel,
      classes: styles.upwork,
      textStrings: 'Awarded as Best Design & Creative',
    },
    {
      icon: dribbbleLaurel,
      classes: styles.dribbble,
      textStrings: 'We regullarly hit Top-5 Trending Teams',
    },
    {
      icon: clutchLaurel,
      classes: styles.clutch,
      textStrings: 'Top User Experience Agency',
    },
  ];

  return (
    <>
      {items.map(({ icon, textStrings, classes }) => {
        return (
          <div key={uuid()} className={`${styles.item} ${classes}`}>
            <img className={styles.images} src={icon.publicURL} alt="icon" />
            <span className={styles.text}>{textStrings}</span>
          </div>
        );
      })}
    </>
  );
};

Info.propTypes = {
  clutchLaurel: PropTypes.object.isRequired,
  dribbbleLaurel: PropTypes.object.isRequired,
  upworkLaurel: PropTypes.object.isRequired,
};

export default Info;
