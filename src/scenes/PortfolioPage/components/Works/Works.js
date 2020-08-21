import React from 'react';

import { useDribbbleShots, usePortfolioWorksAssets } from '@hooks/queries';
import Title from './components/Title';
import List from './components/List';

import styles from './Works.module.scss';

const Works = () => {
  const data = useDribbbleShots();
  const { arrowDown, dribbbleRed, textCircled } = usePortfolioWorksAssets();

  return (
    <div className={styles.container}>
      <Title icon={dribbbleRed} signature={textCircled} />
      <List items={data} icon={arrowDown} />
    </div>
  );
};

export default Works;
