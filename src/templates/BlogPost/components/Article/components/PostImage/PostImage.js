import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import { useWordPressMedia } from '@hooks/queries';

const PostImage = ({ node }) => {
  const data = useWordPressMedia();
  const originalSrc = node.attribs.src;

  const optimizedImage = data.find(({ source_url }) => {
    // Source attributes in markup and query are different ...
    const optimizedSrc = source_url
      .replace('https://', '')
      .replace('http://')
      .replace('.jpg', '')
      .replace('.png', '');

    // ... that is why we are looking for a partial match.
    return originalSrc.includes(optimizedSrc);
  });

  if (optimizedImage) {
    const fluid =
      optimizedImage.localFile &&
      optimizedImage.localFile.childImageSharp &&
      optimizedImage.localFile.childImageSharp.fluid;

    return <Img className="postImage" fluid={fluid} />;
  }

  return (
    <img
      src={node.attribs.src}
      alt={node.attribs.alt}
      srcSet={node.attribs.srcset}
      sizes={node.attribs.sizes}
      className={node.attribs.class}
    />
  );
};

PostImage.propTypes = {
  node: PropTypes.object,
};

export default PostImage;
