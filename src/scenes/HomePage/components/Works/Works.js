import React, { useContext } from 'react';
import Swiper from 'react-id-swiper';
import useBreakpoints from 'use-breakpoints-width';

import { BREAKPOINTS } from '@constants';

import ThemeContext from '@context/ThemeContext';

import {
  useHomeWorksAssets,
  usePortfolioWorksAssets,
  useHomeGalleryAssets,
} from '@hooks/queries';

import Ticker from '@components/Ticker';

import Title from './components/Title';
import Item from './components/Item';

import styles from './Works.module.scss';

const Works = () => {
  const { breakpoint } = useBreakpoints();
  const { themeState } = useContext(ThemeContext);

  const { dribbbleRed, textCircled } = usePortfolioWorksAssets();
  const {
    Art,
    eScooter,
    Web,
    Hommy,
    Investments,
    Lazy,
    Starbank,
    Teampoint,
    Travel,
    Tude,
    Realty,
    North,
  } = useHomeWorksAssets();
  const { arrowLeft, arrowRight } = useHomeGalleryAssets();
  const imageList = [
    [Web],
    [Investments, Travel, Starbank],
    [eScooter],
    [Art, Lazy, Teampoint],
    [North],
    [Realty, Hommy, Tude],
  ];

  const params = {
    slidesPerView: 'auto',
    loop: true,
    speed: 500,
    containerClass: styles.slider,
  };

  const images = imageList.map(image => {
    return {
      name: `${image[0].name}`,
      element: <Item images={image} />,
    };
  });

  return (
    <div className={styles.container}>
      <Title icon={dribbbleRed} signature={textCircled} />
      {breakpoint === BREAKPOINTS.DESKTOP && !themeState.menu.isOpen ? (
        <Ticker images={images} arrowLeft={arrowLeft} arrowRight={arrowRight} />
      ) : null}
      {breakpoint === BREAKPOINTS.MOBILE ||
      breakpoint === BREAKPOINTS.TABLET ? (
        <Swiper {...params}>
          {imageList.map(item => {
            return <Item images={item} key={item[0].name} />;
          })}
        </Swiper>
      ) : null}
    </div>
  );
};

export default Works;
