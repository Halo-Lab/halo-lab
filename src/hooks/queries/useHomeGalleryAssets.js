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

  let LARGE_PICTURE = {
    WIDTH: '800px',
    HEIGHT: '560px',
  };
  let MEDIUM_PICTURE = {
    WIDTH: '600px',
    HEIGHT: '440px',
  };
  let SMALL_PICTURE = {
    WIDTH: '480px',
    HEIGHT: '360px',
  };

  const { breakpoint } = useBreakpoints({
    breakpoints: {
      desktop: 1280,
      tablet: 768,
      mobile: 568,
      mobileSmallSize: 0,
    },
    debounceDelay: 250,
  });

  if (breakpoint === 'tablet') {
    LARGE_PICTURE.WIDTH = '600px';
    LARGE_PICTURE.HEIGHT = '420px';
    MEDIUM_PICTURE.WIDTH = '450px';
    MEDIUM_PICTURE.HEIGHT = '330px';
    SMALL_PICTURE.WIDTH = '360px';
    SMALL_PICTURE.HEIGHT = '270px';
  } else if (breakpoint === 'mobile') {
    LARGE_PICTURE.WIDTH = '400px';
    LARGE_PICTURE.HEIGHT = '280px';
    MEDIUM_PICTURE.WIDTH = '300px';
    MEDIUM_PICTURE.HEIGHT = '220px';
    SMALL_PICTURE.WIDTH = '240px';
    SMALL_PICTURE.HEIGHT = '180px';
  } else if (breakpoint === 'mobileSmallSize') {
    LARGE_PICTURE.WIDTH = '266px';
    LARGE_PICTURE.HEIGHT = '186px';
    MEDIUM_PICTURE.WIDTH = '200px';
    MEDIUM_PICTURE.HEIGHT = '146px';
    SMALL_PICTURE.WIDTH = '160px';
    SMALL_PICTURE.HEIGHT = '120px';
  }

  const photos = data.photos.edges.map(({ node: { childImageSharp } }) => {
    const img = childImageSharp.fluid;

    if (img.src.includes('1.jpg')) {
      img.width = LARGE_PICTURE.WIDTH;
      img.height = LARGE_PICTURE.HEIGHT;
      img.alt = 'Image with dribbble shot on a screen';
      img.title = 'Image with dribbble shot on a screen';
    } else if (img.src.includes('2.jpg')) {
      img.width = MEDIUM_PICTURE.WIDTH;
      img.height = MEDIUM_PICTURE.HEIGHT;
      img.alt = 'Man in the dark in front of a lamp';
      img.title = 'Man in the dark in front of a lamp';
    } else if (img.src.includes('3.jpg')) {
      img.width = SMALL_PICTURE.WIDTH;
      img.height = SMALL_PICTURE.HEIGHT;
      img.alt = 'Screen, keyboard, lamp, headphones in the workplace';
      img.title = 'Screen, keyboard, lamp, headphones in the workplace';
    } else if (img.src.includes('4.jpg')) {
      img.width = LARGE_PICTURE.WIDTH;
      img.height = LARGE_PICTURE.HEIGHT;
      img.alt = 'Girl working at the computer';
      img.title = 'Girl working at the computer';
    } else if (img.src.includes('5.jpg')) {
      img.width = SMALL_PICTURE.WIDTH;
      img.height = SMALL_PICTURE.HEIGHT;
      img.alt = 'Laptop on a table';
      img.title = 'Laptop on a table';
    } else if (img.src.includes('6.jpg')) {
      img.width = MEDIUM_PICTURE.WIDTH;
      img.height = MEDIUM_PICTURE.HEIGHT;
      img.alt = 'Man working on laptop';
      img.title = 'Man working on laptop';
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
