import { useStaticQuery, graphql } from 'gatsby';

export const homeHeroBackground = graphql`
  fragment homeHeroBackground on File {
    childImageSharp {
      fluid(maxWidth: 200, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

const useHomeHeroAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      clutchBackground: file(
        relativePath: { eq: "sections/home-hero/clutch-background.png" }
      ) {
        ...homeHeroBackground
      }
      dribbbleBackground: file(
        relativePath: { eq: "sections/home-hero/dribbble-background.png" }
      ) {
        ...homeHeroBackground
      }
      upworkBackground: file(
        relativePath: { eq: "sections/home-hero/upwork-background.png" }
      ) {
        ...homeHeroBackground
      }
      clutchLogotype: file(relativePath: { eq: "brands/clutch.svg" }) {
        publicURL
      }
      dribbbleLogotype: file(relativePath: { eq: "brands/dribbble.svg" }) {
        publicURL
      }
      upworkLogotype: file(relativePath: { eq: "brands/upwork.svg" }) {
        publicURL
      }
      clutchLaurel: file(
        relativePath: { eq: "sections/home-hero/clutch-icon.svg" }
      ) {
        publicURL
      }
      dribbbleLaurel: file(
        relativePath: { eq: "sections/home-hero/dribbble-icon.svg" }
      ) {
        publicURL
      }
      upworkLaurel: file(
        relativePath: { eq: "sections/home-hero/upwork-icon.svg" }
      ) {
        publicURL
      }
      titleSvg: file(
        relativePath: { eq: "sections/home-hero/headline.inline.svg" }
      ) {
        publicURL
      }
      quotes: file(relativePath: { eq: "ui/quotes.svg" }) {
        publicURL
      }
    }
  `);

  return data;
};

export default useHomeHeroAssets;
