import React, { Fragment, useRef, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styles from './ProjectScene.module.scss';

const settings = {
  delay: '2s',
  ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
};

function thresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

function debounce(func, wait = 5, immediate = false) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const ProjectScene = ({
  link,
  linkTitle,
  preview,
  reversed,
  review,
  tags,
  title,
}) => {
  const elRef = useRef(null);
  const distanceToTop = useRef(0);
  const startPosition = useRef(0);

  const [smallTranslate, setSmallTranslate] = useSpring(() => ({
    transform: `translate3d(0, 80px, 0)`,
    transition: `transform ${settings.delay} ${settings.ease}`,
  }));

  const [middleTranslate, setMiddleTranslate] = useSpring(() => ({
    transform: `translate3d(0, 120px, 0)`,
    transition: `transform ${settings.delay} ${settings.ease}`,
  }));

  const [bigTranslate, setBigTranslate] = useSpring(() => ({
    transform: `translate3d(0, 160px, 0)`,
    transition: `transform ${settings.delay} ${settings.ease}`,
  }));

  useEffect(() => {
    if (startPositionFlag.current === false && inView) {
      startPositionFlag.current = true;
      startPosition.current = distanceToTop.current;
    }
  }, []);

  const startPositionFlag = useRef(false);
  const coef = useRef(0);

  const [blockRef, inView] = useInView({
    threshold: thresholdList(),
  });

  const getCoef = (distToTop, startPos) => {
    const result = distToTop / startPos;

    if (!startPos || result < 0) {
      return 0;
    }

    if (result > 1) {
      return 1;
    }

    return result;
  };

  const squeezeText = useCallback(() => {
    console.log('render');
    if (inView) {
      distanceToTop.current = elRef.current.getBoundingClientRect().top;
      coef.current = getCoef(distanceToTop.current, startPosition.current);

      setSmallTranslate({
        transform: `translate3d(0, ${80 * coef.current}px, 0)`,
      });

      setMiddleTranslate({
        transform: `translate3d(0, ${120 * coef.current}px, 0)`,
      });

      setBigTranslate({
        transform: `translate3d(0, ${160 * coef.current}px, 0)`,
      });

      if (startPositionFlag.current === false && inView) {
        startPositionFlag.current = true;
        startPosition.current = distanceToTop.current;
      }
    }
  }, [inView]);

  useEffect(() => {
    const squeezeTextDebounced = debounce(squeezeText, 200);
    window.addEventListener('scroll', squeezeTextDebounced);
    return () => window.removeEventListener('scroll', squeezeTextDebounced);
  }, [squeezeText]);

  return (
    <Fragment>
      <animated.div
        ref={blockRef}
        style={middleTranslate}
        className={`${styles.preview} ${reversed ? styles.reversed : ''}`}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Img
            fluid={preview.childImageSharp.fluid}
            loading="eager"
            draggable={false}
          />
          <animated.span style={smallTranslate} className={styles.hiddenTitle}>
            {title}
          </animated.span>
        </a>
      </animated.div>
      <div
        className={`${styles.description} ${reversed ? styles.reversed : ''}`}
      >
        <animated.div
          ref={elRef}
          className={styles.tags}
          style={smallTranslate}
        >
          {tags}
        </animated.div>
        <animated.div className={styles.title} style={middleTranslate}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </animated.div>
        <animated.div className={styles.descriptionLink} style={bigTranslate}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {linkTitle}
          </a>
        </animated.div>
        <animated.div className={styles.review} style={bigTranslate}>
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
        </animated.div>
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
