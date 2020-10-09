import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import BackgroundStars from '@components/BackgroundStars';
import Head from '@components/Head';
import Description from './components/Description';
import ProjectHeadline from './components/ProjectHeadline';
import { useHeaderIsWhite } from '@src/hooks';
import { getCategories } from '@src/helpers/utils';

import styles from './Project.module.scss';

const Project = ({ pageContext }) => {
  const { data, next, baseUrl } = pageContext;

  const mainCategory = {
    id: '9875',
    name: 'Portfolio',
    link: baseUrl,
  };

  const categories = getCategories(mainCategory, data.categories);
  const nextCategories = getCategories(mainCategory, next.categories);

  const contentRef = React.useRef(null);
  const headerIsWhite = useHeaderIsWhite(contentRef);

  const title = `${data.title} - Halo Lab Projects`;
  const nextLink = `portfolio/${next.slug}`;

  return (
    <Providers>
      <BackgroundStars />
      <Layout headerIsWhite={headerIsWhite} footerIsHide={true}>
        <Head title={title} description={data.excerpt} />

        <ProjectHeadline
          categories={categories}
          image={data.featured_media.source_url}
          title={data.title}
        />

        <div ref={contentRef}>
          <Description data={data} />
        </div>

        <Link to={nextLink} className={styles.headlineWrapLink}>
          <ProjectHeadline
            categories={nextCategories}
            image={next.featured_media.source_url}
            title={next.title}
            truncated
          />
        </Link>
      </Layout>
    </Providers>
  );
};

Project.propTypes = {
  pageContext: PropTypes.object,
};

export default Project;
