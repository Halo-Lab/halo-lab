import React from "react";
import { Link } from "gatsby";

import "./_Menu.scss";

const Menu = () => {
  const items = [
    { title: 'Projects', href: '/portfolio', classes: 'menu-item__portfolio' },
    { title: 'Services', href: '/services', classes: 'menu-item__services' },
    { title: 'Blog', href: '/blog', classes: 'menu-item__blog' },
    { title: 'Contacts', href: '/contacts', classes: 'menu-item__contacts' },
  ];

  return (
    <div className="main-menu">
      <ul className="menu-menu-1">
        {
          items.map(({ classes, href, title }) => {
            return (
              <li className={`menu-item ${classes}`}>
                <Link to={href}>
                  <div className="menu-link__circle"></div>
                  <span className="menu-link__text">{title}</span>
                </Link>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Menu;
