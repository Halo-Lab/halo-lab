import React from 'react';

import Behance from '../../assets/images/brands/behance.inline.svg';
import Dribbble from '../../assets/images/brands/dribbble.inline.svg';
import Github from '../../assets/images/brands/github.inline.svg';
import Instagram from '../../assets/images/brands/instagram.inline.svg';
import NPM from '../../assets/images/brands/npm.inline.svg';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={`oldPageWrapper ${styles.container}`}>
      <div className={styles.logotype}>
        With Love from <b>Halo Lab</b>
      </div>
      <ul className={styles.socials}>
        <li>
          <a
            href="https://github.com/Halo-Lab"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
            <Github />
          </a>
        </li>
        <li>
          <a
            href="https://www.npmjs.com/~halolab"
            target="_blank"
            rel="noopener noreferrer"
          >
            NPM
            <NPM />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/halolabteam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
            <Instagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.behance.net/halolab"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
            <Behance />
          </a>
        </li>
        <li>
          <a
            href="https://dribbble.com/halolab"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
            <Dribbble />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
