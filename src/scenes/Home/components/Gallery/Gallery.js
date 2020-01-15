import React, { useContext } from 'react';

import Slider from '@components/Slider';
import Item from './components/Item';
import { GlobalContext } from '@contexts';

import styles from './Gallery.module.scss';

const Gallery = () => {
  const { imagesAPI } = useContext(GlobalContext);
  const images = imagesAPI.getArray([
    'gallery/gallery-1.jpg',
    'gallery/gallery-2.jpg',
    'gallery/gallery-3.jpg',
  ]);
  const items = [...images, ...images, ...images];

  const settings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    cssEase: 'linear',
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>We are live</h2>
      <div>
        <Slider settings={settings}>
          {items.map(item => {
            return <Item key={item.path} {...item} />;
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;
