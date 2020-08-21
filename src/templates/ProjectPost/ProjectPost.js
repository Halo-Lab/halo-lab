import React from 'react';
import { object } from 'prop-types';
import { TransitionState } from 'gatsby-plugin-transition-link';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import BackgroundStars from '@components/BackgroundStars';
import Head from '@components/Head';

import ProjectHeader from './components/ProjectHeader';
import ProjectMain from './components/ProjectMain';
import ProjectFooter from './components/ProjectFooter';

function scrollHandler(ref, callback) {
  return function() {
    const pos = ref.getBoundingClientRect();
    if (pos.y <= 0 && -pos.y < pos.height) {
      return callback(true);
    }
    callback(false);
  };
}

const ProjectPost = ({ pageContext }) => {
  const {
    data,
    allPosts,
    recent: { next },
  } = pageContext;

  const articleRef = React.useRef(null);

  const [headerIsWhite, setHeaderIsWhite] = React.useState(false);

  React.useEffect(() => {
    const handler = scrollHandler(articleRef.current, setHeaderIsWhite);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <Providers>
      <BackgroundStars />
      <Layout headerIsWhite={headerIsWhite}>
        <Head title={`${data.title}`} description={`${data.description}`} />
        <TransitionState>
          {({ status }) => (
            <article>
              <ProjectHeader
                categories={data.categories}
                title={data.title}
                thumbnail={data.featured_media}
              />
              <ProjectMain
                refName={articleRef}
                description={data.excerpt}
                content={data.content}
              />
              <ProjectFooter
                nextPost={next === null ? allPosts[0] : next}
                status={status}
              />
            </article>
          )}
        </TransitionState>
      </Layout>
    </Providers>
  );
};

ProjectPost.propTypes = {
  pageContext: object.isRequired,
};

export default ProjectPost;
