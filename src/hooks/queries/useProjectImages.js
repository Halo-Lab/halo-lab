import { useStaticQuery, graphql } from 'gatsby';

export const projectsImage = graphql`
  fragment projectsImage on File {
    childImageSharp {
      fluid(maxWidth: 950, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

export const projectsAvatar = graphql`
  fragment projectsAvatar on File {
    childImageSharp {
      fluid(maxWidth: 80, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

const useProjectImages = () => {
  const data = useStaticQuery(graphql`
    query {
      preview1: file(relativePath: { eq: "project/project1.jpg" }) {
        name
        ...projectsImage
      }
      preview2: file(relativePath: { eq: "project/project2.jpg" }) {
        name
        ...projectsImage
      }
      preview3: file(relativePath: { eq: "project/project3.jpg" }) {
        name
        ...projectsImage
      }
      avatar1: file(relativePath: { eq: "project/Marshall_Haas_CEO.jpg" }) {
        name
        ...projectsAvatar
      }
      avatar2: file(relativePath: { eq: "project/Bogdan_Suchyk_CEO.jpg" }) {
        name
        ...projectsAvatar
      }
      avatar3: file(relativePath: { eq: "project/Anton_Glance_CEO.png" }) {
        name
        ...projectsAvatar
      }
    }
  `);

  return data;
};

export default useProjectImages;
