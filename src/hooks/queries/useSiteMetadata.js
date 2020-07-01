import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            email
            website
          }
        }
      }
    `
  );

  return data.site.siteMetadata;
};

export default useSiteMetadata;
