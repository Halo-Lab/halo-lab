import React, { useContext } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Menu from "./components/Menu";
import { MenuContext } from "@contexts";

import "./Header.scss";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "header-logo.svg"}) {
        publicURL
      }
    }
  `);

  const { isOpened, handleTogglingOpenedStatus } = useContext(MenuContext);

  const headerStatusClass = isOpened ? 'main-header--active' : '';
  const burgerStatusClass = isOpened ? 'burger-menu--open' : 'burger-menu--closed';
  const email = 'mail@halo-lab.com';
  
  return (
    <header className={`clearfix main-header ${headerStatusClass}`}>
      <div className="header-container">
        <div className="header-left">
          <Link to={"/"} rel="home">
            <img src={data.file.publicURL} className="logo" alt="Halo Lab logotype"/>
          </Link>
        </div>
        
        <div className="header-right">
          <Menu/>
          
          <a href={`mailto:${email}`} className="mail">
            <span className="desctop_mail">{email}</span>
          </a>

          <button
            className={`burger-menu ${burgerStatusClass}`}
            type="button"
            onClick={handleTogglingOpenedStatus}
          >
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
