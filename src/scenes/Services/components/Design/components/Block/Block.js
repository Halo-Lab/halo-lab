import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { GlobalContext } from '@contexts';

import styles from './Block.module.scss';

const Block = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
        }
      }
    }
  `);
  const { imagesAPI } = useContext(GlobalContext);
  const images = imagesAPI.get([
    'arrow-down.svg',
    'services/desing/services-design-button-img.png',
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.infoMessage}>
          We make the collaboration of people and interface more intensive and
          exiting.
        </p>
        <a
          href={`mailto:${data.site.siteMetadata.email}`}
          className={styles.infoLink}
        >
          NEED A DESIGNER?
        </a>
      </div>

      <div className={styles.banner}>
        <a className={styles.bannerLink} href="#">
          <img
            className={styles.bannerImage}
            src={images['services/desing/services-design-button-img.png'].url}
            alt={images['services/desing/services-design-button-img.png'].name}
            draggable="false"
          />
          <span className={styles.bannerMessage}>
            Download design presentation
          </span>
          <img
            className={styles.bannerIcon}
            src={images['arrow-down.svg'].url}
            alt={images['arrow-down.svg'].name}
          />
        </a>
      </div>
    </div>
  );
};

export default Block;
