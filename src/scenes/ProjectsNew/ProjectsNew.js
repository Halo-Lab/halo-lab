import React from 'react';
import PropTypes from 'prop-types';

import List from './components/List';
import Others from './components/Others';

import styles from './ProjectsNew.module.scss';

const ProjectsNew = ({ title, navigation }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <List />

      {navigation ? <Others /> : null}
    </div>
  );
};

ProjectsNew.propTypes = {
  navigation: PropTypes.bool,
  title: PropTypes.string,
};

export default ProjectsNew;
