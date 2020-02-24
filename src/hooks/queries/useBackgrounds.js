import { useStaticQuery, graphql } from 'gatsby';

const useBackgrounds = () => {
  const data = useStaticQuery(graphql`
    query {
      bigStars: file(relativePath: { eq: "backgrounds/big-stars.svg" }) {
        publicURL
      }
      smallStars: file(relativePath: { eq: "backgrounds/small-stars.svg" }) {
        publicURL
      }
    }
  `);

  return data;
};

export default useBackgrounds;
