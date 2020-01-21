import React, { useContext } from 'react';

import Slider from '@components/Slider';
import Item from './components/Item';
import { GlobalContext } from '@contexts';
import { useDesktopStatus } from '@hooks';

import styles from './List.module.scss';

const List = () => {
  const { isDesktop } = useDesktopStatus(576);
  const { imagesAPI } = useContext(GlobalContext);
  const images = imagesAPI.get([
    'services/desing/web-desing-icon.svg',
    'services/desing/mobile-design-icon.svg',
    'services/desing/ux.svg',
    'services/desing/branding.svg',
  ]);

  const items = [
    {
      title: 'Websites Design',
      text:
        'We create comprehensive and sophisticated yet simple to use interfaces for your web app.',
      image: images['services/desing/web-desing-icon.svg'],
    },
    {
      title: 'Mobile Apps Design',
      text:
        'We create native mobile apps with a focus on natural gestures and interactions with the user.',
      image: images['services/desing/mobile-design-icon.svg'],
    },
    {
      title: 'UX/UI Design',
      text:
        'We design the flow of a multi-screen app, interactions and animations, to make interface feel amazing.',
      image: images['services/desing/ux.svg'],
    },
    {
      title: 'Branding',
      text:
        "We don't just create logos, we help our partners establish an all-encompassing brand experience.",
      image: images['services/desing/branding.svg'],
    },
  ];

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.container}>
      {isDesktop ? (
        <ul className={styles.list}>
          {items.map((item, index) => {
            return (
              <li key={index} className={styles.listItem}>
                <Item {...item} />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className={styles.wrapper}>
          <Slider settings={settings}>
            {items.map((item, index) => {
              return <Item key={index} {...item} />;
            })}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default List;
