import React from 'react';

import Slider from '@components/Slider';
import Item from './components/Item';
import { useBreakpoints, BREAKPOINTS } from '@hooks';
import { useWordpressPosts } from '@hooks/queries';

import styles from './List.module.scss';

const List = () => {
  const { breakpoint } = useBreakpoints();
  const items = useWordpressPosts().slice(0, 3);

  const settings = {
    dots: true,
    infinite: true,
    arrow: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.container}>
      {breakpoint !== BREAKPOINTS.MOBILE ? (
        <>
          {items.map(item => {
            return <Item key={item.path} {...item} />;
          })}
        </>
      ) : (
        <Slider settings={settings}>
          {items.map(item => {
            return <Item key={item.path} {...item} />;
          })}
        </Slider>
      )}
    </div>
  );
};

export default List;
