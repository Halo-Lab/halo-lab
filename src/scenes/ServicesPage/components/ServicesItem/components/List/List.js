import PropTypes from 'prop-types';
import React from 'react';
import useBreakpoints from 'use-breakpoints-width';
import { v4 as uuid } from 'uuid';

import Slider from '@/components/Slider';
import { BREAKPOINTS } from '@/constants';

import Item from './components/Item';

import styles from './List.module.scss';

const List = ({ items }) => {
  const { breakpoint } = useBreakpoints();

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
      {breakpoint === BREAKPOINTS.DESKTOP || breakpoint === BREAKPOINTS.TABLET ? (
        <ul className={styles.list}>
          {items.map((item) => {
            return (
              <li key={uuid()} className={styles.listItem}>
                <Item {...item} />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className={styles.wrapper}>
          <Slider settings={settings}>
            {items.map((item) => {
              return <Item key={uuid()} {...item} />;
            })}
          </Slider>
        </div>
      )}
    </div>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
