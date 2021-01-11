import { Location } from '@reach/router';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Subscribe from '@/components/Subscribe';
import PostThumbnail from '@/scenes/PostThumbnail';

import styles from './Switcher.module.scss';

const getDefaultTabIndex = (search) => {
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

const LOAD_MORE_POSTS_AMOUNT = 3;

const INITIAL_AMOUNT_OF_POSTS = 9;

const Switcher = ({ items, location }) => {
  const [numberOfRendered, setNumberOfRendered] = useState(INITIAL_AMOUNT_OF_POSTS);
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

  items.forEach((item) => {
    const categories = item.categories.map((item) => item.slug);

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
    const value = numberOfRendered + LOAD_MORE_POSTS_AMOUNT;
    setNumberOfRendered(value > items.length ? items.length : value);
  };

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
          const newItems = items.slice(0, numberOfRendered);
          return (
            <TabPanel key={title} className={styles.tabsContentContainer}>
              <ul className={styles.tabContentList}>
                {newItems.map((item) => {
                  const tabItemClass = classNames(styles.tabContentItem);
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
              </ul>
              {numberOfRendered >= items.length ? null : (
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

const Wrapped = (props) => {
  return (
    <Location>
      {(locationProps) => <Switcher {...locationProps} {...props} />}
    </Location>
  );
};

export default Wrapped;
