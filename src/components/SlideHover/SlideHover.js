import React from 'react';
import PropTypes from 'prop-types';
import styles from './SlideHover.module.scss';

const ProjectScene = ({ children, className }) => {
  const componentStyles =
    styles.descriptionLink + (className !== undefined ? ' ' + className : '');

  return <div className={componentStyles}>{children}</div>;
};
ProjectScene.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
};
export default ProjectScene;
