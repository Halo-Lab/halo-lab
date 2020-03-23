import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { useProjectsAssets } from '@hooks/queries';
import List from './components/List';
import Others from './components/Others';

import styles from './Projects.module.scss';

const Projects = ({ title, navigation }) => {
  const { auth, kklLuzern, udemy, ...listAssets } = useProjectsAssets();
  const othersAssets = { auth, kklLuzern, udemy };

  return (
    <Fragment>
      <div className={styles.title}>{title}</div>
      <List {...listAssets} />

      {navigation ? <Others {...othersAssets} /> : null}
    </Fragment>
  );
};

Projects.propTypes = {
  navigation: PropTypes.bool,
  title: PropTypes.string,
};

export default Projects;
