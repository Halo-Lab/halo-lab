import { useStaticQuery, graphql } from 'gatsby';

const useStaticImages = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
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

export default useStaticImages;
