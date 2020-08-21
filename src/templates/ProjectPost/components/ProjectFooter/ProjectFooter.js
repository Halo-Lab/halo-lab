import React from 'react';
import classNames from 'classnames';
import { object } from 'prop-types';
import TransitionLink from 'gatsby-plugin-transition-link';

import GradientText from '@components/GradientText';

import style from './ProjectFooter.module.scss';

const ProjectFooter = ({ nextPost }) => {
  const { slug, featured_media, title } = nextPost;
  const link = `/portfolio/${slug}`;

  return (
    <div className={classNames(style.footer, 'pageWrapper')}>
      <div className={style.container}>
        <div className={style.content}>
          <TransitionLink
            to={link}
            exit={{ length: 0.5 }}
            entry={{ delay: 0.5 }}
          >
            <div
              className={classNames(style.container, style.container__content)}
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
              <img src={featured_media.source_url} alt={title} title={title} />
            </div>
          </TransitionLink>
        </div>
      </div>
    </div>
  );
};

ProjectFooter.propTypes = {
  nextPost: object.isRequired,
  status: object,
};

export default ProjectFooter;
