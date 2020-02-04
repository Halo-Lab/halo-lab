import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { GlobalContext } from '@contexts';
import { useSiteMetadata } from '@hooks/queries';

import styles from './Block.module.scss';

const Block = ({ banner, message }) => {
  const metadata = useSiteMetadata();

  const { imagesAPI } = useContext(GlobalContext);
  const images = imagesAPI.get([
    'arrow-down.svg',
    'services/design/services-design-button-img.png',
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.infoMessage}>{message.text}</p>
        <a href={`mailto:${metadata.email}`} className={styles.infoLink}>
          {message.link}
        </a>
      </div>

      {banner ? (
        <div className={styles.banner}>
          <a className={styles.bannerLink} href="#">
            <img
              className={styles.bannerImage}
              src={images['services/design/services-design-button-img.png'].url}
              alt={
                images['services/design/services-design-button-img.png'].name
              }
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
      ) : null}
    </div>
  );
};

Block.propTypes = {
  banner: PropTypes.bool,
  message: PropTypes.object,
};

export default Block;
