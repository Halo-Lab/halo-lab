import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { useProjectsAssets } from '@hooks/queries';
import List from './components/List';
import Others from './components/Others';

import styles from './Projects.module.scss';

const Projects = ({ title, navigation }) => {
  const { corel, mobalytics, udemy, auth, jbl, ...listAssets } = useProjectsAssets();
  const othersAssets = { corel, mobalytics, udemy, auth, jbl };

  return (
    <Fragment>
      <h1 className={styles.title}>{title}</h1>
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
