import React, { useContext } from 'react';
import { Link } from 'gatsby';

import Menu from './components/Menu';
import { MenuContext, GlobalContext } from '@contexts';

import './Header.scss';

const Header = () => {
  const { isOpened, handleTogglingOpenedStatus } = useContext(MenuContext);
  const { images } = useContext(GlobalContext);

  const headerLogo = images.getItem('header-logo.svg');
  const headerStatusClass = isOpened ? 'main-header--active' : '';
  const burgerStatusClass = isOpened
    ? 'burger-menu--open'
    : 'burger-menu--closed';
  const email = 'mail@halo-lab.com';

  return (
    <header className={`clearfix main-header ${headerStatusClass}`}>
      <div className="header-container">
        <div className="header-left">
          <Link to="/" rel="home">
            <img src={headerLogo.url} className="logo" alt={headerLogo.name} />
          </Link>
        </div>

        <div className="header-right">
          <Menu />

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
