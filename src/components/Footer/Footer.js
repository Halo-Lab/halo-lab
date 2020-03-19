import React from 'react';

import { useFooterAssets } from '@hooks/queries';

import styles from './Footer.module.scss';

const Footer = () => {
  const {
    // logotype,
    behance,
    dribbble,
    facebook,
    instagram,
    twitter,
  } = useFooterAssets();

  const socials = [
    {
      href: 'https://twitter.com/halolabteam',
      image: twitter,
    },
    {
      href: 'https://www.instagram.com/halolabteam/',
      image: instagram,
    },
    {
      href: 'https://www.facebook.com/halolabteam/',
      image: facebook,
    },
    {
      href: 'https://www.behance.net/halolab',
      image: behance,
    },
    {
      href: 'https://dribbble.com/halolab',
      image: dribbble,
    },
  ];

  return (
    <div className={`pageWrapper ${styles.container}`}>
      <div className={styles.logotype}>
        With Love from <b>Halo Lab</b>
      </div>
      <ul className={styles.socials}>
        {socials.map(({ href, image }) => {
          return (
            <li key={href}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <img src={image.publicURL} alt="social icon" loading="lazy" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
