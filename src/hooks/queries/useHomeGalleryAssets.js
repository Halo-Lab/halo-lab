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
      allFile(
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
    }
  `);

  const result = data.allFile.edges.map(({ node: { childImageSharp } }) => {
    return {
      childImageSharp,
    };
  });

  return result;
};

export default useHomeGalleryAssets;
