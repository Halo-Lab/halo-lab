import React, { useContext } from 'react';

import Slider from '@components/Slider';
import Item from './components/Item';
import { GlobalContext } from '@contexts';

import styles from './Testimonials.module.scss';

const Testimonials = () => {
  const { imagesAPI } = useContext(GlobalContext);
  const images = imagesAPI.get([
    'stars-5.svg',
    'clutch-logo.svg',
    'rating-logo.svg',
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const defaultItem = (
    <Item
      stars={images['stars-5.svg']}
      clutch={images['clutch-logo.svg']}
      rating={images['rating-logo.svg']}
    />
  );

  return (
    <section className={styles.container}>
      <Slider settings={settings}>
        {defaultItem}
        {defaultItem}
        {defaultItem}
        {defaultItem}
      </Slider>
    </section>
  );
};

export default Testimonials;
