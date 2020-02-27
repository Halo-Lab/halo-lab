import { useStaticQuery, graphql } from 'gatsby';

const usePortfolioWorksAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      circledText: file(
        relativePath: { eq: "sections/portfolio-works/dribbble-red.svg" }
      ) {
        publicURL
      }
      dribbbleRed: file(
        relativePath: { eq: "sections/portfolio-works/circled-text.svg" }
      ) {
        publicURL
      }
    }
  `);

  return data;
};

export default usePortfolioWorksAssets;
