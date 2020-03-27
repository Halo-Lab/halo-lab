import { useStaticQuery, graphql } from 'gatsby';

export const homeWorks = graphql`
  fragment homeWorks on File {
    childImageSharp {
      fluid(maxWidth: 950, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

const useHomeWorksAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      Art: file(
        relativePath: { eq: "sections/home-works/Art-Investments-Platform.jpg" }
      ) {
        name
        ...homeWorks
      }
      eScooter: file(
        relativePath: { eq: "sections/home-works/eScooter-Booking.jpg" }
      ) {
        name
        ...homeWorks
      }
      Web: file(relativePath: { eq: "sections/home-works/Web.jpg" }) {
        name
        ...homeWorks
      }
      Hommy: file(
        relativePath: { eq: "sections/home-works/Hommy-dashboard.jpg" }
      ) {
        name
        ...homeWorks
      }
      Investments: file(
        relativePath: {
          eq: "sections/home-works/Investments-Platform-Mobile.jpg"
        }
      ) {
        name
        ...homeWorks
      }
      Lazy: file(
        relativePath: { eq: "sections/home-works/Lazy-Daisy-Mobile.jpg" }
      ) {
        name
        ...homeWorks
      }
      Starbank: file(relativePath: { eq: "sections/home-works/Starbank.jpg" }) {
        name
        ...homeWorks
      }
      Teampoint: file(
        relativePath: { eq: "sections/home-works/Teampoint.jpg" }
      ) {
        name
        ...homeWorks
      }
      Travel: file(
        relativePath: { eq: "sections/home-works/Travel-Agency-Website.jpg" }
      ) {
        name
        ...homeWorks
      }
      Tude: file(relativePath: { eq: "sections/home-works/Tude-Website.jpg" }) {
        name
        ...homeWorks
      }
      Realty: file(
        relativePath: { eq: "sections/home-works/Realty-Web-Dasboard.jpg" }
      ) {
        name
        ...homeWorks
      }
      North: file(
        relativePath: { eq: "sections/home-works/North-Face-Shop.jpg" }
      ) {
        name
        ...homeWorks
      }
    }
  `);

  return data;
};

export default useHomeWorksAssets;
