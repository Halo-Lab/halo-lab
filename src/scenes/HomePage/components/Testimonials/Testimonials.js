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

  const items = [
    {
      author: `Alexander Kozma Ingal, Room Six`,
      companyLogo: images['rating-logo.svg'],
      rating: '5.0',
      text: `They perfectly met my expectations — working with them felt like an extension of my in-house team.`,
      // remove -->
      stars: images['stars-5.svg'],
      clutch: images['clutch-logo.svg'],
    },
    {
      author: `Marshall Haas, CEO & Co-Founder, Need/Want`,
      companyLogo: images['rating-logo.svg'],
      rating: '5.0',
      text: `The value we get from them and their quality work set them apart from others.`,
      // remove -->
      stars: images['stars-5.svg'],
      clutch: images['clutch-logo.svg'],
    },
    {
      author: `Bogdan Suchyk, Founder Mobalytics`,
      companyLogo: images['rating-logo.svg'],
      rating: '5.0',
      text: `I was most appreciative of their ability to provide us with designers for specific needs.`,
      // remove -->
      stars: images['stars-5.svg'],
      clutch: images['clutch-logo.svg'],
    },
    {
      author: `Anton Glance, Founder, Glance Tech Inc.`,
      companyLogo: images['rating-logo.svg'],
      rating: '5.0',
      text: `Halo Lab was transparent about deliverables and any challenges the team was facing.`,
      // remove -->
      stars: images['stars-5.svg'],
      clutch: images['clutch-logo.svg'],
    },
    {
      author: `Panos Rigopoulos Cofounder, Software Company`,
      companyLogo: images['rating-logo.svg'],
      rating: '5.0',
      text: `Halo Lab works hard to produce good results at a reasonable price.`,
      // remove -->
      stars: images['stars-5.svg'],
      clutch: images['clutch-logo.svg'],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className={styles.container}>
      <Slider settings={settings}>
        {items.map(item => {
          return <Item key={item.author} {...item} />;
        })}
      </Slider>
    </section>
  );
};

export default Testimonials;
