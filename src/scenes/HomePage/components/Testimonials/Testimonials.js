import React, { useState, useEffect } from 'react';

import Item from './components/Item';
import { useTestimonialsAssets } from '@hooks/queries';
import { useBreakpoints } from '@hooks';
import Swiper from 'react-id-swiper';
import styles from './Testimonials.module.scss';
import './Testimonials.scss';

const Testimonials = () => {
  const {
    clutchLogo,
    companyLogo1,
    companyLogo2,
    companyLogo3,
    companyLogo4,
    companyLogo5,
    stars,
  } = useTestimonialsAssets();

  const [buildKey, setBuildKey] = useState();
  const { width } = useBreakpoints();

  useEffect(() => {
    setBuildKey(+new Date());
  }, [width]);

  const items = [
    {
      author: `Alexander Kozma Ingal, Room Six`,
      companyLogo: companyLogo1,
      rating: '4.8',
      text: `They perfectly met my expectations — working with them felt like an extension of my in-house team.`,
    },
    {
      author: `Marshall Haas, CEO & Co-Founder, Need/Want`,
      companyLogo: companyLogo2,
      rating: '5.0',
      text: `The value we get from them and their quality work set them apart from others.`,
    },
    {
      author: `Bogdan Suchyk, Founder, Mobalytics`,
      companyLogo: companyLogo3,
      rating: '5.0',
      text: `I was most appreciative of their ability to provide us with designers for specific needs.`,
    },
    {
      author: `Anton Glance, Founder, Glance Tech Inc.`,
      companyLogo: companyLogo4,
      rating: '5.0',
      text: `Halo Lab was transparent about deliverables and any challenges the team was facing.`,
    },
    {
      author: `Panos Rigopoulos, Co-founder, Software Company`,
      companyLogo: companyLogo5,
      rating: '5.0',
      text: `Halo Lab works hard to produce good results at a reasonable price.`,
    },
  ];
  const params = {
    slidesPerView: 'auto',
    loop: true,
    speed: 500,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
  };

  return (
    <section className={`${styles.container} slider`}>
      <Swiper {...params} key={buildKey}>
        {items.map(item => {
          return (
            <Item
              key={item.author}
              generalLogo={clutchLogo}
              stars={stars}
              {...item}
            />
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
