import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Description.module.scss';

const Description = ({ data }) => {
  const { content, technologies, excerpt, companies, link } = data;

  return (
    <div className={styles.projectDescription}>
      <div className={styles.container}>
        <p className={styles.technologies}>{technologies.join(', ')}</p>

        <div className={styles.flexWrap}>
          <h3 className={styles.excerpts}>{excerpt}</h3>

          <div className={styles.wrapper}>
            <p className={styles.content}>{content}</p>
            <div className={styles.line}></div>

            <ul className={styles.companiesList}>
              {companies.map(({ sourceImage, text, direction }) => {
                let cn = classNames(styles.companyItem, {
                  [styles.directionCol]: direction == 'column',
                });
                return (
                  <li className={cn} key={text}>
                    <div>
                      <img src={sourceImage} alt={text} />
                    </div>
                    <p className={styles.companyTitle}>{text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className={styles.moreInfo}>
          <a
            className={styles.moreInfoLink}
            href={`http://${link}`}
            target="_blank"
          >
            {link}
          </a>
        </div>
      </div>
    </div>
  );
};

Description.propTypes = {
  data: PropTypes.object,
};

export default Description;
