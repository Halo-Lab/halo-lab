import { useStaticQuery, graphql } from 'gatsby';

export const responsiveImage = graphql`
  fragment responsiveImage on File {
    childImageSharp {
      fluid(maxWidth: 950) {
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
        ...responsiveImage
      }
      preview2: file(relativePath: { eq: "project/project2.jpg" }) {
        name
        ...responsiveImage
      }
      preview3: file(relativePath: { eq: "project/project3.jpg" }) {
        name
        ...responsiveImage
      }
      avatar1: file(relativePath: { eq: "avatar1.jpg" }) {
        name
        ...responsiveImage
      }
    }
  `);

  return data;
};

export default useProjectImages;
