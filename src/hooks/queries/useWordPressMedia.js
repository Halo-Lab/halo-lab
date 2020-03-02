import { useStaticQuery, graphql } from 'gatsby';

const useWordPressMedia = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allWordpressWpMedia {
          edges {
            node {
              source_url
              localFile {
                publicURL
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  const result = data.allWordpressWpMedia.edges.map(({ node }) => node);

  return result;
};

export default useWordPressMedia;
