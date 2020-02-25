import React, { useContext } from 'react';

import { GlobalContext } from '@contexts';

import styles from './Footer.module.scss';

const Footer = () => {
  const { imagesAPI } = useContext(GlobalContext);
  const images = imagesAPI.get([
    'logo.svg',
    'socials/behance.svg',
    'socials/dribbble.svg',
    'socials/facebook.svg',
    'socials/instagram.svg',
    'socials/twitter.svg',
  ]);

  const socials = [
    {
      href: 'https://twitter.com/halolabteam',
      image: images['socials/twitter.svg'],
    },
    {
      href: 'https://www.instagram.com/halolabteam/',
      image: images['socials/instagram.svg'],
    },
    {
      href: 'https://www.facebook.com/halolabteam/',
      image: images['socials/facebook.svg'],
    },
    {
      href: 'https://www.behance.net/halolab',
      image: images['socials/behance.svg'],
    },
    {
      href: 'https://dribbble.com/halolab',
      image: images['socials/dribbble.svg'],
    },
  ];

  return (
    <div className={`pageWrapper ${styles.container}`}>
      <ul className={styles.socials}>
        {socials.map(({ href, image }) => {
          return (
            <li key={href}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <img src={image.url} alt={image.name} />
              </a>
            </li>
          );
        })}
      </ul>
      <div className={styles.logotype}>
        <img src={images['logo.svg'].url} alt={images['logo.svg'].name} />
        <span>With Love from Halo Lab</span>
      </div>
    </div>
  );
};

export default Footer;
