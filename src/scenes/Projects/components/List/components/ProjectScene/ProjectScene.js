import React, {
  Fragment,
  useRef,
  useEffect,
  useCallback,
  useState,
} from 'react';
import { useInView } from 'react-intersection-observer';
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

  const [smallTranslate, setSmallTranslate] = useState();
  const [middleTranslate, setMiddleTranslate] = useState();
  const [bigTranslate, setBigTranslate] = useState();

  useEffect(() => {
    const style1 = {
      transform: `translate3d(0, 80px, 0)`,
      transition: `transform ${settings.delay} ${settings.ease}`,
    };

    const style2 = {
      transform: `translate3d(0, 120px, 0)`,
      transition: `transform ${settings.delay} ${settings.ease}`,
    };

    const style3 = {
      transform: `translate3d(0, 160px, 0)`,
      transition: `transform ${settings.delay} ${settings.ease}`,
    };

    if (startPositionFlag.current === false && inView) {
      startPositionFlag.current = true;
      startPosition.current = distanceToTop.current;
    }

    setSmallTranslate(style1);
    setMiddleTranslate(style2);
    setBigTranslate(style3);
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
    if (inView) {
      distanceToTop.current = elRef.current.getBoundingClientRect().top;
      coef.current = getCoef(distanceToTop.current, startPosition.current);

      const style1 = {
        transform: `translate3d(0, ${80 * coef.current}px, 0)`,
        transition: `transform ${settings.delay} ${settings.ease}`,
      };

      const style2 = {
        transform: `translate3d(0, ${120 * coef.current}px, 0)`,
        transition: `transform ${settings.delay} ${settings.ease}`,
      };

      const style3 = {
        transform: `translate3d(0, ${160 * coef.current}px, 0)`,
        transition: `transform ${settings.delay} ${settings.ease}`,
      };

      if (startPositionFlag.current === false && inView) {
        startPositionFlag.current = true;
        startPosition.current = distanceToTop.current;
      }

      setSmallTranslate(style1);
      setMiddleTranslate(style2);
      setBigTranslate(style3);
    }
  }, [inView]);

  useEffect(() => {
    window.addEventListener('scroll', squeezeText);
    return () => window.removeEventListener('scroll', squeezeText);
  }, [squeezeText]);

  return (
    <Fragment>
      <div
        ref={blockRef}
        style={smallTranslate}
        className={`${styles.preview} ${reversed ? styles.reversed : ''}`}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Img fluid={preview.childImageSharp.fluid} draggable={false} />
          <span className={styles.hiddenTitle}>{title}</span>
        </a>
      </div>
      <div
        className={`${styles.description} ${reversed ? styles.reversed : ''}`}
      >
        <div ref={elRef} className={styles.tags} style={smallTranslate}>
          {tags}
        </div>
        <div className={styles.title} style={middleTranslate}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </div>
        <div className={styles.descriptionLink} style={bigTranslate}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {linkTitle}
          </a>
        </div>
        <div className={styles.review} style={bigTranslate}>
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
