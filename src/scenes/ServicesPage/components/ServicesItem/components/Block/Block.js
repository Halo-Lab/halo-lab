import PropTypes from 'prop-types';
import React from 'react';

import { useSiteMetadata } from '@/hooks/queries';

import styles from './Block.module.scss';

const Block = ({ message }) => {
  const metadata = useSiteMetadata();

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.infoMessage}>{message.text}</p>
        <a href={`mailto:${metadata.email}`} className={styles.infoLink}>
          {message.link}
        </a>
      </div>
    </div>
  );
};

Block.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  message: PropTypes.object.isRequired,
};

export default Block;
