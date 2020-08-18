import React, { useEffect, useState } from 'react';
import { useHomeGalleryAssets } from '@hooks/queries';
import Img from 'gatsby-image';

import styles from './Gallery.module.scss';

const Gallery = () => {
  const { photos } = useHomeGalleryAssets();
  const STEP_COEFFICIENT = 7;

  const [scrollDistance, setScrollDistance] = useState(null);
  const handleScroll = () => {
    let scrollWidth = -window.pageYOffset / STEP_COEFFICIENT;
    setScrollDistance({
      '-webkit-transform': `matrix(1, 0, 0, 1, ${scrollWidth.toFixed(0)}, 0)`,
      // '-webkit-transform': `translate3d(${scrollWidth.toFixed(0)}px, 0, 0)`,
      // 'webkit-backface-visibility': 'hidden',
      // position: 'relative',
      // left: `${scrollWidth.toFixed(0)}px`,
      // transition: 'all 1s ease',
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
