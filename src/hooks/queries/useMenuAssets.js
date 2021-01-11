import { useStaticQuery, graphql } from 'gatsby';

const useMenuAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      blogIcon: file(relativePath: { eq: "sections/menu/blog-icon.svg" }) {
        publicURL
      }
      blogStars: file(relativePath: { eq: "sections/menu/blog-stars.svg" }) {
        publicURL
      }
      contactsIcon: file(relativePath: { eq: "sections/menu/contacts-icon.svg" }) {
        publicURL
      }
      contactsStars: file(relativePath: { eq: "sections/menu/contacts-stars.svg" }) {
        publicURL
      }
      portfolioIcon: file(relativePath: { eq: "sections/menu/portfolio-icon.svg" }) {
        publicURL
      }
      portfolioStars: file(
        relativePath: { eq: "sections/menu/portfolio-stars.svg" }
      ) {
        publicURL
      }
      servicesIcon: file(relativePath: { eq: "sections/menu/services-icon.svg" }) {
        publicURL
      }
      servicesStars: file(relativePath: { eq: "sections/menu/services-stars.svg" }) {
        publicURL
      }
    }
  `);

  return data;
};

export default useMenuAssets;
