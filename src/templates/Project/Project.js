import React from 'react';
import PropTypes from 'prop-types';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import BackgroundStars from '@components/BackgroundStars';
import Head from '@components/Head';
import Description from './components/Description';
import Headline from './components/Headline';


// this function takes an element on at the time of finding which callback will be returned
function scrollHandler(ref, callback) {
  return function() {
    const pos = ref.getBoundingClientRect();
    if (pos.y <= 0 && -pos.y < pos.height) {
      return callback(true);
    }
    callback(false);
  };
}

const Project = ({ pageContext }) => {
  const { data, next } = pageContext;

  const [headerIsWhite, setHeaderIsWhite] = React.useState(false);
  const contentRef = React.useRef(null);

  const title = `${data.title} - Halo Lab Blog`;

  React.useEffect(() => {
    const handler = scrollHandler(contentRef.current, setHeaderIsWhite);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <Providers>
      <BackgroundStars />
      <Layout headerIsWhite={headerIsWhite} footerIsHide={true}>
        <Head title={title} description={data.excerpt} />

        <Headline data={data} />

        <div ref={contentRef}>
          <Description data={data} />
        </div>

          <Headline data={next} truncated />
      </Layout>
    </Providers>
  );
};

Project.propTypes = {
  pageContext: PropTypes.object,
};

export default Project;
