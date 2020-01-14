import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Head from '@components/Head';
import Layout from '@components/Layout';
import Posts from '@components/Posts';

import '@styles/index.scss';

const Home = () => {
  const { allSitePage } = useStaticQuery(
    graphql`
      {
        allSitePage {
          edges {
            node {
              id
              path
            }
          }
        }
      }
    `
  );

  const navList = allSitePage.edges.map(({ node: { id, path }}) => {
    return (
    <li key={id}>
      <Link to={path}>{id}</Link>
    </li>
    );
  });

  return (
    <Layout>
      <Head>
        <title>Главная - Halo Lab Blog</title>
      </Head>
      <div>Home</div>
      <ul>
        {navList}
        {navList}
        {navList}
        {navList}
        {navList}
        {navList}
        {navList}
        {navList}
        {navList}
        {navList}
      </ul>
      <Posts/>
    </Layout>
  );
};

export default Home;
