import React, { useState, useEffect, useContext } from 'react';

import { GlobalContext, MenuContext } from '@contexts';
import { useBreakpoints, BREAKPOINTS } from '@hooks';
import { useGalleryImages } from '@hooks/queries';
import Slider from '@components/Slider';
import Ticker from '@components/Ticker';
import Item from './components/Item';

import styles from './Gallery.module.scss';

const Gallery = () => {
  const { breakpoint, width } = useBreakpoints();
  const [buildKey, setBuildKey] = useState(null);
  const { imagesAPI } = useContext(GlobalContext);
  const { isOpened } = useContext(MenuContext);
  const icons = imagesAPI.get([
    'gallery/left-arrow.png',
    'gallery/right-arrow.png',
  ]);
  const galleryImages = useGalleryImages();

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
      <h2 className={styles.title}>We are live</h2>
      <div className={styles.sliderWrapper}>
        {breakpoint === BREAKPOINTS.DESKTOP && !isOpened ? (
          <Ticker
            key={buildKey}
            images={galleryImages}
            leftArrow={icons['gallery/left-arrow.png']}
            rightArrow={icons['gallery/right-arrow.png']}
          />
        ) : null}
        {breakpoint === BREAKPOINTS.MOBILE ||
        breakpoint === BREAKPOINTS.TABLET ? (
          <Slider settings={settings}>
            {galleryImages.map((item, index) => {
              return <Item key={index} data-name={index} {...item} />;
            })}
          </Slider>
        ) : null}
      </div>
    </section>
  );
};

export default Gallery;
