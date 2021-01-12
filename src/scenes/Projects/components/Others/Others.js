/* eslint-disable react/forbid-prop-types */
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Others.module.scss';

const Others = ({ auth, kklLuzern, udemy }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>And</span> <br />
        <span>others</span>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <img src={auth.publicURL} alt="partner logotype" />
        </li>
        <li className={styles.item}>
          <img src={udemy.publicURL} alt="partner logotype" loading="lazy" />
        </li>
        <li className={styles.item}>
          <img src={kklLuzern.publicURL} alt="partner logotype" loading="lazy" />
        </li>
        <li className={styles.item}>
          <Link to="/portfolio" className={styles.link}>
            <span className={styles.linkText}>
              View
              <br />
              All
              <br />
              Cases
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

Others.propTypes = {
  auth: PropTypes.object.isRequired,
  kklLuzern: PropTypes.object.isRequired,
  udemy: PropTypes.object.isRequired,
};

export default Others;
