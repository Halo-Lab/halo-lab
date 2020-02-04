import React from 'react';

import Slider from '@components/Slider';
import Item from './components/Item';
import { useGetBreakpoint } from '@hooks';
import { useWordpressPosts } from '@hooks/queries';

import styles from './List.module.scss';

const List = () => {
  const { breakpoint } = useGetBreakpoint();
  const items = useWordpressPosts();

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
      {breakpoint !== 'mobile' ? (
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
