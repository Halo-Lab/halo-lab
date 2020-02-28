import { useStaticQuery, graphql } from 'gatsby';

const useHeaderAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      logotype: file(relativePath: { eq: "halo-lab/logotype-title.svg" }) {
        publicURL
      }
    }
  `);

  return data;
};

export default useHeaderAssets;
