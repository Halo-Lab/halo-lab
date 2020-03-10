import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import styles from './Switcher.module.scss';

const Switcher = ({ items }) => {
  return (
    <Tabs>
      <TabList className={styles.tabList}>
        {items.map((item, index) => {
          return (
            <Tab className={styles.tabListItem} key={index}>
              <div className={styles.tabListTitle}>{item.title}</div>
            </Tab>
          );
        })}
      </TabList>

      {items.map(({ items }, index) => {
        return (
          <TabPanel key={index}>
            <ul className={styles.tabContentList}>
              {items.map(({ title, image }, index) => {
                const inlineStyles = { animationDelay: `0.${index}s` };
                return (
                  <li
                    key={index}
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
