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

  const result = data.allFile.edges.map(
    ({ node: { name, ext, publicURL, relativePath } }) => {
      return {
        name,
        ext,
        url: publicURL,
        path: relativePath,
      };
    }
  );

  return result;
};

export default useGalleryImages;
