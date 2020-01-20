import React from 'react';

import Tabulation from './components/Tabulation';
import { useDesktopStatus } from '@hooks';

import styles from './Flow.module.scss';

const Flow = () => {
  const items = [
    {
      title: 'Investigate',
      message: `1) Halo Lab development process starts with understanding of your project and your needs, bottlenecks, and develop an appropriate estimation and project plan.`,
    },
    {
      title: 'Design',
      message: `2) Halo Lab development process starts with understanding of your project and your needs, bottlenecks, and develop an appropriate estimation and project plan.`,
    },
    {
      title: 'Development',
      message: `3) Halo Lab development process starts with understanding of your project and your needs, bottlenecks, and develop an appropriate estimation and project plan.`,
    },
    {
      title: 'Testing',
      message: `4) Halo Lab development process starts with understanding of your project and your needs, bottlenecks, and develop an appropriate estimation and project plan.`,
    },
    {
      title: 'Launch',
      message: `5) Halo Lab development process starts with understanding of your project and your needs, bottlenecks, and develop an appropriate estimation and project plan.`,
    },
    {
      title: 'Support',
      message: `6) Halo Lab development process starts with understanding of your project and your needs, bottlenecks, and develop an appropriate estimation and project plan.`,
    },
  ];
  const { isDesktop } = useDesktopStatus();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Flow</h2>
      {isDesktop ? <Tabulation items={items} /> : null}
    </div>
  );
};

export default Flow;
