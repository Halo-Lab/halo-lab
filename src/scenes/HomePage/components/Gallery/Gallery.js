import React, { useEffect, useState } from 'react';
import { useHomeGalleryAssets } from '@hooks/queries';
import Img from 'gatsby-image';

import styles from './Gallery.module.scss';

const Gallery = () => {
  const { photos } = useHomeGalleryAssets();
  const STEP_COEFFICIENT = 5;

  const [scrollDistance, setScrollDistance] = useState(null);
  const handleScroll = () => {
    setScrollDistance({
      transform: `translate3d(-${window.pageYOffset /
        STEP_COEFFICIENT}px, 0, 0)`,
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return function remove() {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const photosList = photos.map(({ childImageSharp }, index) => {
    return {
      name: childImageSharp.fluid.src,
      element: (
        <li className={styles.item} key={index}>
          <div className={styles.card}>
            <Img
              fluid={childImageSharp.fluid}
              draggable={false}
              style={{
                height: childImageSharp.fluid.height,
                width: childImageSharp.fluid.width,
              }}
            />
          </div>
        </li>
      ),
    };
  });

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Creative Atmosphere</h2>
      <div className={styles.wrapper} style={scrollDistance}>
        {photosList.map(({ element }) => {
          return element;
        })}
      </div>
    </section>
  );
};

export default Gallery;
