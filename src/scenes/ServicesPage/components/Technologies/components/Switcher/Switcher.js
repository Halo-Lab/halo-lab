import PropTypes from 'prop-types';
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { v4 as uuid } from 'uuid';

import styles from './Switcher.module.scss';

const Switcher = ({ items }) => {
  return (
    <Tabs>
      <TabList className={styles.tabList}>
        {items.map((item) => {
          return (
            <Tab className={styles.tabListItem} key={uuid()}>
              <div className={styles.tabListTitle}>{item.title}</div>
            </Tab>
          );
        })}
      </TabList>

      {items.map(({ items: tab }) => {
        return (
          <TabPanel key={uuid()}>
            <ul className={styles.tabContentList}>
              {tab.map(({ title, image }, index) => {
                const inlineStyles = { animationDelay: `0.${index}s` };
                return (
                  <li
                    key={uuid()}
                    className={styles.tabContentItem}
                    style={inlineStyles}
                  >
                    <div className={styles.tabContentIcon}>
                      <img
                        src={image.publicURL}
                        alt="technologies item icon"
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.tabContentTitle}>{title}</div>
                  </li>
                );
              })}
            </ul>
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
