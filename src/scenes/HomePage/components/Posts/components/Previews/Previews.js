import React from 'react';

import Slider from '@components/Slider';
import Item from './components/Item';
import { useBreakpoints, BREAKPOINTS } from '@hooks';
import { useWordpressPosts } from '@hooks/queries';

import styles from './Previews.module.scss';

const Previews = () => {
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
      {breakpoint === BREAKPOINTS.MOBILE ? (
        <Slider settings={settings}>
          {items.map(item => {
            return <Item key={item.path} {...item} />;
          })}
        </Slider>
      ) : (
        <div className={styles.list}>
          {items.map(item => {
            return <Item key={item.path} {...item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Previews;
