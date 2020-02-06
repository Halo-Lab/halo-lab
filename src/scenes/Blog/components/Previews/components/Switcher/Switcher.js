import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import PostThumbnail from '@scenes/PostThumbnail';

import styles from './Switcher.module.scss';

const Switcher = ({ items }) => {
  const itemsAgency = [];
  const itemsCaseStudies = [];
  const itemsNews = [];
  const allCategories = [
    { title: 'All', items },
    { title: 'Agency', items: itemsAgency },
    { title: 'Case Studies', items: itemsCaseStudies },
    { title: 'News', items: itemsNews },
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

  return (
    <div className={styles.container}>
      <Tabs>
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
          return (
            <TabPanel key={title}>
              <ul className={styles.tabContentList}>
                {items.map(item => {
                  return (
                    <li key={item.id} className={styles.tabContentItem}>
                      <PostThumbnail {...item} />
                    </li>
                  );
                })}
              </ul>
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
};

export default Switcher;
