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
      preview1: file(
        relativePath: { eq: "sections/projects/preview-1.jpeg" }
      ) {
        name
        ...projectsPreview
      }
      preview2: file(
        relativePath: { eq: "sections/projects/preview-2.png" }
      ) {
        name
        ...projectsPreview
      }
      preview3: file(
        relativePath: { eq: "sections/projects/preview-3.jpeg" }
      ) {
        name
        ...projectsPreview
      }
      preview4: file(
        relativePath: { eq: "sections/projects/preview-4.png" }
      ) {
        name
        ...projectsPreview
      }
      preview5: file(
        relativePath: { eq: "sections/projects/preview-5.jpeg" }
      ) {
        name
        ...projectsPreview
      }
      nodejs: file(
        relativePath: { eq: "sections/projects/technologies/nodejs.svg" }
      ) {
        publicURL
      }
      nextjs: file(
        relativePath: { eq: "sections/projects/technologies/nextjs.svg" }
      ) {
        publicURL
      }
      figma: file(
        relativePath: { eq: "sections/projects/technologies/figma.svg" }
      ) {
        publicURL
      }
      gatsby: file(
        relativePath: { eq: "sections/projects/technologies/gatsby.svg" }
      ) {
        publicURL
      }
      laravel: file(
        relativePath: { eq: "sections/projects/technologies/laravel.svg" }
      ) {
        publicURL
      }
      react: file(
        relativePath: { eq: "sections/projects/technologies/react.svg" }
      ) {
        publicURL
      }
      prismic: file(
        relativePath: { eq: "sections/projects/technologies/prismic.svg" }
      ) {
        publicURL
      }
      strapi: file(
        relativePath: { eq: "sections/projects/technologies/strapi.svg" }
      ) {
        publicURL
      }
      vue: file(
        relativePath: { eq: "sections/projects/technologies/vue.svg" }
      ) {
        publicURL
      }
      threejs: file(
        relativePath: { eq: "sections/projects/technologies/threejs.svg" }
      ) {
        publicURL
      }
    }
  `);

  return data;
};

export default useProjectsAssets;
