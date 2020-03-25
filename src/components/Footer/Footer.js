import React from 'react';

import styles from './Footer.module.scss';
import Twitter from '../../assets/images/brands/twitter.inline.svg';
import Dribbble from '../../assets/images/brands/dribbble.inline.svg';
import Facebook from '../../assets/images/brands/facebook.inline.svg';
import Instagram from '../../assets/images/brands/instagram.inline.svg';
import Behance from '../../assets/images/brands/behance.inline.svg';

const Footer = () => {
  let socials = [
    { url: 'https://twitter.com/halolabteam', img: Twitter },
    { url: 'https://ig.com/halolabteam', img: Instagram },
    { url: 'https://fb.com/halolabteam', img: Facebook },
    { url: 'https://bh.com/halolabteam', img: Behance },
    { url: 'https://dbbbbbbbb.com/halolabteam', img: Dribbble },
  ];

  return (
    <div className={`pageWrapper ${styles.container}`}>
      <div className={styles.logotype}>
        With Love from <b>Halo Lab</b>
      </div>
      <ul className={styles.socials}>
        {socials.map(social => {
          return (
            <li key={social.url}>
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <social.img />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
