import React, { useState, useEffect, useContext } from 'react';

import { GlobalContext } from '@contexts';
import { useGetBreakpoint } from '@hooks';
import { useGalleryImages } from '@hooks/queries';
import Slider from '@components/Slider';
import Ticker from '@components/Ticker';
import Item from './components/Item';

import styles from './Gallery.module.scss';

const Gallery = () => {
  const { breakpoint, width } = useGetBreakpoint();
  const [buildKey, setBuildKey] = useState(null);
  const { imagesAPI } = useContext(GlobalContext);
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
        {breakpoint === 'desktop' ? (
          <Ticker
            key={buildKey}
            images={galleryImages}
            leftArrow={icons['gallery/left-arrow.png']}
            rightArrow={icons['gallery/right-arrow.png']}
          />
        ) : (
          <Slider settings={settings}>
            {galleryImages.map((item, index) => {
              return <Item key={index} data-name={index} {...item} />;
            })}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default Gallery;
