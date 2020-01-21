import React, { useContext } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Menu from './components/Menu';
import { MenuContext, GlobalContext } from '@contexts';

import './Header.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
        }
      }
    }
  `);
  const { isOpened, handleTogglingOpenedStatus } = useContext(MenuContext);
  const { imagesAPI } = useContext(GlobalContext);

  const images = imagesAPI.get(['header-logo.svg']);

  const headerStatusClass = isOpened ? 'main-header--active' : '';
  const burgerStatusClass = isOpened
    ? 'burger-menu--open'
    : 'burger-menu--closed';

  return (
    <header className={`clearfix main-header ${headerStatusClass}`}>
      <div className="header-container">
        <div className="header-left">
          <Link to="/" rel="home">
            <img
              className="logo"
              src={images['header-logo.svg'].url}
              alt={images['header-logo.svg'].name}
            />
          </Link>
        </div>

        <div className="header-right">
          <Menu />

          <a href={`mailto:${data.site.siteMetadata.email}`} className="mail">
            <span className="desctop_mail">{data.site.siteMetadata.email}</span>
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
