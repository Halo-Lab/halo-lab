import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import { useSiteMetadata } from '@hooks/queries';

import styles from './PageMessage.module.scss';

const PageMessage = ({ title, message, mail }) => {
  const metadata = useSiteMetadata();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{message}</p>

      {mail ? (
        <p className={styles.description}>
          If you have any additional questions, mail us:{' '}
          <a className={styles.link} href={`mailto:${metadata.email}`}>
            {metadata.email}
          </a>
        </p>
      ) : null}

      <Link className={styles.button} to="/portfolio">
        view projects
      </Link>
    </div>
  );
};

PageMessage.propTypes = {
  mail: PropTypes.bool,
  message: PropTypes.string,
  title: PropTypes.string,
};

export default PageMessage;
