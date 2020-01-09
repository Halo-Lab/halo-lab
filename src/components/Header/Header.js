import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import "./Header.scss";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "header-logo.svg"}) {
        publicURL
      }
    }
  `);
  const email = 'mail@halo-lab.com';
  
  return (
    <div>
      <div className="stars-wrapper">
        <div className="big-stars-bg-wrap">
          <div className="big-stars-bg"></div>
        </div>
        <div className="hidden-stars"></div>
        <div className="small-stars-bg-wrap">
          <div className="small-stars-bg"></div>
        </div>
      </div>

      <div id="wrapper">
        <div className="light"></div>

        <header className="clearfix main-header">
          <div className="header-container">

            <div className="header-left">
              <Link to={"/"} rel="home">
                <img src={data.file.publicURL} className="logo" alt="Halo Lab logotype"/>
              </Link>
            </div>
            
            <div className="header-right">
              {/* <?php wp_nav_menu(['theme_location'  => 'main', 'container_class' => 'main-menu', 'link_before' => '<div class="menu-link__circle"></div><span class="menu-link__text">', 'link_after' => '</span>']); ?> */}
              
              
              <a href={`mailto:${email}`} className="mail">
                <span className="desctop_mail">{email}</span>
              </a>
              <div className="burger-menu burger-menu--closed">
                <span className="bar"></span>
              </div>

            </div>
              
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
