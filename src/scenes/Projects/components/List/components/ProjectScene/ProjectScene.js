import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import styles from './ProjectScene.module.scss';

const ProjectScene = ({ link, preview, reversed, review, tags, title }) => {
  return (
    <div className={`${styles.container} ${reversed ? styles.reversed : ''}`}>
      <div className={styles.preview}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Img fluid={preview.childImageSharp.fluid} />
        </a>
      </div>
      <div className={styles.description}>
        <div className={styles.tags}>{tags}</div>
        <div className={styles.title}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </div>
        <div className={styles.descriptionLink}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            More info
          </a>
        </div>
        <div className={styles.review}>
          <div className={styles.avatar}>
            <Img fluid={review.avatar.childImageSharp.fluid} />
          </div>
          <div className={styles.reviewContent}>
            <div className={styles.reviewText}>{review.text}</div>
            <div className={styles.reviewAuthor}>{review.author}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectScene.propTypes = {
  link: PropTypes.string,
  preview: PropTypes.string,
  reversed: PropTypes.bool,
  review: PropTypes.string,
  tags: PropTypes.string,
  title: PropTypes.string,
};

export default ProjectScene;
