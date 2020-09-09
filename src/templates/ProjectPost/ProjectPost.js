import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { TransitionState } from 'gatsby-plugin-transition-link';

import BackgroundStars from '@components/BackgroundStars';
import Head from '@components/Head';

import ThemeContext from '@context/ThemeContext';

import ProjectHeader from './components/ProjectHeader';
import ProjectMain from './components/ProjectMain';
import ProjectFooter from './components/ProjectFooter';

import style from './ProjectPost.module.scss';

function getStatus(status) {
  switch (status) {
    case 'exiting':
    case 'exited':
      return false;
    case 'entering':
    case 'entered':
      return true;
  }
}

const ProjectPost = ({ pageContext }) => {
  const {
    data,
    allPosts,
    recent: { next },
  } = pageContext;

  const articleRef = React.useRef(null);

  let onElem = false;

  const { setThemeState } = useContext(ThemeContext);

  const scrollHandler = () => {
    const elProps = articleRef.current.getBoundingClientRect();
    if (elProps.y < 0 && !onElem) {
      onElem = true;
      setThemeState(state => ({
        ...state,
        header: {
          isWhite: !state.header.isWhite,
        },
      }));
    }
    if (elProps.y > 0 && onElem) {
      onElem = false;
      setThemeState(state => ({
        ...state,
        header: {
          isWhite: !state.header.isWhite,
        },
      }));
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <>
      <Head title={`${data.title}`} description={`${data.description}`} />
      <BackgroundStars />
      <div className={style.project}>
        <TransitionState>
          {({ transitionStatus }) => (
            <article>
              <ProjectHeader
                categories={data.categories}
                title={data.title}
                thumbnail={data.featured_media}
                status={getStatus(transitionStatus)}
              />
              <ProjectMain
                refName={articleRef}
                description={data.excerpt}
                content={data.content}
                status={getStatus(transitionStatus)}
              />
              <ProjectFooter
                nextPost={next === null ? allPosts[0] : next}
                status={getStatus(transitionStatus)}
              />
            </article>
          )}
        </TransitionState>
      </div>
    </>
  );
};

ProjectPost.propTypes = {
  pageContext: propTypes.object,
};

export default ProjectPost;
