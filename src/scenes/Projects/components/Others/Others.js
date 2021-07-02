import React from 'react';
import { Link } from 'gatsby';

import styles from './Others.module.scss';
import Corel from '../../../../assets/images/brands/corel.inline.svg';
import Mobalytics from '../../../../assets/images/brands/mobalytics.inline.svg';
import Udemy from '../../../../assets/images/brands/udemy-new.inline.svg';
import Auth from '../../../../assets/images/brands/auth0.inline.svg';
import Jbl from '../../../../assets/images/brands/jbl.inline.svg';


const Others = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>And a lot </span>
        <br />
        <span>more we help </span>
        <br />
        <span>to achieve</span>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div>
            <p className={styles.listItemDescription}>
              The future vision
              <br />
              for WinZip family
              <br />
              products
            </p>
            <a href="https://www.corel.com/" target="_blank" rel="noopener noreferrer">
              <Corel />
            </a>
          </div>
        </li>
        <li className={styles.item}>
          <div>
            <p className={styles.listItemDescription}>
              Game analytics wins
              <br />
              TechCrunch Disrupt
              <br />
              & raise $2.6M
            </p>
            <a href="https://mobalytics.gg/" target="_blank" rel="noopener noreferrer">
              <Mobalytics />
            </a>
          </div>
        </li>
        <li className={styles.item}>
          <div>
            <p className={styles.listItemDescription}>
              Exploring new
              <br />
              course player
              <br />
              experience
            </p>
            <a href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer">
              <Udemy />
            </a>
          </div>
        </li>
        <li className={styles.item}>
          <div>
            <p className={styles.listItemDescription}>
              Using our expertise
              <br />
              to boost Auth0
              <br />
              processes
            </p>
            <a href="https://auth0.com/" target="_blank" rel="noopener noreferrer">
              <Auth />
            </a>
          </div>
        </li>
        <li className={styles.item}>
          <div>
            <p className={styles.listItemDescription}>
              Promo campaign for
              <br />
              the hi-end audio
              <br />
              lovemark brand
            </p>
            <a href="https://jbl.com/" target="_blank" rel="noopener noreferrer">
              <Jbl />
            </a>
          </div>
        </li>
        <li className={styles.item}>
          <Link to="/contacts" className={styles.link}>
            <span className={styles.linkText}>
              Want
              <br />
              to be
              <br />
              here?
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Others;
