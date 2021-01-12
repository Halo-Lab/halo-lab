import PropTypes from 'prop-types';
import React from 'react';

import { useProjectsAssets } from '@/hooks/queries';

import List from './components/List';
import Others from './components/Others';

import styles from './Projects.module.scss';

const Projects = ({ title, navigation }) => {
  const { auth, kklLuzern, udemy, ...listAssets } = useProjectsAssets();
  const othersAssets = { auth, kklLuzern, udemy };

  return (
    <>
      <div className={styles.title}>{title}</div>
      <List {...listAssets} />

      {navigation ? <Others {...othersAssets} /> : null}
    </>
  );
};

Projects.propTypes = {
  navigation: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Projects;
