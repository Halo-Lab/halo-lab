import React, { useContext } from 'react';

import {
  useHomeWorksAssets,
  usePortfolioWorksAssets,
  useHomeGalleryAssets,
} from '@hooks/queries';
import Title from './components/Title';
import Ticker from '@components/Ticker';
import Swiper from 'react-id-swiper';
import Item from './components/Item';

import { useBreakpoints, BREAKPOINTS } from '@hooks';
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

  return (
    <div className={styles.container}>
      <Title icon={dribbbleRed} signature={textCircled} />
      {breakpoint === BREAKPOINTS.DESKTOP && !isOpened ? (
        <Ticker
          images={imageList}
          arrowLeft={arrowLeft}
          arrowRight={arrowRight}
          type="works"
        />
      ) : null}
      {breakpoint === BREAKPOINTS.MOBILE ||
      breakpoint === BREAKPOINTS.TABLET ? (
        <Swiper {...params}>
          {imageList.map((item, index) => {
            return <Item images={item} key={item[0] + index} />;
          })}
        </Swiper>
      ) : null}
    </div>
  );
};

export default Works;
