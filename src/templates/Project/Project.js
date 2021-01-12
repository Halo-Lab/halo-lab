import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import BackgroundStars from '@/components/BackgroundStars';
import Head from '@/components/Head';
import Layout from '@/components/Layout';
import Providers from '@/components/Providers';
import { useHeaderIsWhite } from '@/src/hooks';

import Description from './components/Description';
import Headline from './components/Headline';

import styles from './Project.module.scss';

const Project = ({ pageContext }) => {
  const { data, next } = pageContext;

  const contentRef = React.useRef(null);
  const headerIsWhite = useHeaderIsWhite(contentRef);

  const title = `${data.title} - Halo Lab Projects`;
  const nextLink = `portfolio/${next.slug}`;

  return (
    <Providers>
      <BackgroundStars />
      <Layout headerIsWhite={headerIsWhite} footerIsHide>
        <Head title={title} description={data.excerpt} />

        <Headline data={data} />

        <div ref={contentRef}>
          <Description data={data} />
        </div>

        <Link to={nextLink} className={styles.headlineWrapLink}>
          <Headline data={next} truncated />
        </Link>
      </Layout>
    </Providers>
  );
};

Project.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pageContext: PropTypes.object.isRequired,
};

export default Project;
