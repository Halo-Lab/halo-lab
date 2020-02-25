import { useStaticQuery, graphql } from 'gatsby';

const useTestimonialsAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      clutchLogo: file(relativePath: { eq: "testimonials/clutch-logo.svg" }) {
        publicURL
      }
      companyLogo1: file(
        relativePath: { eq: "testimonials/company-logo-1.svg" }
      ) {
        publicURL
      }
      companyLogo2: file(
        relativePath: { eq: "testimonials/company-logo-2.svg" }
      ) {
        publicURL
      }
      companyLogo3: file(
        relativePath: { eq: "testimonials/company-logo-3.svg" }
      ) {
        publicURL
      }
      companyLogo4: file(
        relativePath: { eq: "testimonials/company-logo-4.svg" }
      ) {
        publicURL
      }
      companyLogo5: file(
        relativePath: { eq: "testimonials/company-logo-1.svg" }
      ) {
        publicURL
      }
      stars: file(relativePath: { eq: "testimonials/stars-5.svg" }) {
        publicURL
      }
    }
  `);

  return data;
};

export default useTestimonialsAssets;
