import { useStaticQuery, graphql } from 'gatsby';

const usePortfolioWorksAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      arrowDown: file(relativePath: { eq: "ui/arrow-circled-down.svg" }) {
        publicURL
      }
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
      textCircled: file(
        relativePath: { eq: "sections/portfolio-works/dribbble-red.svg" }
      ) {
        publicURL
      }
    }
  `);

  return data;
};

export default usePortfolioWorksAssets;
