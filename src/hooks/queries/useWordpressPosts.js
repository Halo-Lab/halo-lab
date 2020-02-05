import { useStaticQuery, graphql } from 'gatsby';

const useWordpressPosts = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allWordpressPost(limit: 3) {
          edges {
            node {
              title
              path
              slug
              date
              featured_media {
                source_url
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 515) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  const result = data.allWordpressPost.edges.map(({ node }) => {
    return node;
  });

  return result;
};

export default useWordpressPosts;
