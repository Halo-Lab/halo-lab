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
      image1: file(relativePath: { eq: "project/project1.jpg" }) {
        publicURL
      }
      image2: file(relativePath: { eq: "project/project2.jpg" }) {
        publicURL
      }
      image3: file(relativePath: { eq: "project/project3.jpg" }) {
        publicURL
      }
    }
  `);

  return data;
};

export default useProjectImages;
