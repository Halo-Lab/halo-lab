import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

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
    <Fragment>
      {items.map(({ icon, textStrings, classes }, index) => {
        return (
          <div key={index} className={`${styles.item} ${classes}`}>
            <img className={styles.images} src={icon.publicURL} alt={'icon'} />
            <span className={styles.text}>{textStrings}</span>
          </div>
        );
      })}
    </Fragment>
  );
};

Info.propTypes = {
  clutchLaurel: PropTypes.object,
  dribbbleLaurel: PropTypes.object,
  upworkLaurel: PropTypes.object,
};

export default Info;
