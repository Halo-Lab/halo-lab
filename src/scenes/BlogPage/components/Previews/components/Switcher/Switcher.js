import React, { useState } from 'react';
import { Location } from '@reach/router';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Subscribe from '../Subscribe';
import classNames from 'classnames';

import PostThumbnail from '@scenes/PostThumbnail';

import styles from './Switcher.module.scss';

const getDefaultTabIndex = search => {
  const value = new URLSearchParams(search).get('category');

  switch (value) {
    case 'all':
      return 0;
    case 'agency':
      return 1;
    case 'case-studies':
      return 2;
    case 'news':
      return 3;
    default:
      return 0;
  }
};

const STEP_VALUE = 3;

const Switcher = ({ items, location }) => {
  const [numberOfRendered, setNumberOfRendered] = useState(STEP_VALUE);
  const defaultIndex = getDefaultTabIndex(location.search);
  const itemsAgency = [];
  const itemsCaseStudies = [];
  const itemsNews = [];
  const allCategories = [
    { title: 'All', items },
    { title: '#Agency', items: itemsAgency },
    { title: '#Case Studies', items: itemsCaseStudies },
    { title: '#News', items: itemsNews },
  ];

  items.forEach(item => {
    const categories = item.categories.map(item => item.slug);

    if (categories.indexOf('agency') !== -1) {
      itemsAgency.push(item);
    }

    if (categories.indexOf('case-studies') !== -1) {
      itemsCaseStudies.push(item);
    }

    if (categories.indexOf('news') !== -1) {
      itemsNews.push(item);
    }
  });

  const handleClick = () => {
    const value = numberOfRendered + STEP_VALUE * 3;
    setNumberOfRendered(value > items.length ? items.length : value);
  };

  const columnItems = classNames(styles.tabContentList, styles.tabItemsColumn);
  const moreItemsWrapper = classNames(styles.tabContentItem, styles.moreItems);

  return (
    <div className={styles.container}>
      <Tabs defaultIndex={defaultIndex} className={styles.tabsContainer}>
        <TabList className={styles.tabList}>
          {allCategories.map(({ title }) => {
            return (
              <Tab key={title} className={styles.tabItem}>
                <div>{title}</div>
              </Tab>
            );
          })}
        </TabList>

        {allCategories.map(({ title, items }) => {
          const mainItem = items.slice(0, 1);
          const secondaryItems = items.slice(1, 3);
          const moreItems = items.slice(3, 3 + numberOfRendered);
          return (
            <TabPanel key={title} className={styles.tabsContentContainer}>
              <ul className={styles.tabContentList}>
                {mainItem.map(item => {
                  const tabItemClass = classNames(
                    styles.tabContentItem,
                    styles.mainItem
                  );
                  return (
                    <li
                      data-list-item="articles"
                      key={item.id}
                      className={tabItemClass}
                    >
                      <PostThumbnail {...item} />
                    </li>
                  );
                })}
                <ul className={columnItems}>
                  {secondaryItems.map(item => {
                    return (
                      <li
                        data-automation="articles"
                        key={item.id}
                        className={styles.tabContentItem}
                      >
                        <PostThumbnail {...item} />
                      </li>
                    );
                  })}
                </ul>
              </ul>
              <ul className={moreItemsWrapper}>
                {moreItems.map(item => {
                  return (
                    <li
                      data-automation="articles"
                      key={item.id}
                      className={styles.tabContentItem}
                    >
                      <PostThumbnail {...item} />
                    </li>
                  );
                })}
              </ul>

              {secondaryItems.length &&
              numberOfRendered >= items.length ? null : (
                <button className={styles.button} onClick={handleClick}>
                  Load more
                </button>
              )}
              <Subscribe />
            </TabPanel>
          );
        })}
      </Tabs>
    </div>
  );
};

Switcher.defaultProps = {
  items: [],
};

Switcher.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  location: PropTypes.object,
};

const Wrapped = props => {
  return (
    <Location>
      {locationProps => <Switcher {...locationProps} {...props} />}
    </Location>
  );
};

export default Wrapped;
