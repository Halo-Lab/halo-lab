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
      preview1: file(relativePath: { eq: "sections/projects/preview-1.jpg" }) {
        name
        ...projectsImage
      }
      preview2: file(relativePath: { eq: "sections/projects/preview-2.jpg" }) {
        name
        ...projectsImage
      }
      preview3: file(relativePath: { eq: "sections/projects/preview-3.jpg" }) {
        name
        ...projectsImage
      }
      avatar1: file(
        relativePath: { eq: "sections/projects/marshall_haas.jpg" }
      ) {
        name
        ...projectsAvatar
      }
      avatar2: file(
        relativePath: { eq: "sections/projects/bogdan_suchyk.jpg" }
      ) {
        name
        ...projectsAvatar
      }
      avatar3: file(
        relativePath: { eq: "sections/projects/anton_glance.png" }
      ) {
        name
        ...projectsAvatar
      }
    }
  `);

  return data;
};

export default useProjectImages;
