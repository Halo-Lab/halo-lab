import React from 'react';
import PropTypes from 'prop-types';
import styles from './SlideHover.module.scss';

const ProjectScene = ({ children }) => {
  return <div className={styles.descriptionLink}>{children}</div>;
};
ProjectScene.propTypes = {
  children: PropTypes.node,
};
export default ProjectScene;
