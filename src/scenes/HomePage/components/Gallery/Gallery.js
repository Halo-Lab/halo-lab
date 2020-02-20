import React from 'react';

import { useGetBreakpoint } from '@hooks';
import { useGalleryImages } from '@hooks/queries';
import Slider from '@components/Slider';
import Ticker from '@components/Ticker';
import Item from './components/Item';

import styles from './Gallery.module.scss';

const Gallery = () => {
  const { breakpoint } = useGetBreakpoint();
  const images = useGalleryImages();

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
          <Ticker images={images} />
        ) : (
          <Slider settings={settings}>
            {images.map(item => {
              return <Item key={item.name} {...item} />;
            })}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default Gallery;
