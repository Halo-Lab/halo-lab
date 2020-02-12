import React from 'react';
// import { Link } from 'gatsby';
// import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import List from './components/List';

import styles from './ProjectsNew.module.scss';

const ProjectsNew = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Projects</div>
      <List />
    </div>
  );
};

export default ProjectsNew;
