/* eslint-disable react/forbid-prop-types */
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import SlideHover from '@/components/SlideHover';

import styles from './ProjectScene.module.scss';

const ProjectScene = ({
  link,
  linkTitle,
  preview,
  reversed,
  review,
  tags,
  title,
}) => {
  return (
    <>
      <div className={`${styles.preview} ${reversed ? styles.reversed : ''}`}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Img fluid={preview.childImageSharp.fluid} draggable={false} />
          <span className={styles.hiddenTitle}>{title}</span>
        </a>
      </div>
      <div className={`${styles.description} ${reversed ? styles.reversed : ''}`}>
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
            <Img fluid={review.avatar.childImageSharp.fluid} draggable={false} />
          </div>
          <div className={styles.reviewContent}>
            <div className={styles.reviewText}>{review.text}</div>
            <div className={styles.reviewAuthor}>{review.author}</div>
          </div>
        </div>
      </div>
    </>
  );
};
ProjectScene.propTypes = {
  link: PropTypes.string.isRequired,
  linkTitle: PropTypes.string.isRequired,
  preview: PropTypes.object.isRequired,
  reversed: PropTypes.bool.isRequired,
  review: PropTypes.object.isRequired,
  tags: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // xys: PropTypes.any.isRequired,
};
export default ProjectScene;
