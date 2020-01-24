import React, { useContext } from 'react';
import { Link } from 'gatsby';

import Menu from './components/Menu';
import { MenuContext, GlobalContext } from '@contexts';
import { useSiteMetadata } from '@hooks';

import './Header.scss';

const Header = () => {
  const metadata = useSiteMetadata();

  const { isOpened, handleTogglingIsOpened } = useContext(MenuContext);

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

          <a href={`mailto:${metadata.email}`} className="mail">
            <span className="desctop_mail">{metadata.email}</span>
          </a>

          <button
            className={`burger-menu ${burgerStatusClass}`}
            type="button"
            onClick={handleTogglingIsOpened}
          >
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
