import React, { Fragment } from 'react';
import { useSpring, animated } from 'react-spring';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styles from './ProjectScene.module.scss';

const calc = (x, y, reversed, el) => {
  const elParams = el.current.getBoundingClientRect();
  return [
    reversed
      ? (-(y - elParams.height / 2) * 1.35) / 55
      : (-(y - elParams.top - elParams.height / 2) * 1.35) / 55,
    reversed
      ? (x - elParams.left - elParams.width / 2) / 60
      : (x - elParams.width / 2) / 60,
    0.95,
  ];
};
const trans = (x, y, s) => `
  rotateX(${x}deg) rotateY(${y}deg) scale(${s}) translateZ(200px)`;

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
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const elRef = React.useRef(null);

  return (
    <Fragment>
      <div
        className={`${styles.preview} ${reversed ? styles.reversed : ''}`}
        onMouseMove={({ clientX: x, clientY: y }) =>
          set({ xys: calc(x, y, reversed, elRef) })
        }
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        ref={elRef}
      >
        <animated.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ transform: props.xys.interpolate(trans) }}
        >
          <Img fluid={preview.childImageSharp.fluid} draggable={false} />
          <span className={styles.hiddenTitle}>{title}</span>
        </animated.a>
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
