import React from 'react';

import Slider from '@components/Slider';

import './Gallery.scss';
import styles from './Gallery.module.scss';

const Gallery = () => {
  const itemsNumber = 5;
  const items = [];

  const DefaultItem = ({ number }) => (
    <div className={styles.item}>Item {number}</div>
  );

  for (let i = 0; i < itemsNumber; i++) {
    items.push(<DefaultItem key={i} number={i} />);
  }

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
        <Slider settings={settings}>{items}</Slider>
      </div>
    </section>
  );
};

export default Gallery;
