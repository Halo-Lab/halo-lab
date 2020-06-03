import React, { Fragment } from 'react';
import { useSpring, animated } from 'react-spring';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styles from './ProjectScene.module.scss';
const calc = (x, y, reversed) => [
  -(y - window.innerWidth / 4) / 100,
  reversed
    ? (x - (window.innerWidth / 4) * 2.8) / 100
    : (x - window.innerWidth / 3) / 100,
  1.05,
];
const trans = (x, y, s) => {
  return `perspective(600px) translateZ(500px) rotateX(${x}deg) rotateY(${y}deg) scale(0.16)`;
};
const ProjectScene = ({
  link,
  linkTitle,
  preview,
  reversed,
  review,
  tags,
  title,
}) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 450, friction: 50 },
  }));
  return (
    <Fragment>
      <animated.div
        className={`${styles.preview} ${reversed ? styles.reversed : ''}`}
        onMouseMove={({ clientX: x, clientY: y }) =>
          set({ xys: calc(x, y, reversed) })
        }
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Img fluid={preview.childImageSharp.fluid} draggable={false} />
          <span className={styles.hiddenTitle}>{title}</span>
        </a>
      </animated.div>
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
          <a href={link} target="_blank" rel="noopener noreferrer">
            {linkTitle}
          </a>
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
  xys: PropTypes.any,
};
export default ProjectScene;
