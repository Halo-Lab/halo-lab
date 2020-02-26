import { useStaticQuery, graphql } from 'gatsby';

const useMenuAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      blogIcon: file(relativePath: { eq: "menu/blog-icon.svg" }) {
        publicURL
      }
      blogStars: file(relativePath: { eq: "menu/blog-stars.svg" }) {
        publicURL
      }
      contactsIcon: file(relativePath: { eq: "menu/contacts-icon.svg" }) {
        publicURL
      }
      contactsStars: file(relativePath: { eq: "menu/contacts-stars.svg" }) {
        publicURL
      }
      portfolioIcon: file(relativePath: { eq: "menu/portfolio-icon.svg" }) {
        publicURL
      }
      portfolioStars: file(relativePath: { eq: "menu/portfolio-stars.svg" }) {
        publicURL
      }
      servicesIcon: file(relativePath: { eq: "menu/services-icon.svg" }) {
        publicURL
      }
      servicesStars: file(relativePath: { eq: "menu/services-stars.svg" }) {
        publicURL
      }
    }
  `);

  return data;
};

export default useMenuAssets;
