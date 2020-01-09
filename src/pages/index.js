import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Layout from "@components/Layout";

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

  return (
    <Layout>
      <div>Home</div>
      <ul>
        {
          allSitePage.edges.map(({ node: { id, path }}) => {
            return (
            <li key={id}>
              <Link to={path}>{id}</Link>
            </li>
            );
          })
        }
      </ul>
    </Layout>
  );
};

export default Home;
