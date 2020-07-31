import { useStaticQuery, graphql } from 'gatsby';
import useBreakpoints from 'use-breakpoints-width';

export const homeGalleryImage = graphql`
  fragment homeGalleryImage on File {
    childImageSharp {
      fluid(maxWidth: 1920, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

const useHomeGalleryAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      photos: allFile(
        filter: {
          extension: { regex: "/jpg/" }
          relativeDirectory: { eq: "sections/home-gallery" }
        }
      ) {
        edges {
          node {
            ...homeGalleryImage
          }
        }
      }
      arrowLeft: file(
        relativePath: { eq: "sections/home-gallery/arrow-left.png" }
      ) {
        publicURL
      }
      arrowRight: file(
        relativePath: { eq: "sections/home-gallery/arrow-right.png" }
      ) {
        publicURL
      }
    }
  `);

  let LARGE_PICTURE = {};
  let MEDIUM_PICTURE = {};
  let SMALL_PICTURE = {};

  const { breakpoint, width } = useBreakpoints({
    breakpoints: {
      desktopLg: 1280,
      desktop: 768,
    },
    debounceDelay: 250,
  });

  if (breakpoint === 'desktop') {
    LARGE_PICTURE.WIDTH = '400px';
    LARGE_PICTURE.HEIGHT = '280px';
    MEDIUM_PICTURE.WIDTH = '300px';
    MEDIUM_PICTURE.HEIGHT = '220px';
    SMALL_PICTURE.WIDTH = '240px';
    SMALL_PICTURE.HEIGHT = '180px';
  } else if (breakpoint === 'desktopLg') {
    LARGE_PICTURE.WIDTH = '800px';
    LARGE_PICTURE.HEIGHT = '560px';
    MEDIUM_PICTURE.WIDTH = '600px';
    MEDIUM_PICTURE.HEIGHT = '440px';
    SMALL_PICTURE.WIDTH = '480px';
    SMALL_PICTURE.HEIGHT = '360px';
  }

  const photos = data.photos.edges.map(({ node: { childImageSharp } }) => {
    if (childImageSharp.fluid.src.includes('1.jpg')) {
      childImageSharp.fluid.width = LARGE_PICTURE.WIDTH;
      childImageSharp.fluid.height = LARGE_PICTURE.HEIGHT;
    } else if (childImageSharp.fluid.src.includes('2.jpg')) {
      childImageSharp.fluid.width = MEDIUM_PICTURE.WIDTH;
      childImageSharp.fluid.height = MEDIUM_PICTURE.HEIGHT;
    } else if (childImageSharp.fluid.src.includes('3.jpg')) {
      childImageSharp.fluid.width = SMALL_PICTURE.WIDTH;
      childImageSharp.fluid.height = SMALL_PICTURE.HEIGHT;
    } else if (childImageSharp.fluid.src.includes('4.jpg')) {
      childImageSharp.fluid.width = LARGE_PICTURE.WIDTH;
      childImageSharp.fluid.height = LARGE_PICTURE.HEIGHT;
    } else if (childImageSharp.fluid.src.includes('5.jpg')) {
      childImageSharp.fluid.width = SMALL_PICTURE.WIDTH;
      childImageSharp.fluid.height = SMALL_PICTURE.HEIGHT;
    } else if (childImageSharp.fluid.src.includes('6.jpg')) {
      childImageSharp.fluid.width = MEDIUM_PICTURE.WIDTH;
      childImageSharp.fluid.height = MEDIUM_PICTURE.HEIGHT;
    }

    return {
      childImageSharp,
    };
  });
  const arrowLeft = data.arrowLeft;
  const arrowRight = data.arrowRight;

  return { photos, arrowLeft, arrowRight };
};

export default useHomeGalleryAssets;
