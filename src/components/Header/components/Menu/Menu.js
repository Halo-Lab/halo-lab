import React from 'react';
import { Link } from 'gatsby';

import { useMenuAssets } from '@hooks/queries';

import styles from './Menu.module.scss';

const Menu = () => {
  const {
    blogIcon,
    blogStars,
    contactsIcon,
    contactsStars,
    portfolioIcon,
    portfolioStars,
    servicesIcon,
    servicesStars,
  } = useMenuAssets();

  const items = [
    {
      title: 'Projects',
      link: '/portfolio/',
      icon: portfolioIcon,
      stars: portfolioStars,
    },
    {
      title: 'Services',
      link: '/services/',
      icon: servicesIcon,
      stars: servicesStars,
    },
    {
      title: 'Blog',
      link: '/blog/',
      icon: blogIcon,
      stars: blogStars,
    },
    {
      title: 'Contacts',
      link: '/contacts/',
      icon: contactsIcon,
      stars: contactsStars,
    },
  ];

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {items.map(({ stars, icon, link, title }, index) => {
          return (
            <li
              key={title}
              style={{ animationDelay: `0.${index}s` }}
              className={styles.item}
            >
              <Link
                to={link}
                activeClassName={styles.active}
                className={styles.link}
              >
                <div className={styles.circle} data-circle={index + 1}></div>
                <div className={styles.title}>{title}</div>
                <div
                  style={{ backgroundImage: `url('${stars.publicURL}')` }}
                  className={styles.stars}
                ></div>
                <div
                  style={{ backgroundImage: `url('${icon.publicURL}')` }}
                  className={styles.icon}
                  data-icon={index + 1}
                ></div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
