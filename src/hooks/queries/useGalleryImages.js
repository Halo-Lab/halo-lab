import { useStaticQuery, graphql } from 'gatsby';

export const homeGalleryImage = graphql`
  fragment homeGalleryImage on File {
    childImageSharp {
      fluid(maxWidth: 500, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

const useGalleryImages = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/jpg/" }
          relativeDirectory: { eq: "gallery" }
        }
      ) {
        edges {
          node {
            ...homeGalleryImage
          }
        }
      }
    }
  `);

  const result = data.allFile.edges.map(({ node: { childImageSharp } }) => {
    return {
      childImageSharp,
    };
  });

  return result;
};

export default useGalleryImages;
