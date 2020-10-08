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
              slug
              date(formatString: "MMM DD, YYYY")
              content
              excerpt
              categories {
                name
                id
                count
                slug
              }
              featured_media {
                source_url
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 720, maxHeight: 540, quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
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
