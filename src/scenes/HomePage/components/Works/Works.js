import React, { useState, useEffect } from 'react';
import { useHomeWorksAssets, usePortfolioWorksAssets } from '@hooks/queries';
import { useSpring, animated } from 'react-spring';
import Title from './components/Title';
import Item from './components/Item';

import { springDebounce } from '@helpers';

import styles from './Works.module.scss';

const Works = () => {
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
  const imageList = [
    [Web],
    [Investments, Travel, Starbank],
    [eScooter],
    [Art, Lazy, Teampoint],
    [North],
    [Realty, Hommy, Tude],
  ];

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', springDebounce(handleScroll));
    return () =>
      window.removeEventListener('scroll', springDebounce(handleScroll));
  }, [springDebounce]);

  const [{ springscrollY }, springsetScrollY] = useSpring(() => ({
    springscrollY: 0,
  }));
  const STEP = 5;
  springsetScrollY({ springscrollY: scrollY });
  const interpHeader = springscrollY.interpolate(
    o => `translateX(-${o / STEP}px)`
  );

  return (
    <div className={styles.container}>
      <Title icon={dribbbleRed} signature={textCircled} />
      <animated.div
        className={styles.items}
        style={{ transform: interpHeader }}
      >
        {imageList.map(item => {
          return <Item images={item} key={item[0].name} />;
        })}
      </animated.div>
    </div>
  );
};

export default Works;
