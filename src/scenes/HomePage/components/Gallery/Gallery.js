import React from 'react';
import { useHomeGalleryAssets } from '@hooks/queries';
import Img from 'gatsby-image';
import ScrollGallery from '@components/ScrollGallery/ScrollGallery';

import styles from './Gallery.module.scss';

const Gallery = () => {
  const { photos } = useHomeGalleryAssets();

  const photosList = photos.map(({ childImageSharp }) => {
    return {
      name: childImageSharp.fluid.src,
      element: (
        <div className={styles.item} key={childImageSharp.fluid.src}>
          <div className={styles.card}>
            <Img
              fluid={childImageSharp.fluid}
              draggable={false}
              alt={childImageSharp.fluid.alt}
              title={childImageSharp.fluid.title}
              style={{
                height: childImageSharp.fluid.height,
                width: childImageSharp.fluid.width,
              }}
            />
          </div>
        </div>
      ),
    };
  });

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Creative Atmosphere</h2>
      <ScrollGallery step={5}>
        {photosList.map(({ element }) => {
          return element;
        })}
      </ScrollGallery>
    </section>
  );
};

export default Gallery;
