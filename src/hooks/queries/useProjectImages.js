import { useStaticQuery, graphql } from 'gatsby';

export const projectsImage = graphql`
  fragment projectsImage on File {
    childImageSharp {
      fluid(maxWidth: 950, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const projectsAvatar = graphql`
  fragment projectsAvatar on File {
    childImageSharp {
      fluid(maxWidth: 80, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

const useProjectImages = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
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
      avatar1: file(relativePath: { eq: "project/avatar1.jpg" }) {
        name
        ...projectsAvatar
      }
      avatar2: file(relativePath: { eq: "project/avatar2.jpg" }) {
        name
        ...projectsAvatar
      }
      avatar3: file(relativePath: { eq: "project/avatar3.jpg" }) {
        name
        ...projectsAvatar
      }
    }
  `);

  return data;
};

export default useProjectImages;
