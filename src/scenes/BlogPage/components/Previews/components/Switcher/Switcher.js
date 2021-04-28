import React, { useEffect, useState } from "react";
import { Location } from "@reach/router";
import PropTypes from "prop-types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import classNames from "classnames";

import PostThumbnail from "@scenes/PostThumbnail";

import styles from "./Switcher.module.scss";
import { Link } from "gatsby";

const getDefaultTabIndex = pathname => {
  let pathName;
  if (pathname.lastIndexOf("/") > 5) {
    let index = pathname.lastIndexOf("/");
    pathName = pathname.substring(0, index);
  } else pathName = pathname;
  switch (pathName) {
    case "all":
      return 0;
    case "/blog/agency":
      return 1;
    case "/blog/case-studies":
      return 2;
    case "/blog/news":
      return 3;
    default:
      return 0;
  }
};

const LOAD_MORE_POSTS_AMOUNT = 3;

const INITIAL_AMOUNT_OF_POSTS = 9;

const Switcher = ({ items, location, page }) => {
  const [numberOfRendered, setNumberOfRendered] = useState(
    INITIAL_AMOUNT_OF_POSTS
  );
  const defaultIndex = getDefaultTabIndex(location.pathname);
  const itemsAgency = [];
  const itemsCaseStudies = [];
  const itemsNews = [];
  const allCategories = [
    { title: "All", link: "/blog", items },
    { title: "#Agency", link: "/blog/agency", items: itemsAgency },
    { title: "#Case Studies", link: "/blog/case-studies", items: itemsCaseStudies },
    { title: "#News", link: "/blog/news", items: itemsNews }
  ];

  items.forEach(item => {
    const categories = item.categories.map(item => item.slug);

    if (categories.indexOf("agency") !== -1) {
      itemsAgency.push(item);
    }

    if (categories.indexOf("case-studies") !== -1) {
      itemsCaseStudies.push(item);
    }

    if (categories.indexOf("news") !== -1) {
      itemsNews.push(item);
    }
  });
  useEffect(() => {
    if (defaultIndex !== 0) {
      const value = numberOfRendered + LOAD_MORE_POSTS_AMOUNT * (page - 1);
      setNumberOfRendered(value > items.length ? items.length : value);
    }
  }, [page]);
  const handleClick = () => {
    const value = numberOfRendered + LOAD_MORE_POSTS_AMOUNT;
    setNumberOfRendered(value > items.length ? items.length : value);
  };
  return (
    <div className={styles.container}>
      <Tabs defaultIndex={defaultIndex} className={styles.tabsContainer}>
        <TabList className={styles.tabList}>
          {allCategories.map(({ title, link }) => {
            return (
              <Link to={link} className={styles.link} key={title}>
                <Tab key={title} className={styles.tabItem}>
                  <div>{title}</div>
                </Tab>
              </Link>
            );
          })}
        </TabList>

        {allCategories.map(({ title, items }) => {
          const newItems = items.slice(0, numberOfRendered);
          return (
            <TabPanel key={title} className={styles.tabsContentContainer}>
              <ul className={styles.tabContentList}>
                {newItems.map(item => {
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
            </TabPanel>
          );
        })}
      </Tabs>
    </div>
  );
};

Switcher.defaultProps = {
  items: []
};

Switcher.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  location: PropTypes.object,
  page: PropTypes.number
};

const Wrapped = props => {
  return (
    <Location>
      {locationProps => <Switcher {...locationProps} {...props} />}
    </Location>
  );
};

export default Wrapped;
