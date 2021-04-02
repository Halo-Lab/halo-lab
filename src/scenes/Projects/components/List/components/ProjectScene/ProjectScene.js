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
  review,
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

        <div className={styles.review}>
          <div className={styles.avatar}>
            <Img
              fluid={review.avatar.childImageSharp.fluid}
              draggable={false}
            />
          </div>
          <div className={styles.reviewContent}>
            <div className={styles.reviewText}>{review.text}</div>
            <div className={styles.reviewAuthor}>{review.author}</div>
          </div>
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
  review: PropTypes.object,
  tags: PropTypes.string,
  title: PropTypes.string,
  alt: PropTypes.string,
  imgTitle: PropTypes.string,
  xys: PropTypes.any,
};
export default ProjectScene;
