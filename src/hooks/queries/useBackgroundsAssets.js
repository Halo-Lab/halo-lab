import { useStaticQuery, graphql } from 'gatsby';

const useBackgroundsAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      starsBig: file(relativePath: { eq: "backgrounds/stars-big.svg" }) {
        publicURL
      }
      starsSmall: file(relativePath: { eq: "backgrounds/stars-small.svg" }) {
        publicURL
      }
    }
  `);

  return data;
};

export default useBackgroundsAssets;
