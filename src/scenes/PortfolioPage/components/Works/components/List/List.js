import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import styles from './List.module.scss';

const List = ({ icon, items }) => {
  const STEP_VALUE = 8;
  const [numberOfRendered, setNumberOfRendered] = useState(STEP_VALUE);
  const handleSetNumberOfRendered = () => {
    setNumberOfRendered(numberOfRendered + STEP_VALUE);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {items.map((item, index) => {
          return numberOfRendered > index ? (
            <li
              key={item.url}
              className={styles.item}
              data-automation="dribble-shots"
            >
              <a
                href={item.url}
                title={item.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img fluid={item?.localCover?.childImageSharp.fluid} />
              </a>
            </li>
          ) : null;
        })}
      </ul>
      <div className={styles.buttonWrapper}>
        {numberOfRendered >= items.length ? (
          <a
            href="https://dribbble.com/halolab"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            SEE ALL
            <img
              src={icon.publicURL}
              alt="arrow down icon"
              loading="lazy"
              className={styles.icon}
            />
          </a>
        ) : (
          <button className={styles.button} onClick={handleSetNumberOfRendered}>
            INSPIRE MORE
            <img
              src={icon.publicURL}
              alt="arrow down icon"
              loading="lazy"
              className={styles.icon}
            />
          </button>
        )}
      </div>
    </div>
  );
};

List.propTypes = {
  icon: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.object),
};

export default List;
