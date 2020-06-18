import React from 'react';

import styles from './Footer.module.scss';
import Twitter from '../../assets/images/brands/twitter.inline.svg';
import Dribbble from '../../assets/images/brands/dribbble.inline.svg';
import Facebook from '../../assets/images/brands/facebook.inline.svg';
import Instagram from '../../assets/images/brands/instagram.inline.svg';
import Behance from '../../assets/images/brands/behance.inline.svg';

const Footer = () => {
  return (
    <div className={`pageWrapper ${styles.container}`}>
      <div className={styles.logotype}>
        With Love from <b>Halo Lab</b>
      </div>
      <ul className={styles.socials}>
        <li>
          <a
            href="https://twitter.com/halolabteam"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
            <Twitter />
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
            href="https://www.facebook.com/halolabteam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
            <Facebook />
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
