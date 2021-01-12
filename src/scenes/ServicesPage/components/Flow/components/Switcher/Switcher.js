import PropTypes from 'prop-types';
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { v4 as uuid } from 'uuid';

import styles from './Switcher.module.scss';

const Switcher = ({ items }) => {
  return (
    <Tabs>
      <TabList className={styles.tabList}>
        {items.map(({ title }, index) => {
          return (
            <Tab
              className={styles.tabListItem}
              key={uuid()}
              style={{ flexBasis: `${100 / items.length}px` }}
            >
              <div className={styles.tabListIcon}>{index + 1}</div>
              <div className={styles.tabListTitle}>{title}</div>
            </Tab>
          );
        })}
      </TabList>

      {items.map(({ message }) => {
        return (
          <TabPanel key={uuid()}>
            <div className={styles.tabContent}>{message}</div>
          </TabPanel>
        );
      })}
    </Tabs>
  );
};

Switcher.defaultProps = {
  items: [],
};

Switcher.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Switcher;
