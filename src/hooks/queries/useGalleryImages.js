import { useStaticQuery, graphql } from 'gatsby';

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
            name
            ext
            publicURL
            relativePath
          }
        }
      }
    }
  `);

  return data;
};

export default useGalleryImages;
