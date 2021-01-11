import { useStaticQuery, graphql } from 'gatsby';

export const projectsPreview = graphql`
  fragment projectsPreview on File {
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

const useProjectsAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      preview1: file(relativePath: { eq: "sections/projects/preview-1.jpg" }) {
        name
        ...projectsPreview
      }
      preview2: file(relativePath: { eq: "sections/projects/preview-2.jpg" }) {
        name
        ...projectsPreview
      }
      preview3: file(relativePath: { eq: "sections/projects/preview-3.jpg" }) {
        name
        ...projectsPreview
      }
      avatar1: file(relativePath: { eq: "sections/projects/anton_glance.png" }) {
        name
        ...projectsAvatar
      }
      avatar2: file(relativePath: { eq: "sections/projects/bogdan_suchyk.jpg" }) {
        name
        ...projectsAvatar
      }
      avatar3: file(relativePath: { eq: "sections/projects/marshall_haas.jpg" }) {
        name
        ...projectsAvatar
      }
      angellist: file(relativePath: { eq: "brands/angellist.svg" }) {
        publicURL
      }
      auth: file(relativePath: { eq: "brands/auth0.svg" }) {
        publicURL
      }
      forbes: file(relativePath: { eq: "brands/forbes.svg" }) {
        publicURL
      }
      indiegogo: file(relativePath: { eq: "brands/indiegogo.svg" }) {
        publicURL
      }
      mashable: file(relativePath: { eq: "brands/mashable.svg" }) {
        publicURL
      }
      techcrunch: file(relativePath: { eq: "brands/techcrunch.svg" }) {
        publicURL
      }
      vcRu: file(relativePath: { eq: "brands/vc.ru.svg" }) {
        publicURL
      }
      jackAndJones: file(relativePath: { eq: "brands/jack-and-jones.svg" }) {
        publicURL
      }
      kklLuzern: file(relativePath: { eq: "brands/kkl-luzern.svg" }) {
        publicURL
      }
      udemy: file(relativePath: { eq: "brands/udemy.svg" }) {
        publicURL
      }
      kickstarter: file(relativePath: { eq: "brands/kickstarter.svg" }) {
        publicURL
      }
      huffpost: file(relativePath: { eq: "brands/huffpost.svg" }) {
        publicURL
      }
    }
  `);

  return data;
};

export default useProjectsAssets;
