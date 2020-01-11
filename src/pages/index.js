import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Layout from "@components/Layout";
import Head from "@components/Head";
import Stars from "@components/Stars";
import Posts from "@components/Posts";

import "@styles/index.scss";

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
        { navList }
      </ul>
      <div>Page list</div>
      <Posts/>
    </Layout>
  );
};

export default Home;
