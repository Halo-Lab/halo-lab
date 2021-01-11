import { useStaticQuery, graphql } from 'gatsby';

const useSitePages = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allSitePage {
          edges {
            node {
              path
            }
          }
        }
      }
    `,
  );

  const result = {};
  data.allSitePage.edges.forEach(({ node: { path } }) => {
    const name = path.length === 1 ? 'home' : path.slice(1, -1);
    result[name] = path;
  });

  return result;
};

export default useSitePages;
