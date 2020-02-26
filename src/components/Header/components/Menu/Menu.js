import React, { useContext } from 'react';
import { Link } from 'gatsby';

import { GlobalContext } from '@contexts';
import { useMenuAssets } from '@hooks/queries';

import styles from './Menu.module.scss';

const Menu = () => {
  const { imagesAPI } = useContext(GlobalContext);
  const images = imagesAPI.get([
    'menu/blog-icon.svg',
    'menu/blog-stars.svg',
    'menu/contacts-icon.svg',
    'menu/contacts-stars.svg',
    'menu/portfolio-icon.svg',
    'menu/portfolio-stars.svg',
    'menu/services-icon.svg',
    'menu/services-stars.svg',
  ]);

  const menuAssets = useMenuAssets();

  const items = [
    {
      title: 'Projects',
      link: '/portfolio/',
      icon: images['menu/portfolio-icon.svg'],
      stars: images['menu/portfolio-stars.svg'],
    },
    {
      title: 'Services',
      link: '/services/',
      icon: images['menu/services-icon.svg'],
      stars: images['menu/services-stars.svg'],
    },
    {
      title: 'Blog',
      link: '/blog/',
      icon: images['menu/blog-icon.svg'],
      stars: images['menu/blog-stars.svg'],
    },
    {
      title: 'Contacts',
      link: '/contacts/',
      icon: images['menu/contacts-icon.svg'],
      stars: images['menu/contacts-stars.svg'],
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
                  style={{ backgroundImage: `url('${stars.url}')` }}
                  className={styles.stars}
                ></div>
                <div
                  style={{ backgroundImage: `url('${icon.url}')` }}
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
