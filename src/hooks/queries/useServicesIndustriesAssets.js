import { useStaticQuery, graphql } from 'gatsby';

const useServicesIndustriesAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      eCommerce: file(
        relativePath: { eq: "sections/services-industries/e-commerce.svg" }
      ) {
        publicURL
      }
      fintech: file(
        relativePath: { eq: "sections/services-industries/fintech.svg" }
      ) {
        publicURL
      }
      healthCare: file(
        relativePath: { eq: "sections/services-industries/health-care.svg" }
      ) {
        publicURL
      }
      internetOfThings: file(
        relativePath: { eq: "sections/services-industries/internet-of-things.svg" }
      ) {
        publicURL
      }
    }
  `);

  return data;
};

export default useServicesIndustriesAssets;
