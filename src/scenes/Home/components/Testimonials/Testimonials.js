import React, { useContext } from 'react';
import Slick from 'react-slick';

import Item from './components/Item';
import Arrow from './components/Arrow';
import { GlobalContext } from '@contexts';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
    dotsClass: styles.dots,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <Arrow myClass={styles.arrow} />,
    nextArrow: <Arrow myClass={styles.arrow} />,
  };

  return (
    <section className={styles.container}>
      <Slick {...settings}>
        <Item
          stars={images['stars-5.svg']}
          clutch={images['clutch-logo.svg']}
          rating={images['rating-logo.svg']}
        />
        <Item
          stars={images['stars-5.svg']}
          clutch={images['clutch-logo.svg']}
          rating={images['rating-logo.svg']}
        />
        <Item
          stars={images['stars-5.svg']}
          clutch={images['clutch-logo.svg']}
          rating={images['rating-logo.svg']}
        />
        <Item
          stars={images['stars-5.svg']}
          clutch={images['clutch-logo.svg']}
          rating={images['rating-logo.svg']}
        />
        <Item
          stars={images['stars-5.svg']}
          clutch={images['clutch-logo.svg']}
          rating={images['rating-logo.svg']}
        />
      </Slick>
    </section>
  );
};

export default Testimonials;
