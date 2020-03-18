import React, { useState, useEffect, useContext } from 'react';

import { MenuContext } from '@contexts';
import { useBreakpoints, BREAKPOINTS } from '@hooks';
import { useHomeGalleryAssets } from '@hooks/queries';
import Ticker from '@components/Ticker';
import Slider from '@components/Slider';
import Item from './components/Item';

import styles from './Gallery.module.scss';

const Gallery = () => {
  const [buildKey, setBuildKey] = useState(null);
  const { breakpoint, width } = useBreakpoints();
  const { isOpened } = useContext(MenuContext);
  const { photos, arrowLeft, arrowRight } = useHomeGalleryAssets();

  useEffect(() => {
    setBuildKey(+new Date());
  }, [width]);

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Creative Atmosphere</h2>
      <div className={styles.sliderWrapper}>
        {breakpoint === BREAKPOINTS.DESKTOP && !isOpened ? (
          <Ticker
            key={buildKey}
            images={photos}
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
