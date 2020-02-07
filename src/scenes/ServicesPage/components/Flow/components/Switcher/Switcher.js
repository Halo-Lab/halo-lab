import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import styles from './Switcher.module.scss';

const Switcher = ({ items }) => {
  return (
    <Tabs>
      <TabList className={styles.tabList}>
        {items.map(({ title }, index) => {
          return (
            <Tab
              className={styles.tabListItem}
              key={index}
              style={{ flexBasis: `${100 / items.length}px` }}
            >
              <div className={styles.tabListIcon}>{index + 1}</div>
              <div className={styles.tabListTitle}>{title}</div>
            </Tab>
          );
        })}
      </TabList>

      {items.map(({ message }, index) => {
        return (
          <TabPanel key={index}>
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
