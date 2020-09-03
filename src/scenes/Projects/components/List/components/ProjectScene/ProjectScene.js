import React, { Fragment, useRef, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import useBreakpoints from 'use-breakpoints-width';
import { BREAKPOINTS } from '@constants';
import PropTypes from 'prop-types';

import styles from './ProjectScene.module.scss';
import Img from 'gatsby-image';

function thresholdList(size = 10) {
  let thresholds = [];

  for (let i = 1.0; i <= size; i++) {
    let ratio = i / size;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

function debounce(func, wait = 5, immediate = false) {
  let timeout;
  return () => {
    const context = this;
    const args = arguments;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const config = {
  big: 120,
  middle: 106,
  small: 66.6,
  base: 40,
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
  const elRef = useRef(null);
  const distanceToTop = useRef(0);
  const startPosition = useRef(0);
  const startPositionFlag = useRef(false);
  const ratio = useRef(0);
  const { breakpoint } = useBreakpoints();

  const translate = (base, ratio = 1, disable = false) => ({
    transform: `translate3d(0, ${base * ratio}px, 0)`,
    config: {
      mass: 10,
      tension: 350,
      friction: 150,
    },
    immediate: disable,
  });

  const [baseMove, setBaseMove] = useSpring(() => translate(config.base));
  const [smallMove, setSmallMove] = useSpring(() => translate(config.small));
  const [middleMove, setMiddleMove] = useSpring(() => translate(config.middle));
  const [bigMove, setBigMove] = useSpring(() => translate(config.big));

  const [blockRef, inView] = useInView({
    threshold: thresholdList(20),
  });

  const getCoef = (distToTop, startPos, correction = 0) => {
    const result = distToTop / startPos - correction;

    if (!startPos || result < 0 - correction) {
      return 0 - correction;
    }

    if (result > 1 + correction) {
      return 1 + correction;
    }

    return result;
  };

  const squeezeText = () => {
    if (inView && BREAKPOINTS.MOBILE !== breakpoint) {
      distanceToTop.current = elRef.current.getBoundingClientRect().top;
      ratio.current = getCoef(
        distanceToTop.current,
        startPosition.current,
        0.4
      );

      setBaseMove(translate(config.base, ratio.current));
      setSmallMove(translate(config.small, ratio.current));
      setMiddleMove(translate(config.middle, ratio.current));
      setBigMove(translate(config.big, ratio.current));

      if (startPositionFlag.current === false && inView) {
        startPositionFlag.current = true;
        startPosition.current = distanceToTop.current;
      }
    }
    if (BREAKPOINTS.MOBILE === breakpoint) {
      setBaseMove(translate(0, 1, true));
      setSmallMove(translate(0, 1, true));
      setMiddleMove(translate(0, 1, true));
      setBigMove(translate(0, 1, true));
    }
  };

  const squeezeTextDebounced = useCallback(debounce(squeezeText, 10));

  useEffect(() => {
    if (startPositionFlag.current === false && inView) {
      startPositionFlag.current = true;
      startPosition.current = distanceToTop.current;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', squeezeTextDebounced);
    return () => window.removeEventListener('scroll', squeezeTextDebounced);
  }, [squeezeText]);

  return (
    <Fragment>
      <animated.div
        ref={blockRef}
        style={baseMove}
        className={`${styles.preview} ${reversed ? styles.reversed : ''}`}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Img fluid={preview.childImageSharp.fluid} draggable={false} />
          <animated.span style={middleMove} className={styles.hiddenTitle}>
            {title}
          </animated.span>
        </a>
      </animated.div>
      <div
        className={`${styles.description} ${reversed ? styles.reversed : ''}`}
      >
        <animated.div ref={elRef} style={smallMove} className={styles.tags}>
          {tags}
        </animated.div>
        <animated.div className={styles.title} style={middleMove}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </animated.div>
        <animated.div className={styles.descriptionLink} style={middleMove}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {linkTitle}
          </a>
        </animated.div>
        <animated.div style={bigMove} className={styles.review}>
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
