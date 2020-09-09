import React from 'react';
import classNames from 'classnames';
import { object, bool } from 'prop-types';
import TransitionLink from 'gatsby-plugin-transition-link';
import { animated, useSpring } from 'react-spring';

import GradientText from '@components/GradientText';

import style from './ProjectFooter.module.scss';

const wrapTranslate = y => `translate3d(0, -${y}px, 0)`;

const entryTransition = {
  length: 1.5,
  delay: 1,
  trigger: () => {
    document.body.style.overflow = 'visible';
    window.scrollTo(0, 0);
  },
};

const exitTransition = {
  length: 2,
  trigger: () => {
    document.body.style.overflow = 'hidden';
  },
};

const ProjectFooter = ({ nextPost, status }) => {
  const { slug, featured_media, title } = nextPost;
  const link = `/portfolio/${slug}`;

  const wrapSpring = useSpring({
    y: status ? 0 : 220,
    config: { mass: 1, tension: 180, friction: 60 },
  });

  return (
    <animated.div
      style={{
        transform: wrapSpring.y.interpolate(wrapTranslate),
      }}
    >
      <div className={style.footer}>
        <div className={style.container}>
          <div className={style.content}>
            <TransitionLink
              to={link}
              entry={entryTransition}
              exit={exitTransition}
            >
              <div
                className={classNames(
                  style.container,
                  style.container__content
                )}
              >
                <div className={style.description}>
                  <p>Next post</p>
                </div>
                <div className={style.title}>
                  <h3>
                    <GradientText text={title} />
                  </h3>
                </div>
              </div>
              <div className={style.thumbnail}>
                <img
                  src={featured_media.source_url}
                  alt={title}
                  title={title}
                />
              </div>
            </TransitionLink>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

ProjectFooter.propTypes = {
  nextPost: object.isRequired,
  status: bool.isRequired,
};

export default ProjectFooter;
