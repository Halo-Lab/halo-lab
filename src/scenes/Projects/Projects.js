import React from 'react';
import PropTypes from 'prop-types';

import { useProjectsAssets } from '@hooks/queries';
import List from './components/List';
import Others from './components/Others';

import styles from './Projects.module.scss';

const Projects = ({ title, navigation }) => {
  const { jackAndJones, kklLuzern, udemy, ...listAssets } = useProjectsAssets();
  const othersAssets = { jackAndJones, kklLuzern, udemy };

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <List {...listAssets} />

      {navigation ? <Others {...othersAssets} /> : null}
    </div>
  );
};

Projects.propTypes = {
  navigation: PropTypes.bool,
  title: PropTypes.string,
};

export default Projects;
