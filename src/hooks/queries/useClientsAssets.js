import { useStaticQuery, graphql } from 'gatsby';

const useClientsAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/svg/" }
          relativeDirectory: { eq: "sections/portfolio-clients" }
        }
      ) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `);

  const result = data.allFile.edges.map(({ node }) => {
    return node;
  });

  return result;
};

export default useClientsAssets;
