import { useStaticQuery, graphql } from 'gatsby';

const useServicesDevelopmentAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      hybridAppsDevelopment: file(
        relativePath: {
          eq: "sections/services-development/hybrid-apps-development.svg"
        }
      ) {
        publicURL
      }
      projectManagement: file(
        relativePath: { eq: "sections/services-development/project-management.svg" }
      ) {
        publicURL
      }
      qualityAssurance: file(
        relativePath: { eq: "sections/services-development/quality-assurance.svg" }
      ) {
        publicURL
      }
      webDevelopment: file(
        relativePath: { eq: "sections/services-development/web-development.svg" }
      ) {
        publicURL
      }
    }
  `);

  return data;
};

export default useServicesDevelopmentAssets;
