import React, { useContext } from 'react';
import { Link } from 'gatsby';

import { GlobalContext } from '@contexts';

import styles from './Others.module.scss';

const Others = () => {
  const { imagesAPI } = useContext(GlobalContext);
  const images = imagesAPI.get([
    'jackandjones.svg',
    'udemy.svg',
    'kkl-luzern.svg',
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>And</span> <br />
        <span>others</span>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <img
            src={images['jackandjones.svg'].url}
            alt={images['jackandjones.svg'].name}
          />
        </li>
        <li className={styles.item}>
          <img src={images['udemy.svg'].url} alt={images['udemy.svg'].name} />
        </li>
        <li className={styles.item}>
          <img
            src={images['kkl-luzern.svg'].url}
            alt={images['kkl-luzern.svg'].name}
          />
        </li>
        <li className={styles.item}>
          <Link to="/portfolio" className={styles.link}>
            <span>
              View
              <br />
              All
              <br />
              Cases
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Others;
