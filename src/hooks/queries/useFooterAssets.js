import { useStaticQuery, graphql } from 'gatsby';

const useFooterAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      logotype: file(relativePath: { eq: "halo-lab/logotype.svg" }) {
        publicURL
      }
      behance: file(relativePath: { eq: "brands/behance.svg" }) {
        publicURL
      }
      dribbble: file(relativePath: { eq: "brands/dribbble.svg" }) {
        publicURL
      }
      facebook: file(relativePath: { eq: "brands/facebook.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "brands/instagram.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "brands/twitter.svg" }) {
        publicURL
      }
    }
  `);

  return data;
};

export default useFooterAssets;
