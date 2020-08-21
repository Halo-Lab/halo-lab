import React, { useEffect, useState } from 'react';
import { useHomeGalleryAssets } from '@hooks/queries';
import { useSpring, animated } from 'react-spring';
import Img from 'gatsby-image';

import { springDebounce } from '@helpers';

import styles from './Gallery.module.scss';

const Gallery = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', springDebounce(handleScroll));
    return () =>
      window.removeEventListener('scroll', springDebounce(handleScroll));
  }, [springDebounce]);

  const [{ springscrollY }, springsetScrollY] = useSpring(() => ({
    springscrollY: 0,
  }));
  const STEP = 5;
  springsetScrollY({ springscrollY: scrollY });
  const interpHeader = springscrollY.interpolate(
    o => `translateX(-${o / STEP}px)`
  );

  const { photos } = useHomeGalleryAssets();

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
      <animated.div
        className={styles.wrapper}
        style={{ transform: interpHeader }}
      >
        {photosList.map(({ element }) => {
          return element;
        })}
      </animated.div>
    </section>
  );
};

export default Gallery;
