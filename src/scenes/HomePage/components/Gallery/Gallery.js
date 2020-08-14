import React, { useContext } from 'react';
import useBreakpoints from 'use-breakpoints-width';

import { MenuContext } from '@contexts';
import { BREAKPOINTS } from '@constants';
import { useHomeGalleryAssets } from '@hooks/queries';
import Ticker from '@components/Ticker';
import Slider from '@components/Slider';
import Item from './components/Item';
import Img from 'gatsby-image';

import styles from './Gallery.module.scss';

const Gallery = () => {
  const { breakpoint } = useBreakpoints();
  const { isOpened } = useContext(MenuContext);
  const { photos, arrowLeft, arrowRight } = useHomeGalleryAssets();

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    variableWidth: true,
    slidesToShow: 1,
  };

  const photosList = photos.map(({ childImageSharp }) => {
    return {
      name: childImageSharp.fluid.src,
      element: (
        <li className={styles.item}>
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
      <div className={styles.sliderWrapper}>
        {breakpoint === BREAKPOINTS.DESKTOP && !isOpened ? (
          <Ticker
            images={photosList}
            arrowLeft={arrowLeft}
            arrowRight={arrowRight}
          />
        ) : null}
        {breakpoint === BREAKPOINTS.MOBILE ||
        breakpoint === BREAKPOINTS.TABLET ? (
          <Slider settings={settings}>
            {photos.map((item, index) => {
              return <Item key={index} data-name={index} {...item} />;
            })}
          </Slider>
        ) : null}
      </div>
    </section>
  );
};

export default Gallery;
