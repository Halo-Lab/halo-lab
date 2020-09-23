import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import BackgroundStars from '@components/BackgroundStars';
import Head from '@components/Head';
import Description from './components/Description';
import Headline from './components/Headline';
import { useHeaderIsWhite } from '@src/hooks';

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
      <Layout headerIsWhite={headerIsWhite} footerIsHide={true}>
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
  pageContext: PropTypes.object,
};

export default Project;
