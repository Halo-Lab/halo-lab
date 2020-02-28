import { useStaticQuery, graphql } from 'gatsby';

export const homeGalleryImage = graphql`
  fragment homeGalleryImage on File {
    childImageSharp {
      fluid(maxWidth: 500, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

const useHomeGalleryAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      photos: allFile(
        filter: {
          extension: { regex: "/jpg/" }
          relativeDirectory: { eq: "sections/home-gallery" }
        }
      ) {
        edges {
          node {
            ...homeGalleryImage
          }
        }
      }
      arrowLeft: file(
        relativePath: { eq: "sections/home-gallery/arrow-left.png" }
      ) {
        publicURL
      }
      arrowRight: file(
        relativePath: { eq: "sections/home-gallery/arrow-right.png" }
      ) {
        publicURL
      }
    }
  `);

  const photos = data.photos.edges.map(({ node: { childImageSharp } }) => {
    return {
      childImageSharp,
    };
  });
  const arrowLeft = data.arrowLeft;
  const arrowRight = data.arrowRight;

  return { photos, arrowLeft, arrowRight };
};

export default useHomeGalleryAssets;
