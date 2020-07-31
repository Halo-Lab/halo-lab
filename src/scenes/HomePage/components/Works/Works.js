import React, { useContext } from 'react';
import useBreakpoints from 'use-breakpoints-width';
// import Img from 'gatsby-image';

import {
  useHomeWorksAssets,
  usePortfolioWorksAssets,
  useHomeGalleryAssets,
} from '@hooks/queries';
import Title from './components/Title';
import Ticker from '@components/Ticker';
import Swiper from 'react-id-swiper';
import Item from './components/Item';

import { BREAKPOINTS } from '@constants';
import { MenuContext } from '@contexts';

import styles from './Works.module.scss';

const Works = () => {
  const { breakpoint } = useBreakpoints();
  const { isOpened } = useContext(MenuContext);
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
      {breakpoint === BREAKPOINTS.DESKTOP && !isOpened ? (
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
