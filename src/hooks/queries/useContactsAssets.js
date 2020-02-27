import { useStaticQuery, graphql } from 'gatsby';

const useContactsAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      map: file(relativePath: { eq: "contacts/map.svg" }) {
        publicURL
      }
    }
  `);

  return data;
};

export default useContactsAssets;
