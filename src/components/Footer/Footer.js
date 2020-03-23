import React from 'react';

// import { useFooterAssets } from '@hooks/queries';

import styles from './Footer.module.scss';
import Twitter from '../../assets/images/brands/twitter.inline.svg';
import Dribbble from '../../assets/images/brands/dribbble.inline.svg';
import Facebook from '../../assets/images/brands/facebook.inline.svg';
import Instagram from '../../assets/images/brands/instagram.inline.svg';
import Behance from '../../assets/images/brands/behance.inline.svg';

const Footer = () => {
  // const { behance, dribbble, facebook, instagram, twitter } = useFooterAssets();
  // const socials = [
  //   {
  //     href: 'https://twitter.com/halolabteam',
  //     image: twitter,
  //   },
  //   {
  //     href: 'https://www.instagram.com/halolabteam/',
  //     image: instagram,
  //   },
  //   {
  //     href: 'https://www.facebook.com/halolabteam/',
  //     image: facebook,
  //   },
  //   {
  //     href: 'https://www.behance.net/halolab',
  //     image: behance,
  //   },
  //   {
  //     href: 'https://dribbble.com/halolab',
  //     image: dribbble,
  //   },
  // ];

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
            <Twitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/halolabteam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/halolabteam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.behance.net/halolab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Behance />
          </a>
        </li>
        <li>
          <a
            href="https://dribbble.com/halolab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Dribbble />
          </a>
        </li>
        {/* {socials.map(({ href, image }) => {
          return (
            <li key={href}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {image}
                <img src={image.publicURL} alt="social icon" loading="lazy" />
              </a>
            </li>
          );
        })} */}
      </ul>
    </div>
  );
};

export default Footer;
