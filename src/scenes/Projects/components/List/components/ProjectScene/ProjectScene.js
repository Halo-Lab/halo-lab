import React, { Fragment } from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styles from './ProjectScene.module.scss';
import SlideHover from '@components/SlideHover';

const ProjectScene = ({
  link,
  linkTitle,
  preview,
  reversed,
  technologies,
  tags,
  title,
  alt,
  imgTitle,
}) => {
  return (
    <Fragment>
      <div className={`${styles.preview} ${reversed ? styles.reversed : ''}`}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Img
            fluid={preview.childImageSharp.fluid}
            draggable={false}
            alt={alt}
            title={imgTitle}
          />
          <span className={styles.hiddenTitle}>{title}</span>
        </a>
      </div>
      <div
        className={`${styles.description} ${reversed ? styles.reversed : ''}`}
      >
        <div className={styles.tags}>{tags}</div>
        <div className={styles.title}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </div>

        <div className={styles.descriptionLink}>
          <SlideHover>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {linkTitle}
            </a>
          </SlideHover>
        </div>

        <div className={styles.technologies}>
          {technologies.map(({name, icon}, index) => (
            <li key={index} className={styles.technologiesItem}>
              <img src={icon.publicURL}
                   alt="technologies item icon"
                   loading="lazy"
                   className={styles.technologyIcon}
              />
              <div className={styles.technologyName}>{name}</div>
            </li>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
ProjectScene.propTypes = {
  link: PropTypes.string,
  linkTitle: PropTypes.string,
  preview: PropTypes.object,
  reversed: PropTypes.bool,
  technologies: PropTypes.arrayOf(PropTypes.object),
  tags: PropTypes.string,
  title: PropTypes.string,
  alt: PropTypes.string,
  imgTitle: PropTypes.string,
  xys: PropTypes.any,
};
export default ProjectScene;
