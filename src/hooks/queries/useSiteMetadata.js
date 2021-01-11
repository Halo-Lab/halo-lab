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
            siteUrl
          }
        }
      }
    `,
  );

  return data.site.siteMetadata;
};

export default useSiteMetadata;
