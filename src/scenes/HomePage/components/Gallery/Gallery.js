import React, { useContext } from 'react';

import { useGalleryImages } from '@hooks/queries';
import Slider from '@components/Slider';
import Item from './components/Item';
import { GlobalContext } from '@contexts';
import Ticker from '@components/Ticker';

import styles from './Gallery.module.scss';

const Gallery = () => {
  const images = useGalleryImages();
  console.log(images);

  // const images = imagesAPI.getArray([
  //   'gallery/gallery-1.jpg',
  //   'gallery/gallery-2.jpg',
  //   'gallery/gallery-3.jpg',
  // ]);
  // const items = [...images, ...images, ...images];

  // const settings = {
  //   arrows: false,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 0,
  //   speed: 2500,
  //   cssEase: 'linear',
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         autoplay: true,
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 991,
  //       settings: {
  //         autoplay: false,
  //         speed: 1500,
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 575,
  //       settings: {
  //         autoplay: false,
  //         speed: 1500,
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };

  const myImages = [
    { id: '0', title: 'First' },
    { id: '1', title: 'Second' },
    { id: '2', title: 'Third' },
    { id: '3', title: 'Fourth' },
    { id: '4', title: 'Fifth' },
    { id: '5', title: 'Sixth' },
    { id: '6', title: 'Seventh' },
    { id: '7', title: 'Eighth' },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>We are live</h2>
      <div className={styles.sliderWrapper}>
        {/* <Slider settings={settings}>
          {items.map(item => {
            return <Item key={item.path} {...item} />;
          })}
        </Slider> */}
        <Ticker images={images} />
      </div>
    </section>
  );
};

export default Gallery;
