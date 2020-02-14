import React, { useContext } from 'react';
import { Link } from 'gatsby';

import styles from './Menu.module.scss';

const Menu = () => {
  const items = [
    { title: 'Projects', link: '/portfolio', classes: 'menu-item__portfolio' },
    { title: 'Services', link: '/services', classes: 'menu-item__services' },
    { title: 'Blog', link: '/blog', classes: 'menu-item__blog' },
    { title: 'Contacts', link: '/contacts', classes: 'menu-item__contacts' },
  ];

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {items.map(({ title, link }, index) => {
          return (
            <li className={styles.item} key={title}>
              <Link to={link} className={styles.link}>
                <div className={styles.image} data-number={index + 1}>
                  <div className={styles.title}>{title}</div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
