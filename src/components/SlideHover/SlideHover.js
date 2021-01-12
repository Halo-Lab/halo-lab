import PropTypes from 'prop-types';
import React from 'react';

import styles from './SlideHover.module.scss';

const ProjectScene = ({ children }) => {
  return <div className={styles.descriptionLink}>{children}</div>;
};
ProjectScene.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ProjectScene;
