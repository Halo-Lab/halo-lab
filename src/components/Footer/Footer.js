import React from 'react';
import { ReactSVG } from 'react-svg';

import { useFooterAssets } from '@hooks/queries';

import styles from './Footer.module.scss';

const Footer = () => {
  const { github, npm, instagram, behance, dribbble } = useFooterAssets();
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
            <ReactSVG src={github.publicURL} />
          </a>
        </li>
        <li>
          <a
            href="https://www.npmjs.com/~halolab"
            target="_blank"
            rel="noopener noreferrer"
          >
            NPM
            <ReactSVG src={npm.publicURL} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/halolabteam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
            <ReactSVG src={instagram.publicURL} />
          </a>
        </li>
        <li>
          <a
            href="https://www.behance.net/halolab"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
            <ReactSVG src={behance.publicURL} />
          </a>
        </li>
        <li>
          <a
            href="https://dribbble.com/halolab"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
            <ReactSVG src={dribbble.publicURL} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
