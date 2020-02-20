import { useStaticQuery, graphql } from 'gatsby';

const useDribbbleShots = () => {
  const data = useStaticQuery(
    graphql`
      query userQuery {
        allDribbbleShot(limit: 24) {
          nodes {
            id
            title
            description
            published
            updated
            url
            tags
            cover
            width
            height
            localCover {
              childImageSharp {
                fluid(maxWidth: 300, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  );

  return data.allDribbbleShot.nodes;
};

export default useDribbbleShots;
