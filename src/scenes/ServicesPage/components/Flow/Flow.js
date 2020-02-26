import React from 'react';

import Switcher from './components/Switcher';
import List from './components/List';
import { useBreakpoints, BREAKPOINTS } from '@hooks';

import styles from './Flow.module.scss';

const Flow = () => {
  const items = [
    {
      title: 'Investigation',
      message: `The starting point of any project is research. Its main three aspects are user flow, target audience and the product niche segmentation.`,
    },
    {
      title: 'Design',
      message: `The design process is as follows: prototype-UX design and UI design. They are based on preliminary research and customers brief.`,
    },
    {
      title: 'Development',
      message: `Once the design is approved, we hand over the product to our dev team. There we work with different framework libraries and programming languages. `,
    },
    {
      title: 'Testing',
      message: `The most important stage of any product creation is testing. The main types of testing: QA, responsive testing for all devices and code-review. `,
    },
    {
      title: 'Launch',
      message: `When a product successfully passes all kinds of testing, we launch it on the market. There we already see how it interacts with the target audience.`,
    },
    {
      title: 'Support',
      message: `Quality in detail, competence in the ability to communicate after the project implementation. We are glad to provide our clients with the necessary support.`,
    },
  ];
  const { breakpoint } = useBreakpoints();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Flow</h2>
      {breakpoint === BREAKPOINTS.DESKTOP ? (
        <Switcher items={items} />
      ) : (
        <List items={items} />
      )}
    </div>
  );
};

export default Flow;
