import { useStaticQuery, graphql } from 'gatsby';

export const heroCardsImage = graphql`
  fragment heroCardsImage on File {
    childImageSharp {
      fluid(maxWidth: 200, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

const useHeroCardsImages = () => {
  const data = useStaticQuery(graphql`
    query {
      background1: file(relativePath: { eq: "cards/clutch-bg.png" }) {
        ...heroCardsImage
      }
      background2: file(relativePath: { eq: "cards/dribbble-bg.png" }) {
        ...heroCardsImage
      }
      background3: file(relativePath: { eq: "cards/upwork-bg.png" }) {
        ...heroCardsImage
      }
      icon1: file(relativePath: { eq: "cards/clutch-logo.svg" }) {
        publicURL
      }
      icon2: file(relativePath: { eq: "cards/dribbble-logo.svg" }) {
        publicURL
      }
      icon3: file(relativePath: { eq: "cards/upwork-logo.svg" }) {
        publicURL
      }
    }
  `);

  return data;
};

export default useHeroCardsImages;
