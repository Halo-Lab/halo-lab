import React from 'react';
import PropTypes from 'prop-types';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import BackgroundStars from '@scenes/BackgroundStars';
import Head from '@components/Head';
import MailUs from '@scenes/MailUs';
import Categories from './components/Categories';
import Article from './components/Article';

import styles from './BlogPost.module.scss';

const BlogPost = ({ pageContext }) => {
  const { data } = pageContext;
  console.log(data);

  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head>
          <title>{data.title} - Halo Lab Blog</title>
        </Head>
        <div className="pageWrapper">
          <Categories items={data.categories} />
          <h2 className={styles.title}>{data.title}</h2>
        </div>
        <Article content={data.content} />
        <div className="pageWrapper">
          <MailUs />
        </div>
      </Layout>
    </Providers>
  );
};

BlogPost.propTypes = {
  pageContext: PropTypes.object,
};

export default BlogPost;
