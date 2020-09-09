import { useStaticQuery, graphql } from 'gatsby';

const useFooterAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      github: file(relativePath: { eq: "brands/github.inline.svg" }) {
        publicURL
      }
      npm: file(relativePath: { eq: "brands/npm.inline.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "brands/instagram.inline.svg" }) {
        publicURL
      }
      behance: file(relativePath: { eq: "brands/behance.inline.svg" }) {
        publicURL
      }
      dribbble: file(relativePath: { eq: "brands/dribbble.inline.svg" }) {
        publicURL
      }
    }
  `);

  return data;
};

export default useFooterAssets;
