import { useStaticQuery, graphql } from 'gatsby';

const useServicesDesignAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      branding: file(
        relativePath: { eq: "sections/services-design/branding.svg" }
      ) {
        publicURL
      }
      mobileAppsDesign: file(
        relativePath: { eq: "sections/services-design/mobile-apps-design.svg" }
      ) {
        publicURL
      }
      uxUiDesign: file(
        relativePath: { eq: "sections/services-design/ux-ui-design.svg" }
      ) {
        publicURL
      }
      websitesDesign: file(
        relativePath: { eq: "sections/services-design/websites-design.svg" }
      ) {
        publicURL
      }
    }
  `);

  return data;
};

export default useServicesDesignAssets;
