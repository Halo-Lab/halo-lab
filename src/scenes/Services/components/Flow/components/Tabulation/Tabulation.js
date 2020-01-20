import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import styles from './Tabulation.module.scss';

const Tabulation = ({ items }) => {
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

Tabulation.defaultProps = {
  items: [],
};

Tabulation.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Tabulation;
