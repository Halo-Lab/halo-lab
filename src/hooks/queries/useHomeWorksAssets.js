import { useStaticQuery, graphql } from 'gatsby';

export const homeWorksBigImage = graphql`
  fragment homeWorksBigImage on File {
    childImageSharp {
      fluid(maxWidth: 775, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

export const homeWorksMiddleImage = graphql`
  fragment homeWorksMiddleImage on File {
    childImageSharp {
      fluid(maxWidth: 500, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

export const homeWorksSmallImage = graphql`
  fragment homeWorksSmallImage on File {
    childImageSharp {
      fluid(maxWidth: 238, quality: 100) {
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
        ...homeWorksMiddleImage
      }
      eScooter: file(
        relativePath: { eq: "sections/home-works/eScooter-Booking.jpg" }
      ) {
        name
        ...homeWorksBigImage
      }
      Web: file(relativePath: { eq: "sections/home-works/Web.jpg" }) {
        name
        ...homeWorksBigImage
      }
      Hommy: file(
        relativePath: { eq: "sections/home-works/Hommy-dashboard.jpg" }
      ) {
        name
        ...homeWorksSmallImage
      }
      Investments: file(
        relativePath: {
          eq: "sections/home-works/Investments-Platform-Mobile.jpg"
        }
      ) {
        name
        ...homeWorksMiddleImage
      }
      Lazy: file(
        relativePath: { eq: "sections/home-works/Lazy-Daisy-Mobile.jpg" }
      ) {
        name
        ...homeWorksSmallImage
      }
      Starbank: file(relativePath: { eq: "sections/home-works/Starbank.jpg" }) {
        name
        ...homeWorksSmallImage
      }
      Teampoint: file(
        relativePath: { eq: "sections/home-works/Teampoint.jpg" }
      ) {
        name
        ...homeWorksSmallImage
      }
      Travel: file(
        relativePath: { eq: "sections/home-works/Travel-Agency-Website.jpg" }
      ) {
        name
        ...homeWorksSmallImage
      }
      Tude: file(relativePath: { eq: "sections/home-works/Tude-Website.jpg" }) {
        name
        ...homeWorksSmallImage
      }
      Realty: file(
        relativePath: { eq: "sections/home-works/Realty-Web-Dasboard.jpg" }
      ) {
        name
        ...homeWorksMiddleImage
      }
      North: file(
        relativePath: { eq: "sections/home-works/North-Face-Shop.jpg" }
      ) {
        name
        ...homeWorksBigImage
      }
    }
  `);

  return data;
};

export default useHomeWorksAssets;
