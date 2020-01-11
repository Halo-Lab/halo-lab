import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";

import { useToggleOpenedStatus } from "@hooks/index";
import Menu from "./_Menu";

import "./Header.scss";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "header-logo.svg"}) {
        publicURL
      }
    }
  `);
  const { isOpened, handleTogglingOpenedStatus } = useToggleOpenedStatus();
  const headerStatusClass = isOpened ? 'main-header--active' : '';
  const burgerStatusClass = isOpened ? 'burger-menu--open' : 'burger-menu--closed';
  const email = 'mail@halo-lab.com';
  const onBurgerMenuClick = () => {
    handleTogglingOpenedStatus();
  };
  
  return (
    <header className={`clearfix main-header ${headerStatusClass}`}>
      <div className="header-container">
        {
          isOpened ? (
            <Helmet>
              <body class="body-inside menu--open"></body>
            </Helmet>
          ) : null
        }

        <div className="header-left">
          <Link to={"/"} rel="home">
            <img src={data.file.publicURL} className="logo" alt="Halo Lab logotype"/>
          </Link>
        </div>
        
        <div className="header-right">
          <Menu/>
          {/* <?php wp_nav_menu(['theme_location'  => 'main', 'container_class' => 'main-menu', 'link_before' => '<div class="menu-link__circle"></div><span class="menu-link__text">', 'link_after' => '</span>']); ?> */}
          
          <a href={`mailto:${email}`} className="mail">
            <span className="desctop_mail">{email}</span>
          </a>

          <button className={`burger-menu ${burgerStatusClass}`}
            onClick={onBurgerMenuClick}
          >
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
