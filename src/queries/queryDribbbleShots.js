import { graphql } from 'gatsby';

const GET_ALL_DRIBBBLE_SHOT = graphql`
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
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default GET_ALL_DRIBBBLE_SHOT;
