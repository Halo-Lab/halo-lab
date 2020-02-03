import { useStaticQuery, graphql } from 'gatsby';

const useWordpressPosts = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allWordpressPost {
          edges {
            node {
              id
              title
              path
              date(formatString: "DD.MM.YYYY")
              content
              categories {
                name
                id
                count
              }
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
