import React from 'react';
import PropTypes from 'prop-types';

import List from './components/List';
import Others from './components/Others';

import styles from './Projects.module.scss';

const Projects = ({ title, navigation }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <List />

      {navigation ? <Others /> : null}
    </div>
  );
};

Projects.propTypes = {
  navigation: PropTypes.bool,
  title: PropTypes.string,
};

export default Projects;
